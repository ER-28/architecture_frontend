import { useInjection } from "inversify-react";
import type React from "react";
import TYPES from "../types";
import type { LoginViewModel } from "../viewmodels/LoginViewModel.ts";
import LoginView from "../views/LoginView.tsx";

const Auth: React.FC = () => {
	const loginViewModel = useInjection<LoginViewModel>(TYPES.LoginViewModel);

	return <LoginView viewModel={loginViewModel} />;
};

export default Auth;
