/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var res = [];
	var i=digits.length-1;
	var carry = 1;
	var sum;
	while(i>=0){
		sum = digits[i] + carry;
		if(sum>9){
			carry=1;
			sum-=10;
		}
		else{
			carry=0;
		}
		res.push(sum);
		i--;
	}
	if(carry) res.push(1);
	return res.reverse();
};