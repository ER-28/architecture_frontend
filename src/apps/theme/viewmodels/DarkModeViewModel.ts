import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import type { DarkModeModel } from "../models/DarkModeModel";
import type { DarkModeService } from "../services/DarkModeService";
import TYPES from "../types";

@injectable()
export class DarkModeViewModel {
	private darkModeState: DarkModeModel;

	constructor(
		@inject(TYPES.IDarkModeService) private darkModeService: DarkModeService,
	) {
		makeAutoObservable(this);
		this.darkModeState = this.darkModeService.getDarkMode();
		this.darkModeService.initializeDarkMode();
	}

	get isDarkMode(): boolean {
		return this.darkModeState.isDarkMode;
	}

	toggleDarkMode(): void {
		this.darkModeState = this.darkModeService.toggleDarkMode();
	}

	setDarkMode(isDarkMode: boolean): void {
		this.darkModeService.setDarkMode(isDarkMode);
		this.darkModeState = this.darkModeService.getDarkMode();
	}
}
