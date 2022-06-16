var id = 1;
var data = {
	id: id
};

// This way of importing json is no longer valid in node 16.15.0+ because `assert` is non-optional.

console.table(data);
