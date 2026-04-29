import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "/lesbian-apotheosis-incremental/",
	plugins: [react()],
	test: {
		include: ["src/**/*.test.js", "tests/**/*.test.js"],
	},
});
