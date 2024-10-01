import { Check, X } from "lucide-react";
import type React from "react";
import type { ReactNode } from "react";
import type { ToastModel } from "../models/Toast";
import type { ToastViewModel } from "../viewmodels/ToastViewModel.ts";

interface ToastProps extends ToastModel {
	viewModel: ToastViewModel;
}

const Toast: React.FC<ToastProps> = ({
	id,
	title,
	status,
	description,
	viewModel,
}) => {
	const statusStyles: Record<ToastModel["status"], string> = {
		success: "bg-white dark:bg-gray-800 text-green-600 dark:text-green-400",
		error: "bg-white dark:bg-gray-800 text-red-600 dark:text-red-400",
		warning: "bg-white dark:bg-gray-800 text-yellow-600 dark:text-yellow-400",
		info: "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400",
	};

	const styleClass = statusStyles[status] || statusStyles.info;

	const handleClose = () => {
		viewModel.closeToast(id);
	};

	const icons: Record<ToastModel["status"], ReactNode> = {
		success: <Check className="h-6 w-6" />,
		error: <X className="h-6 w-6" />,
		warning: <Check className="h-6 w-6" />,
		info: <Check className="h-6 w-6" />,
	};

	return (
		<div
			className={`flex items-center justify-between rounded-lg px-4 py-2 m-1 shadow-md ${styleClass}`}
		>
			<div className="flex items-center space-x-3">
				{icons[status] ? icons[status] : <Check className="h-6 w-6" />}
				<div>
					<p className="text-md font-medium">{title}</p>
					<p className="text-sm font-medium text-gray-600 dark:text-gray-400">
						{description}
					</p>
				</div>
			</div>
			<button
				type={"button"}
				onClick={handleClose}
				className="ml-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
			>
				<X className="h-5 w-5" />
			</button>
		</div>
	);
};

export default Toast;
