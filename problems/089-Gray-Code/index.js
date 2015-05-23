/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    var res = [];
	var cnt = 1;
	var i;
	var step = 2;
	res.push(0);
	if(n==0) return res;
	res.push(1);
	if(n==1) return res;
	while(cnt < n){
		for(i=res.length-1;i>=0;i--){
			res.push(res[i]+step);
		}
		step *= 2;
		cnt++;
	}
	return res;
};