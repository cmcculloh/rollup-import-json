// This file demonstrates outdated strategies for importing json files pre node 16.15.0
// https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/

// Using readFile
import { readFile } from "fs/promises";
const json = JSON.parse(await readFile(new URL("./data.json", import.meta.url)));
const npmjson = JSON.parse(await readFile(new URL("test-json-import/data.json", import.meta.url)));

console.table(json);
console.table(npmjson);

// Using require()
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./data.json");
const npmdata = require("test-json-import/data.json");

console.table(data);
console.table(npmdata);
