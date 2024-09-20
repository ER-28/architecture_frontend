import {inject, injectable} from 'inversify';
import {makeAutoObservable, runInAction} from 'mobx';
import { IAuthService } from './IAuthService';
import {AuthResponse, AuthResponseSchema, LoginInput} from "@/app/(apps)/auth/_model/Auth";
import {UserModel, UserSchema} from "@/app/(apps)/auth/_model/User";
import * as ITokenStorageService from "@/app/(apps)/auth/_services/ITokenStorageService";
import {TYPES} from "@/app/(apps)/auth/types";

@injectable()
export class AuthService implements IAuthService {
  private currentUser: UserModel | null = null;

  constructor(
    @inject(TYPES.ITokenStorageService) private tokenStorage: ITokenStorageService.ITokenStorageService
  ) {
    this.initializeFromStorage().then(() => {
      // Initialize from storage on app start
    });
    makeAutoObservable(this);
  }

  private async initializeFromStorage(): Promise<void> {
    const token = await this.tokenStorage.getToken();
    runInAction(() => {
      if (token) {
        this.currentUser = UserSchema.parse({
          id: '123e4567-e89b-12d3-a456-426614174000',
          username: 'user',
          email: 'user@example.com',
          role: 'user',
        });
      }
    });
  }

  async login(input: LoginInput): Promise<AuthResponse> {
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

      runInAction(() => {
        this.currentUser = authResponse.user;
      });
      this.tokenStorage.setToken(authResponse.token);
      return authResponse;
    }

    throw new Error('Invalid credentials');
  }

  async logout(): Promise<void> {
    this.tokenStorage.removeToken();
    runInAction(() => {
      this.currentUser = null;
    });
  }

  getCurrentUser(): UserModel | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.currentUser!== null && this.tokenStorage.getToken()!== null;
  }
}