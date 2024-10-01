import { injectable } from "inversify";
import type { IAuthService } from "./IAuthService";

@injectable()
export class AuthService implements IAuthService {
	async login(email: string, password: string): Promise<void> {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (email === "test@xefi.fr" && password === "password") {
			console.log("Login successful");
		} else {
			throw new Error("Invalid credentials");
		}
	}

	async logout(): Promise<void> {
		console.log("Logged out");
	}
}
