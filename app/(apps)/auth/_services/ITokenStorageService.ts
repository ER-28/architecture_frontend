export interface ITokenStorageService {
  setToken(token: string): void;
  getToken(): Promise<string | null>;
  removeToken(): void;
}