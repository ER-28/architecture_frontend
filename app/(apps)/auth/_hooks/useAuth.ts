import { useState, useEffect } from 'react';
import { AuthContainer } from '@/app/(apps)/auth/auth.config';
import { TYPES } from '@/app/(apps)/auth/types';
import { IAuthService } from '@/app/(apps)/auth/_services/IAuthService';
import { UserModel } from '@/app/(apps)/auth/_model/User';
import { AuthResponse, LoginInput } from '@/app/(apps)/auth/_model/Auth';

export const useAuth = () => {
  const authService = AuthContainer.get<IAuthService>(TYPES.IAuthService);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<UserModel | null>(null);

  useEffect(() => {
    // Fonction pour mettre à jour l'état
    const updateAuthState = () => {
      setIsAuthenticated(authService.isAuthenticated());
      setCurrentUser(authService.getCurrentUser());
    };

    // Mettre à jour l'état initial
    updateAuthState();

    // Optionnel : configurer un intervalle pour vérifier périodiquement l'état d'authentification
    const intervalId = setInterval(updateAuthState, 60000); // Vérifier toutes les minutes

    return () => clearInterval(intervalId);
  }, [authService]);

  const login = async (input: LoginInput): Promise<AuthResponse> => {
    const response = await authService.login(input);
    setIsAuthenticated(true);
    setCurrentUser(authService.getCurrentUser());
    return response;
  };

  const logout = async (): Promise<void> => {
    await authService.logout();
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return {
    isAuthenticated,
    currentUser,
    login,
    logout,
  };
};