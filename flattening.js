var arrays = [[1, 2, 3], [4, 5], [6]];

var newArray = (arrays.reduce(function(flatten, current){
	return flatten.concat(current);
}, []));
console.log(newArray)

// → [1, 2, 3, 4, 5, 6]
