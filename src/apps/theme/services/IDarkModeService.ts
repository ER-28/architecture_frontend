import type { DarkModeModel } from "../models/DarkModeModel";

export interface IDarkModeService {
	getDarkMode(): DarkModeModel;
	setDarkMode(isDarkMode: boolean): void;
	toggleDarkMode(): DarkModeModel;
	initializeDarkMode(): void;
}
