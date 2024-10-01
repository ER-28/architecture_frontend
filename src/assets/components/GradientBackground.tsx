import type React from "react";
import type { ReactNode } from "react";
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
	const replacedSvg = backgroundSvg
		.replace(/#C22D2A/g, startColor)
		.replace(/#F5D50E/g, endColor);

	return (
		<div
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
			}}
		>
			<div
				dangerouslySetInnerHTML={{ __html: replacedSvg }}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: -1,
				}}
			/>
			<div
				style={{
					position: "relative",
					zIndex: 1,
					width: "100%",
					height: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default GradientBackground;
