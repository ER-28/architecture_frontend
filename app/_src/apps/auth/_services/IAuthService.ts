import {AuthResponse, LoginInput} from "@/app/_src/apps/auth/_model/Auth";
import {UserModel} from "@/app/_src/apps/auth/_model/User";

export interface IAuthService {
  login(input: LoginInput): AuthResponse;
  logout(): void;
  getCurrentUser(): UserModel | null;
  checkAuth(): boolean;
}