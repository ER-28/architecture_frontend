import { useInjection } from "inversify-react";
import type React from "react";
import PORTAL_TYPES from "../../portail/types.ts";
import type { PortalConfigurationViewModel } from "../../portail/viewmodels/PortalConfigurationViewModel.ts";
import TYPES from "../types";
import type { LoginViewModel } from "../viewmodels/LoginViewModel.ts";
import LoginView from "../views/LoginView.tsx";

const Auth: React.FC = () => {
	const loginViewModel = useInjection<LoginViewModel>(TYPES.LoginViewModel);
	const portalConfigViewModel = useInjection<PortalConfigurationViewModel>(
		PORTAL_TYPES.PortalConfigurationViewModel,
	);

	return (
		<LoginView
			viewModel={loginViewModel}
			portalConfigViewModel={portalConfigViewModel}
		/>
	);
};

export default Auth;
