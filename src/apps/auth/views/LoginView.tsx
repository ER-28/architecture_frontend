import { EyeIcon, EyeOffIcon } from "lucide-react";
import { observer } from "mobx-react-lite";
import type React from "react";
import { useState } from "react";
import GradientBackground from "../../../assets/components/GradientBackground";
import type { PortalConfigurationViewModel } from "../../portail/viewmodels/PortalConfigurationViewModel.ts";
import type { LoginViewModel } from "../viewmodels/LoginViewModel";

interface LoginViewProps {
	viewModel: LoginViewModel;
	portalConfigViewModel: PortalConfigurationViewModel;
}

const LoginView: React.FC<LoginViewProps> = observer(
	({ viewModel, portalConfigViewModel }) => {
		const [showPassword, setShowPassword] = useState(false);

		const config = portalConfigViewModel.portalConfiguration;

		if (!config) {
			return <div>Loading...</div>; // Or a more sophisticated loading component
		}

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			viewModel.login();
		};

		// TODO: Add Microsoft login functionality
		// const loggingWithMicrosoft = (e: React.FormEvent) => {
		// 	e.preventDefault();
		// 	viewModel.loginWithMicrosoft();
		// };

		console.log(config.logo_url);

		return (
			<GradientBackground startColor="#eb4034" endColor="#c2158b">
				<div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
					<div className="flex justify-center mb-8">
						<img
							src={config.logo_url}
							alt={`${config.company_name} logo`}
							className="h-16 max-w-full"
						/>
					</div>
					<h1 className="text-2xl font-bold text-center text-white mb-8">
						{config.company_name}
					</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-400 mb-1"
							>
								Email*
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
								placeholder="Renseignez votre adresse mail"
								value={viewModel.email}
								onChange={(e) => viewModel.setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium text-gray-400 mb-1"
							>
								Mot de passe*
							</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
									placeholder="Renseignez votre mot de passe"
									value={viewModel.password}
									onChange={(e) => viewModel.setPassword(e.target.value)}
									required
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400"
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? (
										<EyeOffIcon className="h-5 w-5" />
									) : (
										<EyeIcon className="h-5 w-5" />
									)}
								</button>
							</div>
						</div>
						<div className="flex items-center justify-between mb-6">
							<div className="flex items-center">
								<input
									type="checkbox"
									id="remember-me"
									checked={viewModel.rememberMe}
									onChange={(e) => viewModel.setRememberMe(e.target.checked)}
									className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded accent-red-600"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm text-gray-400"
								>
									Se souvenir de moi
								</label>
							</div>
							<div className="text-sm">
								<a
									className="font-medium text-red-400 hover:text-red-300"
									href={"/forgot-password"}
								>
									Mot de passe oublié ?
								</a>
							</div>
						</div>
						<button
							type="submit"
							className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800"
						>
							Connexion
						</button>
					</form>
					{/* TODO: ADD Microsoft logging for portal */}
					{/*<div className="mt-6">*/}
					{/*	<button*/}
					{/*		type={"button"}*/}
					{/*		className="w-full border-gray-500 border-2 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 flex items-center justify-center"*/}
					{/*		onClick={loggingWithMicrosoft}*/}
					{/*	>*/}
					{/*		<img*/}
					{/*			src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"*/}
					{/*			alt="Microsoft logo"*/}
					{/*			className="w-5 h-5 mr-2"*/}
					{/*		/>*/}
					{/*		Continuer avec Microsoft*/}
					{/*	</button>*/}
					{/*</div>*/}
					<p className="mt-8 text-xs text-center text-gray-400">
						<a href="/gdpr" className="hover:text-orange-500">
							Politique de confidentialité - RGPD
						</a>
					</p>
				</div>
			</GradientBackground>
		);
	},
);

export default LoginView;
