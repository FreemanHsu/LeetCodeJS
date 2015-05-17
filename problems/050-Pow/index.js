/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x===0) return 0;
	if(x===1) return 1;
	if(x===-1) return n&0x01?-1:1;
	if(n===0) return 1;
	var negative = false;
	if(n<0) {
		negative=true;
		n=-n;
	}
	var res = 1;
	while(n>0){
		if(n&0x01){
			res *= x;
			n--;
		}
		x = x*x;
		n=n>>1;
	}
	return negative?1/res:res;
};