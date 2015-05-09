require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var strArray = line.split(' ');
	var result = require('./index')(strArray); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});