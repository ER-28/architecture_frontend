/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				gray: {
					50: "#f9f9f9",
					100: "#efefef",
					200: "#dddddd",
					300: "#cccccc",
					400: "#aaaaaa",
					500: "#999999",
					600: "#777777",
					700: "#555555",
					800: "#262626",
					900: "#111111",
				},
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
