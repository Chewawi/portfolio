import { css } from "@styled-system/css";

export const HOVER_TEXT = css({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	color: "white",
	textDecoration: "none",
	transition: "color 0.2s",
	"&:hover": { color: "gray" },
});
