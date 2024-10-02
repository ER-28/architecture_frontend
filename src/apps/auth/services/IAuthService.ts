export interface IAuthService {
	login(email: string, password: string, rememberMe: boolean): Promise<void>;
	logout(): Promise<void>;
	loginWithMicrosoft(): Promise<void>;
	forgotPassword(email: string): Promise<void>;
}
