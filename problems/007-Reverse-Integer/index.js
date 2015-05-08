/**
 * @param {number} x
 * @return {number}
 */
var reverse = module.exports = function(x) {
    var INTMAX = Math.pow(2,31);
	var nums = [];
	var num = x;
	var res = 0;
	var i;
	var tmp;
	if(num<0) num=-num;
	while(num !== 0){
		tmp = num%10;
		nums.push(tmp);
		num =((num-tmp)/10);
	}
	for (i=0; i<nums.length; i++){
		res = res*10+nums[i];
		if (res>INTMAX){
			return 0;
		}
	}
	if (x<0) return -res;
	return res;
};