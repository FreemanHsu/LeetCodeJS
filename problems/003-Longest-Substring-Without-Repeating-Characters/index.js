/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = module.exports = function(s) {
	if (s.length === 0){
		return 0;
	}
	var record = {};
	var i;
	var ch;
	var start=0;
	var result=1;
	for (i=0; i<s.length; i++){
		ch = s[i];
		if (ch in record){
			result = Math.max(result, i-start);
			start = record[ch]+1;
			record={};
			record[ch]=i;
		}
		else{
			record[ch] = i;
		}
	}
	result = Math.max(result, i-start);
	return result;
};
//
//console.log(lengthOfLongestSubstring('bbbbbb'));
