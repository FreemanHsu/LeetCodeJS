require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var linesplit = line.split(' ');
	var arr = linesplit[0].split('').map(Number);
	var result = require('./index')(arr, Number(linesplit[1])); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});