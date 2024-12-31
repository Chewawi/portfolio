import { type RecipeVariantProps, cva } from "@styled-system/css";
import { styled } from "@styled-system/jsx";

export const button = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		borderRadius: "xl",
		cursor: "pointer",
		transitionDuration: "fast",
		fontWeight: 700,
		w: "fit",
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
			pointerEvents: "none",
		},
		userSelect: "none",
	},
	variants: {
		variant: {
			primary: {
				bg: {
					base: "brand",
					_hover: "brand/60",
					_active: "brand/50",
				},
			},
			secondary: {
				bg: {
					base: "surf",
					_hover: "jet",
					_active: "jet",
				},
				color: "white",
			},
		},
		size: {
			sm: {
				h: 9,
				px: 4,
				py: 2,
			},
			md: {
				h: 10,
				px: 5,
				py: 2,
			},
			lg: {
				h: 11,
				px: 6,
				py: 4,
				fontSize: "lg",
			},
			xl: {
				h: 12,
				px: 8,
				py: 5,
				fontSize: "lg",
			},
		},
	},
	defaultVariants: {
		variant: "primary",
		size: "md",
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

export const Button = styled("button", button);
