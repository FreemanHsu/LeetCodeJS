require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var arrays = line.split('|');
	var arrStr = arrays[0].split(' ');
	var i;
	var arr = [];
	for (i=0; i<arrStr.length; i++){
		arr.push(Number(arrStr[i]));
	}
	var result = require('./index')(arr, arrays[1]); // Parameters to be added.
	console.log(result.toString());	// Result may need some transformation.
});