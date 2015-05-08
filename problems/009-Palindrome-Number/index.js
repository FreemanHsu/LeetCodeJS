/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = module.exports = function(x) {
    if(x<0) return false;
	if(x<10) return true;
	var num = x;
	var i=0;
	var j=0;
	var d = 1;
	while(x/d>=10) d*=10;
	while(num !== 0){
		if (d === 1) return true;
		i = Math.floor(num/d);
		j = num % 10;
		if (i!==j) return false;
		num = (num%d-j)/10;
		d=d/100;
	}
	return true;
};