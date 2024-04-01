const colors = {
	default: "#d9d9d9",
	notes: {
		100: "#bae2ff",
		200: "#b9ffdd",
		300: "#ffe8ac",
		400: "#ffcab9",
		500: "#f99494",
		600: "#9dd6ff",
		700: "#eca1ff",
		800: "#daff8b",
		900: "#ffa285",
		1000: "#cdcdcd",
		1100: "#979797",
		1200: "#a99a7c",
	},
};

const backgroundColor = {
	...colors,
};

const boxShadow = {
	primary: "1px 1px 3px 0px rgb(0,0,0, 25%)",
};

const size = {
	"96p": "96%",
	"98": "24.375rem",
	"99": "27.349rem",
	"100": "33.125rem",
};

const height = {
	...size,
};

const maxHeight = {
	...height,
};

const minHeight = {
	...height,
};

const width = {
	...size,
};

const maxWidth = {
	...width,
};

const minWidth = {
	...width,
};

// /** @type {import("tailwindcss").Config["theme"]} */

const themeconfig = {
	colors,
	backgroundColor,
	boxShadow,
	height,
	maxHeight,
	minHeight,
	width,
	maxWidth,
	minWidth,
};

module.exports = themeconfig;
