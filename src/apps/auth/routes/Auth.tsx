import { useInjection } from "inversify-react";
import type React from "react";
import TYPES from "../types";
import type { LoginViewModel } from "../viewmodels/LoginViewModel.ts";
import Login from "../views/Login.tsx";

const Auth: React.FC = () => {
	const loginViewModel = useInjection<LoginViewModel>(TYPES.LoginViewModel);

	return <Login viewModel={loginViewModel} />;
};

export default Auth;
