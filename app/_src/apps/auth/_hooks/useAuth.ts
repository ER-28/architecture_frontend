import { useCallback } from 'react';
import { AuthContainer } from '@/app/_src/apps/auth/auth.config';
import { TYPES } from '@/app/_src/apps/auth/types';
import { IAuthService } from '@/app/_src/apps/auth/_services/IAuthService';
import { UserModel } from "@/app/_src/apps/auth/_model/User";
import { LoginInput, AuthResponse } from "@/app/_src/apps/auth/_model/Auth";

export const useAuth = () => {
  const authService = AuthContainer.get<IAuthService>(TYPES.IAuthService);
  const currentUser = AuthContainer.get<UserModel | null>('currentUser');

  const login = useCallback((input: LoginInput): AuthResponse => {
    return authService.login(input);
  }, [authService]);

  const logout = useCallback(() => {
    authService.logout();
  }, [authService]);

  const checkAuth = useCallback(() => {
    return authService.checkAuth();
  }, [authService]);

  return {
    login,
    logout,
    currentUser,
    checkAuth,
  };
};