import data from "./node_modules/test-json-import/data.json" assert { type: "json" };
import { showMeTheData } from "test-json-import/index.js";

const getData = () => {
	console.log(JSON.stringify(data));
	return JSON.stringify(data);
};

console.log(showMeTheData());

export { getData, showMeTheData };