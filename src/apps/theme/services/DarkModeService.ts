import { injectable } from "inversify";
import Cookies from "js-cookie";
import {
	type DarkModeModel,
	createDarkModeModel,
} from "../models/DarkModeModel";
import type { IDarkModeService } from "./IDarkModeService.ts";

@injectable()
export class DarkModeService implements IDarkModeService {
	private readonly DARK_MODE_COOKIE = "darkMode";

	getDarkMode(): DarkModeModel {
		const isDarkMode = Cookies.get(this.DARK_MODE_COOKIE) === "true";
		return createDarkModeModel(isDarkMode);
	}

	setDarkMode(isDarkMode: boolean): void {
		Cookies.set(this.DARK_MODE_COOKIE, isDarkMode.toString(), { expires: 365 });
		this.applyDarkMode(isDarkMode);
	}

	toggleDarkMode(): DarkModeModel {
		const currentMode = this.getDarkMode();
		const newMode = !currentMode.isDarkMode;
		this.setDarkMode(newMode);
		return createDarkModeModel(newMode);
	}

	private applyDarkMode(isDarkMode: boolean): void {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}

	initializeDarkMode(): void {
		const { isDarkMode } = this.getDarkMode();
		this.applyDarkMode(isDarkMode);
	}
}
