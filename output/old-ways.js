import { readFile } from 'fs/promises';
import { createRequire } from 'module';

// This file demonstrates outdated strategies for importing json files pre node 16.15.0
const json = JSON.parse(await readFile(new URL("./data.json", import.meta.url)));
const npmjson = JSON.parse(await readFile(new URL("test-json-import/data.json", import.meta.url)));

console.table(json);
console.table(npmjson);
const require = createRequire(import.meta.url);
const data = require("./data.json");
const npmdata = require("test-json-import/data.json");

console.table(data);
console.table(npmdata);
