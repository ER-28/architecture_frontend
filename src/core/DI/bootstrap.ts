import { Container, interfaces } from "inversify";
import "reflect-metadata";
import Newable = interfaces.Newable;

type ModuleExports = Record<string, Newable<unknown>>;
type TypesModule = Record<string, symbol>;

async function bootstrapInversifyContainer(): Promise<Container> {
	const container = new Container();

	const serviceModules = import.meta.glob("../../apps/**/services/*.ts");
	const viewModelModules = import.meta.glob("../../apps/**/viewmodels/*.ts");
	const typesModules = import.meta.glob("../../apps/**/types.ts");

	const loadedTypesModules: Record<string, TypesModule> = {};
	for (const path in typesModules) {
		const appName = path.split("/")[3];
		const module = await typesModules[path]();
		loadedTypesModules[appName] = (module as { default: TypesModule }).default;
	}

	const bindModule = async (
		modulePath: string,
		moduleLoader: () => Promise<ModuleExports>,
		moduleType: "service" | "viewModel",
	) => {
		const appName = modulePath.split("/")[3];
		const types = loadedTypesModules[appName];
		const module = await moduleLoader();

		for (const [exportName, exportedItem] of Object.entries(module)) {
			if (typeof exportedItem === "function" && exportedItem.prototype) {
				const symbolKey =
					moduleType === "service" ? `I${exportName}` : exportName;

				if (types?.[symbolKey]) {
					if (moduleType === "service") {
						container
							.bind(types[symbolKey])
							.to(exportedItem)
							.inSingletonScope();
						console.log(
							`Bound ${moduleType}: ${exportName} in ${appName} (singleton)`,
						);
					} else {
						container
							.bind(types[symbolKey])
							.to(exportedItem)
							.inTransientScope();
						console.log(
							`Bound ${moduleType}: ${exportName} in ${appName} (transient)`,
						);
					}
				} else {
					console.warn(
						`Symbol not found for ${moduleType}: ${exportName} in ${appName}`,
					);
				}
			}
		}
	};

	for (const path in serviceModules) {
		await bindModule(
			path,
			serviceModules[path] as () => Promise<ModuleExports>,
			"service",
		);
	}

	for (const path in viewModelModules) {
		await bindModule(
			path,
			viewModelModules[path] as () => Promise<ModuleExports>,
			"viewModel",
		);
	}

	return container;
}

export { bootstrapInversifyContainer };
