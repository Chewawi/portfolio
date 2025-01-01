import { getAvatar } from "./lanyard/api";

export const seo = {
	title: "Chewawi",
	description: "Portfolio",
	keywords: ["Chewawi", "Portfolio", "Aarón Rafael"].join(", "),
	thumbnail: await getAvatar(),
	author: "Aarón Rafael",
};
