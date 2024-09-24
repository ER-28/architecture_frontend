import {CookieValueTypes} from "cookies-next";

export interface ITokenStorageService {
  setToken(token: string): void;

  getToken(): CookieValueTypes;
  removeToken(): void;
}