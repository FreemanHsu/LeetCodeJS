require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var result = require('./index')(Number(line)); // Parameters to be added.
	console.log(result.toString());	// Result may need some transformation.
});