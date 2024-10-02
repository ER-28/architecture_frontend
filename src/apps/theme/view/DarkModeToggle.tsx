import { observer } from "mobx-react-lite";
import type React from "react";
import type { DarkModeViewModel } from "../viewmodels/DarkModeViewModel";

interface DarkModeToggleProps {
	viewModel: DarkModeViewModel;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = observer(
	({ viewModel }) => {
		return (
			<button
				type={"submit"}
				onClick={() => viewModel.toggleDarkMode()}
				className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
			>
				{viewModel.isDarkMode ? "Light Mode" : "Dark Mode"}
			</button>
		);
	},
);

export default DarkModeToggle;
