import { defineConfig } from "@pandacss/dev";
import { fadeInFromTopAndOutTop } from "~/app/page";

export default defineConfig({
	preflight: true,
	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],
	exclude: [],
	theme: {
		extend: {
			tokens: {
				colors: {
					brand: {
						value: "#ffd25a",
					},
					bg: {
						value: "#000000",
					},
					surf: {
						value: "#242424",
					},
					jet: {
						value: "#2D2D2D",
					},
					plat: {
						value: "#E0E0E0",
					},
				},
			},
			keyframes: {
				bounce: {
					"0%": {
						transform: "scale(0.875)",
					},
					"100%": {
						transform: "scale(1.125)",
					},
				},
			},
		},
	},
	globalCss: {
		extend: {
			body: {
				bg: "bg",
				color: "plat",
			},
		},
	},
	outdir: "styled-system",
	jsxFramework: "react",
});
