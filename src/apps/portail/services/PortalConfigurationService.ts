import type { AxiosResponse } from "axios";
import { injectable } from "inversify";
import apiWrapper from "../../../core/request/apiWrapper.ts";
import {
	type PortalConfigurationModel,
	PortalConfigurationSchema,
} from "../models/PortalConfigurationModel.ts";
import type { IPortalConfigurationService } from "./IPortalConfigurationService.ts";

@injectable()
export class PortalConfigurationService implements IPortalConfigurationService {
	private static readonly API_ENDPOINT = "/api/v2/customer_portal_settings";

	async getPortalConfiguration(): Promise<PortalConfigurationModel> {
		const response = await apiWrapper.fetchQuery(
			["portalConfiguration"],
			apiWrapper.apiGet<AxiosResponse<PortalConfigurationModel>>(
				PortalConfigurationService.API_ENDPOINT,
			),
		);

		return PortalConfigurationSchema.parse(response.data);
	}

	getCurrentConfiguration(): PortalConfigurationModel | null {
		return null;
	}

	isConfigurationLoaded(): boolean {
		return false;
	}

	resetPortalConfiguration(): Promise<void> {
		return Promise.resolve();
	}
}
