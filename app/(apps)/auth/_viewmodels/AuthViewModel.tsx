import { inject, injectable } from 'inversify';
import { makeAutoObservable, runInAction } from 'mobx';
import { z } from 'zod';
import {LoginInputSchema} from "@/app/(apps)/auth/_model/Auth";
import {TYPES} from "@/app/(apps)/auth/types";
import * as IAuthService from "@/app/(apps)/auth/_services/IAuthService";

@injectable()
export class AuthViewModel {
  error: string | null = null;

  constructor(
    @inject(TYPES.IAuthService) private authService: IAuthService.IAuthService
  ) {
    makeAutoObservable(this);
  }

  get isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  get currentUser() {
    return this.authService.getCurrentUser();
  }

  async login(username: string, password: string): Promise<boolean> {
    this.error = null;
    try {
      const input = LoginInputSchema.parse({ username, password });
      await this.authService.login(input);
      return true;
    } catch (error) {
      runInAction(() => {
        if (error instanceof z.ZodError) {
          this.error = error.errors.map(e => e.message).join(', ');
        } else if (error instanceof Error) {
          this.error = error.message;
        } else {
          this.error = 'An unexpected error occurred';
        }
      });
      return false;
    }
  }

  logout() {
    this.authService.logout();
  }
}