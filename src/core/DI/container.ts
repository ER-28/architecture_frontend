import "reflect-metadata";
import { bootstrapInversifyContainer } from "./bootstrap.ts";

const AppContainer = bootstrapInversifyContainer();

export { AppContainer };
