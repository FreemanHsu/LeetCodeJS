/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var res=[];
	var i=a.length-1;
	var j=b.length-1;
	var carry = 0;
	var x;
	var y;
	while(i>=0 || j>=0){
		x=+a[i]||0;
		y=+b[j]||0;
		switch (x+y+carry) {
			case 0:
				res.push('0');
				carry = 0;
				break;
			case 1:
				res.push('1');
				carry = 0;
				break;
			case 2:
				res.push('0');
				carry = 1;
				break;
			case 3:
				res.push('1');
				carry = 1;
			default:
				break;
		}
		i--;
		j--;
	}
	if(carry) res.push('1');
	return res.reverse().join('');
};