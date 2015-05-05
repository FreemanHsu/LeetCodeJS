require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	
	var result = require('./index')(); // Parameters to be added.
	console.log();	// Result may need some transformation.
});