require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var linesplit = line.split(' ');
	var result = require('./index')(linesplit[0], linesplit[1]); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});