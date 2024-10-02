import { EyeIcon, EyeOffIcon } from "lucide-react";
import { observer } from "mobx-react-lite";
import type React from "react";
import { useState } from "react";
import Loading from "../../../Loading.tsx";
import GradientBackground from "../../../assets/components/GradientBackground";
import type { PortalConfigurationViewModel } from "../../portal/viewmodels/PortalConfigurationViewModel.ts";
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
			return <Loading />;
		}

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			viewModel.login();
		};

		return (
			<GradientBackground startColor="#eb4034" endColor="#c2158b">
				<div className="bg-white rounded-lg shadow-lg w-full max-w-md">
					<div className="relative pb-12">
						<div className="px-8 pt-4 bg-gray-800 rounded-t-lg">
							<div className="flex justify-center">
								<img
									draggable={false}
									src={config.logo_url}
									alt={`${config.company_name} logo`}
									className="h-16 max-w-full"
								/>
							</div>
							<h1 className="text-2xl font-bold text-center text-white mt-2">
								{config.company_name}
							</h1>
						</div>
						<div
							className="absolute bottom-0 left-0 right-0 h-12 bg-gray-800"
							style={{
								borderBottomLeftRadius: "50% 100%",
								borderBottomRightRadius: "50% 100%",
							}}
						/>
					</div>
					<form onSubmit={handleSubmit} className="p-8">
						<div className="mb-4">
							<label htmlFor="email" className="block text-sm font-medium mb-1">
								Email*
							</label>
							<input
								type="email"
								id="email"
								className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
								placeholder="Renseignez votre adresse mail"
								value={viewModel.email}
								onChange={(e) => viewModel.setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="password"
								className="block text-sm font-medium mb-1"
							>
								Mot de passe*
							</label>
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
									placeholder="Renseignez votre mot de passe"
									value={viewModel.password}
									onChange={(e) => viewModel.setPassword(e.target.value)}
									required
								/>
								<button
									type="button"
									className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800"
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
									className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded accent-red-600 cursor-pointer"
								/>
								<label
									htmlFor="remember-me"
									className="ml-2 block text-sm cursor-pointer"
								>
									Se souvenir de moi
								</label>
							</div>
							<div className="text-sm">
								<a
									className="font-medium text-red-500 hover:text-red-600"
									href={"/forgot-password"}
								>
									Mot de passe oublié ?
								</a>
							</div>
						</div>
						<button
							type="submit"
							className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
						>
							Connexion
						</button>
					</form>
					<p className="text-xs text-center text-gray-400 py-4">
						<a href="/gdpr" className="hover:text-red-500">
							Politique de confidentialité - RGPD
						</a>
					</p>
				</div>
			</GradientBackground>
		);
	},
);

export default LoginView;
