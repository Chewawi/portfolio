// @ts-check
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	experimental: {
		svg: true,
	},

	adapter: vercel(),
	output: "server"
});