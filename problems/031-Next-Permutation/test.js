require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var arr = line.split('').map(Number);
	var result = require('./index')(arr); // Parameters to be added.
	console.log(result.join(''));	// Result may need some transformation.
});