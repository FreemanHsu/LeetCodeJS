require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var arrStr = line.split(' ');
	var i;
	var arr = [];
	for (i=0; i<arrStr.length; i++){
		arr.push(Number(arrStr[i]));
	}
	var result = require('./index')(arr); // Parameters to be added.
	console.log(result.join(','));	// Result may need some transformation.
});