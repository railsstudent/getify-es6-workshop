function foo() {
	console.log(a1);
	console.log(a2);

	return "";	
}

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo();
}

console.log(
	bar().join("") === "281012"
);
