require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var linesplit = line.split(' ');
	var haystack = linesplit[0];
	var needle = linesplit[1];
	var result = require('./index')(haystack, needle); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});