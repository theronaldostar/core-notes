const colors = {
	default: "#f0f2f5",
	input: "#50656e",
	note: {
		default: "#d9d9d9",
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
	primary: "1px 1px 3px 0 rgb(0,0,0, 25%)",
	secondary: "0 1px 7px 0 rgb(149,149,149, 25%)",
};

const size = {
	"48p": "48%",
	"96p": "96%",
	"98": "24.375rem",
	"99": "27.349rem",
	"100": "33.125rem",
	"110": "33.136rem",
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
