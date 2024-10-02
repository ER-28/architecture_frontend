import type React from "react";

const Loading: React.FC = () => {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-900">
			<div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-red-500" />
		</div>
	);
};

export default Loading;
