import data from 'test-json-import/data.json';
import { showMeTheData } from 'test-json-import/index.js';
export { showMeTheData } from 'test-json-import/index.js';

const getData = () => {
	console.log(JSON.stringify(data));
	return JSON.stringify(data);
};

console.log(showMeTheData());

export { getData };
