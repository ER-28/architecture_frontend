import { inject, injectable } from "inversify";
import { makeAutoObservable } from "mobx";
import type { IAuthService } from "../services/IAuthService";
import TYPES from "../types";

@injectable()
export class LoginViewModel {
	email = "";
	password = "";

	constructor(@inject(TYPES.IAuthService) private authService: IAuthService) {
		makeAutoObservable(this);
	}

	setEmail(email: string) {
		this.email = email;
	}

	setPassword(password: string) {
		this.password = password;
	}

	async login() {
		try {
			await this.authService.login(this.email, this.password);
		} catch (error) {
			console.error("Login failed:", error);
		}
	}
}
