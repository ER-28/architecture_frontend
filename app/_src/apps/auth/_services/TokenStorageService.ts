import { injectable } from 'inversify';
import { ITokenStorageService } from './ITokenStorageService';
import {getCookie, setCookie, deleteCookie, CookieValueTypes} from "cookies-next";

@injectable()
export class TokenStorageService implements ITokenStorageService {
  private readonly TOKEN_KEY = 'auth_token';

  setToken(token: string): void {
    setCookie(this.TOKEN_KEY, token, {
      maxAge: 3600,
      path: '/',
    });
  }

  getToken(): CookieValueTypes {
    return getCookie(this.TOKEN_KEY);
  }

  removeToken(): void {
    deleteCookie(this.TOKEN_KEY);
  }
}