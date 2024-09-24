import "reflect-metadata";
import { Container, interfaces } from "inversify";
import { TYPES } from "./types";
import { IAuthService } from "@/app/_src/apps/auth/_services/IAuthService";
import { AuthViewModel } from "@/app/_src/apps/auth/_viewmodels/AuthViewModel";
import { AuthService } from "@/app/_src/apps/auth/_services/AuthService";
import { TokenStorageService } from "@/app/_src/apps/auth/_services/TokenStorageService";
import { ITokenStorageService } from "@/app/_src/apps/auth/_services/ITokenStorageService";
import { UserModel } from "@/app/_src/apps/auth/_model/User";

const AuthContainer = new Container();

AuthContainer.bind<ITokenStorageService>(TYPES.ITokenStorageService).to(TokenStorageService).inSingletonScope();
AuthContainer.bind<IAuthService>(TYPES.IAuthService).to(AuthService).inSingletonScope();
AuthContainer.bind<AuthViewModel>(TYPES.AuthViewModel).to(AuthViewModel);

AuthContainer.bind<UserModel | null>('currentUser').toDynamicValue((context: interfaces.Context) => {
  const authService = context.container.get<IAuthService>(TYPES.IAuthService);
  return authService.getCurrentUser();
}).inRequestScope();

export { AuthContainer };