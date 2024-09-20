import {AuthResponse, LoginInput} from "@/app/(apps)/auth/_model/Auth";
import {UserModel} from "@/app/(apps)/auth/_model/User";

export interface IAuthService {
  login(input: LoginInput): Promise<AuthResponse>;
  logout(): void;
  getCurrentUser(): UserModel | null;
  isAuthenticated(): boolean;
}