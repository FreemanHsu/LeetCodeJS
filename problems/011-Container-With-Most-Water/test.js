require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var arrStr = line.split(' ');
	var i;
	var heights = [];
	for (i=0; i<arrStr.length; i++){
		heights.push(arrStr[i]);
	}
	var result = require('./index')(heights); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});