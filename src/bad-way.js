// This way of importing json is no longer valid in node 16.15.0+ because `assert` is non-optional.
import data from "./data.json";

console.table(data);
