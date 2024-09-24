import {inject, injectable} from 'inversify';
import {makeAutoObservable} from 'mobx';
import {IAuthService} from './IAuthService';
import {AuthResponse, AuthResponseSchema, LoginInput} from "@/app/_src/apps/auth/_model/Auth";
import * as ITokenStorageService from "@/app/_src/apps/auth/_services/ITokenStorageService";
import {TYPES} from "@/app/_src/apps/auth/types";
import {UserModel, UserSchema} from "@/app/_src/apps/auth/_model/User";

@injectable()
export class AuthService implements IAuthService {

  constructor(
    @inject(TYPES.ITokenStorageService) private tokenStorage: ITokenStorageService.ITokenStorageService
  ) {
    this.initializeFromStorage()
    makeAutoObservable(this);
  }

  private initializeFromStorage(): void {
    this.tokenStorage.getToken();
  }

  login(input: LoginInput): AuthResponse {
    if (input.username === 'user' && input.password === 'password') {
      const authResponse = AuthResponseSchema.parse({
        user: {
          id: '123e4567-e89b-12d3-a456-426614174000',
          username: input.username,
          email: 'user@example.com',
          role: 'user',
        },
        token: 'fake-jwt-token',
      });
      this.tokenStorage.setToken(authResponse.token);
      return authResponse;
    }

    throw new Error('Invalid credentials');
  }

  logout(): void {
    this.tokenStorage.removeToken();
  }

  checkAuth(): boolean {
    return !!this.tokenStorage.getToken();
  }

  getCurrentUser(): UserModel | null {
    if (this.tokenStorage.getToken()) {
      // TODO: Replace with actual user data retrieval logic
      const user = {
        id: '123e4567-e89b-12d3-a456-426614174000',
        username: 'user',
        email: 'user@example.com',
        role: 'user' as const,
      };
      return UserSchema.parse(user);
    }
    return null;
  }
}