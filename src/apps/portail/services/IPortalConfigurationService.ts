import type { PortalConfiguration } from "../models/PortalConfiguration.ts";

export interface IPortalConfigurationService {
	/**
	 * Fetches the portal configuration from the server.
	 * @returns void.
	 * @throws An error if the fetch operation fails.
	 */
	getPortalConfiguration(): void;

	/**
	 * Resets the portal configuration to default values.
	 * @returns A promise that resolves when the reset is successful.
	 * @throws An error if the reset operation fails.
	 */
	resetPortalConfiguration(): Promise<void>;

	/**
	 * Checks if the portal configuration is loaded.
	 * @returns A boolean indicating whether the configuration is loaded.
	 */
	isConfigurationLoaded(): boolean;

	/**
	 * Gets the current portal configuration without fetching from the server.
	 * @returns The current PortalConfiguration object or null if not loaded.
	 */
	getCurrentConfiguration(): PortalConfiguration | null;
}
