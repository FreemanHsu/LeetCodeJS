/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var i=s.length-1;
	var count=0;
	while(i>=0){
		if(s[i]!==' ') break;
		i--;
	}
	while(i>=0){
		if(s[i]===' ') break;
		i--;
		count++;
	}
	return count;
};