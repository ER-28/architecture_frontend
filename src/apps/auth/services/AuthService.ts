import { injectable } from "inversify";
import type { IAuthService } from "./IAuthService";

@injectable()
export class AuthService implements IAuthService {
	async login(
		email: string,
		password: string,
		rememberMe: boolean,
	): Promise<void> {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		if (email === "test@xefi.fr" && password === "password") {
			console.log("Login successful");
			if (rememberMe) {
				console.log("User will be remembered");
				// Here you would typically set a persistent token or cookie
			}
		} else {
			throw new Error("Invalid credentials");
		}
	}

	async loginWithMicrosoft(): Promise<void> {
		await new Promise((resolve) => setTimeout(resolve, 1500));
		console.log("Microsoft login successful");
		// Here you would typically handle the OAuth token and user info
	}

	async forgotPassword(email: string): Promise<void> {
		await new Promise((resolve) => setTimeout(resolve, 1000));
		if (email === "test@xefi.fr") {
			console.log("Password reset email sent");
		} else {
			throw new Error("Email not found");
		}
	}

	async logout(): Promise<void> {
		await new Promise((resolve) => setTimeout(resolve, 500));
		console.log("Logged out");
		// Here you would typically clear any stored tokens or cookies
	}
}
