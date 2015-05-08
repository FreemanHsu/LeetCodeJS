require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var arrays = line.split(' ');
	var result = require('./index')(arrays[0], arrays[1]); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});