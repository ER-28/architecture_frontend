import type React from "react";
import { type ReactNode, useMemo } from "react";
import backgroundSvg from "../img/background.svg?raw";

interface GradientBackgroundProps {
	startColor: string;
	endColor: string;
	children: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
	startColor,
	endColor,
	children,
}) => {
	const backgroundImageUrl = useMemo(() => {
		const replacedSvg = backgroundSvg
			.replace(/#C22D2A/g, startColor)
			.replace(/#F5D50E/g, endColor);

		const encodedSvg = encodeURIComponent(replacedSvg);
		return `data:image/svg+xml,${encodedSvg}`;
	}, [startColor, endColor]);

	return (
		<div className="relative w-screen h-screen overflow-hidden">
			<div
				className="absolute inset-0 w-full h-full"
				style={{
					zIndex: -1,
					backgroundImage: `url("${backgroundImageUrl}")`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			/>
			<div className="relative z-10 w-full h-full flex justify-center items-center">
				{children}
			</div>
		</div>
	);
};

export default GradientBackground;
