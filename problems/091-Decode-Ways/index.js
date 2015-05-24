/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
	if(s.length === 0) return 0;
	if(s[0] === '0') return 0;
	var cur = 1;
	var prev = 1;
	var tmp;
	var i;
	for(i=1;i<s.length;i++){
		if(s[i]==='0'){
			if(s[i-1]==='1' || s[i-1]==='2'){
				cur = prev;
				prev = 0;
			}
			else{
				return 0;
			}
		}
		if(s[i-1]==='0' || Number(s.slice(i-1,i+1))>26){
			prev = 0;
		}
		tmp = cur;
		cur = cur + prev;
		prev = tmp;
	}
	return cur;
};