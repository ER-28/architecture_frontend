// app/services/TokenStorageService.ts
import { injectable } from 'inversify';
import { ITokenStorageService } from './ITokenStorageService';
import {deleteCookie, getCookie, setCookie} from "@/app/(apps)/auth/actions/cookies";

@injectable()
export class TokenStorageService implements ITokenStorageService {
  private readonly TOKEN_KEY = 'auth_token';

  async setToken(token: string): Promise<void> {
    await setCookie(this.TOKEN_KEY, token, {
      maxAge: 3600,
      path: '/',
    });
  }

  async getToken(): Promise<string | null> {
    const result = await getCookie(this.TOKEN_KEY);
    if (result.success) {
      return result.value || null;
    }

    return null;
  }

  async removeToken(): Promise<void> {
    await deleteCookie(this.TOKEN_KEY);
  }
}