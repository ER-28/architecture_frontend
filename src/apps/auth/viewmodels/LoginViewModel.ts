import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import type { IAuthService } from "../services/IAuthService";
import TYPES from "../types";

@injectable()
export class LoginViewModel {
	email = "";
	password = "";
	rememberMe = false;

	constructor(@inject(TYPES.IAuthService) private authService: IAuthService) {
		makeAutoObservable(this);
	}

	setEmail(email: string) {
		this.email = email;
	}

	setPassword(password: string) {
		this.password = password;
	}

	setRememberMe(remember: boolean) {
		this.rememberMe = remember;
	}

	async login() {
		try {
			await this.authService.login(this.email, this.password, this.rememberMe);
		} catch (error) {
			console.error("Login failed:", error);
			// Here you might want to set an error message observable
			// this.setErrorMessage("Login failed. Please try again.");
		}
	}

	async loginWithMicrosoft() {
		try {
			await this.authService.loginWithMicrosoft();
		} catch (error) {
			console.error("Microsoft login failed:", error);
			// Here you might want to set an error message observable
			// this.setErrorMessage("Microsoft login failed. Please try again.");
		}
	}

	resetForm() {
		this.email = "";
		this.password = "";
		this.rememberMe = false;
	}

	// Optional: Add a method to handle forgot password
	async forgotPassword() {
		try {
			await this.authService.forgotPassword(this.email);
			// You might want to set a success message observable
			// this.setSuccessMessage("Password reset instructions sent to your email.");
		} catch (error) {
			console.error("Forgot password request failed:", error);
			// Here you might want to set an error message observable
			// this.setErrorMessage("Failed to send password reset. Please try again.");
		}
	}
}
