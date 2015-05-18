require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var params = line.split(' ').map(Number);
	var result = require('./index')(params[0], params[1]); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});