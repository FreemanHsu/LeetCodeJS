require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var arrays = line.split('+');
	var num1str = arrays[0]===''?[]:arrays[0].split(' ');
	var num2str = arrays[1]===''?[]:arrays[1].split(' ');
	var i;
	var num1 = [];
	var num2 = [];
	for (i=0;i<num1str.length; i++){
		num1.push(Number(num1str[i]));
	}
	for (i=0;i<num2str.length; i++){
		num2.push(Number(num2str[i]));
	}
	var result = require('./index')(num1, num2); // Parameters to be added.
	console.log(result);	// Result may need some transformation.
});