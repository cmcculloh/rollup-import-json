import json from "@rollup/plugin-json";

export default [
	{
		input: "src/bad-way.js",
		output: {
			file: "output/bad-way.js",
			format: "es",
		},
		plugins: [json()],
	},
	{
		input: "src/old-ways.js",
		output: {
			file: "output/old-ways.js",
			format: "es",
		},
		plugins: [json()],
	},
	{
		input: "src/index.js",
		output: {
			file: "output/index.js",
			format: "es",
		},
		plugins: [json()],
	},
];
