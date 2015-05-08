require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var arrays = line.split(' ');
	var s = arrays[0];
	var num = Number(arrays[1]);
	var result = require('./index')(s, num); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});