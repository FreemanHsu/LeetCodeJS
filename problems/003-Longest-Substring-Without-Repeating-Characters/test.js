require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var s = line.toString();
	var result = require('./index')(s); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});