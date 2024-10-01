import { observer } from "mobx-react-lite";
import type React from "react";
import type { ToastModel } from "../models/Toast";
import type { ToastViewModel } from "../viewmodels/ToastViewModel";
import Toast from "./Toast";

interface ToastContainerProps {
	viewModel: ToastViewModel;
}

const ToastContainer: React.FC<ToastContainerProps> = observer(
	({ viewModel }) => {
		const getPositionClasses = (position: ToastModel["position"]): string => {
			const baseClasses = "fixed z-50 w-full sm:max-w-sm";
			switch (position) {
				case "top-left":
					return `${baseClasses} top-0 left-0 sm:m-4`;
				case "top-center":
					return `${baseClasses} top-0 left-1/2 transform -translate-x-1/2 sm:m-4`;
				case "top-right":
					return `${baseClasses} top-0 right-0 sm:m-4`;
				case "bottom-left":
					return `${baseClasses} bottom-0 left-0 sm:m-4`;
				case "bottom-center":
					return `${baseClasses} bottom-0 left-1/2 transform -translate-x-1/2 sm:m-4`;
				default:
					return `${baseClasses} bottom-0 right-0 sm:m-4`;
			}
		};

		const groupedToasts = viewModel.toasts.reduce<
			Record<ToastModel["position"], ToastModel[]>
		>(
			(acc, toast) => {
				if (!acc[toast.position]) acc[toast.position] = [];
				acc[toast.position].push(toast);
				return acc;
			},
			{} as Record<ToastModel["position"], ToastModel[]>,
		);

		return (
			<>
				{Object.entries(groupedToasts).map(([position, positionToasts]) => (
					<div
						key={position}
						className={getPositionClasses(position as ToastModel["position"])}
					>
						{positionToasts.map((toast) => (
							<Toast key={toast.id} {...toast} viewModel={viewModel} />
						))}
					</div>
				))}
			</>
		);
	},
);

export default ToastContainer;
