const extend = require("@app/web/shared/theme");

// "**/*.{js,ts,jsx,tsx,mdx}", "app/**/*.{js,ts,jsx,tsx,mdx}", "components/**/*.{js,ts,jsx,tsx,mdx}";

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"**/*.{js,ts,jsx,tsx}",
		"app/**/*.{js,ts,jsx,tsx}",
		"shared/**/*.{js,ts,jsx,tsx}",
		//
	],
	theme: { extend },
	plugins: [],
};
