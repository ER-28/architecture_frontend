import { inject, injectable } from "inversify";
import { makeAutoObservable, runInAction } from "mobx";
import type { PortalConfigurationModel } from "../models/PortalConfigurationModel.ts";
import type { PortalConfigurationService } from "../services/PortalConfigurationService.ts";
import TYPES from "../types";

@injectable()
export class PortalConfigurationViewModel {
	private configuration: PortalConfigurationModel | null = null;
	private isLoading = false;
	private error: string | null = null;

	constructor(
		@inject(TYPES.IPortalConfigurationService)
		private configService: PortalConfigurationService,
	) {
		makeAutoObservable(this);

		this.fetchPortalConfiguration();
	}

	get portalConfiguration() {
		return this.configuration;
	}

	get isConfigLoading() {
		return this.isLoading;
	}

	get configError() {
		return this.error;
	}

	async fetchPortalConfiguration() {
		this.isLoading = true;
		this.error = null;

		try {
			const config = await this.configService.getPortalConfiguration();
			runInAction(() => {
				this.configuration = config;
				this.isLoading = false;
			});
		} catch (error) {
			console.log(error);
			runInAction(() => {
				this.error =
					error instanceof Error ? error.message : "An unknown error occurred";
				this.isLoading = false;
			});
		}
	}

	// Helper methods to access specific configuration properties
	get companyName() {
		return this.configuration?.company_name ?? "";
	}

	get loginMessage() {
		return this.configuration?.login_message ?? "";
	}

	get welcomeMessage() {
		return this.configuration?.welcome_message ?? "";
	}

	get primaryColor() {
		return this.configuration?.colors?.primary ?? "";
	}

	// Add more getter methods as needed for specific properties
}
