import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "./types";
import {IAuthService} from "@/app/(apps)/auth/_services/IAuthService";
import {AuthViewModel} from "@/app/(apps)/auth/_viewmodels/AuthViewModel";
import {AuthService} from "@/app/(apps)/auth/_services/AuthService";
import {TokenStorageService} from "@/app/(apps)/auth/_services/TokenStorageService";
import {ITokenStorageService} from "@/app/(apps)/auth/_services/ITokenStorageService";

const AuthContainer = new Container();

AuthContainer.bind<ITokenStorageService>(TYPES.ITokenStorageService).to(TokenStorageService).inSingletonScope();
AuthContainer.bind<IAuthService>(TYPES.IAuthService).to(AuthService).inSingletonScope();
AuthContainer.bind<AuthViewModel>(TYPES.AuthViewModel).to(AuthViewModel);

export { AuthContainer };