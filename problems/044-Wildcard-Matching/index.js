/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = module.exports = function(s, p) {
	var m = s.length;
	var n = p.length;
	var i=0;
	var j=0;
	var recordS;
	var recordP;
	while(i!==m){
		if(s[i]===p[j] || p[j]==='?'){
			i++;
			j++;
		}
		else if(p[j]==='*'){
			recordS = i;
			recordP = j;
			j++;
		}
		else if(recordP !== undefined){
			i=recordS+1;
			j=recordP+1;
			recordS++;
		}
		else{
			return false;
		}
	}
	while(p[j]==='*') j++;
	return j===n;
};


// 递归超时
//var isMatch = module.exports = function(s, p) {
//	var strS = s;
//	var strP = p;
//	var lenS = s.length;
//	var lenP = p.length;
//	var isMatchHelper = function(posS, posP){
//		if(posP===lenP) return posS===lenS;
//		if(strP[posP] === '*'){
//			while(strP[posP+1]==='*') posP++;
//			while(posS<lenS){
//				if(isMatchHelper(posS,posP+1)) return true;
//				posS++;
//			}
//			return isMatchHelper(posS,posP+1);
//		}	
//		else{
//			if(strS[posS] === strP[posP] || (posS<lenS && strP[posP]==='?')){
//				return isMatchHelper(posS+1,posP+1);
//			}
//			else{
//				return false;
//			}
//		}
//	};
//	return isMatchHelper(0,0);
//};

// 位运算优化还是超空间T.T
//var isMatch = module.exports = function(s, p) {
//	var k=0;
//    while(p[k]==='*') k++;
//    if(k===p.length) return true;
//	
//	var bitDP = []; // an iteger represents 30 states
//	var getBit = function(i,j){
//		return (bitDP[i][Math.floor(j/30)]&(1<<(j%30)))>0?1:0;
//	};
//	
//	var setBit = function(i,j){
//		bitDP[i][Math.floor(j/30)] |= (1<<(j%30));
//	};
//	var m = s.length;
//	var n = p.length;
//	var i;
//	var j;
//	for(i=0;i<n+1;i++){
//		var states = [];
//		for(j=0;j*30<m+1;j++) states.push(0);
//		bitDP.push(states);
//	}
//	bitDP[0][0]|=1;
//	for(i=1;i<n+1;i++){
//		if(getBit(i-1,0) && p[i-1]==='*') setBit(i,0);
//	}
//	for(i=1;i<n+1;i++){
//		for(j=1;j<m+1;j++){
//			if(p[i-1]==='*'){
//				if(getBit(i-1,j) || getBit(i,j-1)) setBit(i,j);
//			}
//			else if(p[i-1]==='?'){
//				if(getBit(i-1,j-1)) setBit(i,j);
//			}
//			else{
//				if(getBit(i-1,j-1) && s[j-1]===p[i-1]) setBit(i,j);
//			}
//		}
//	}
//	
//	return getBit(n,m)?true:false;
//};

// memory limit exceeded
//var isMatch = module.exports = function(s, p) {
//    var dp = [];
//	var m = s.length;
//	var n = p.length;
//	var i;
//	var j;
//	for(i=0;i<m+1;i++){ dp[i] = []; dp[i][0]=false;}
//	dp[0][0] = true;
//	for(j=1;j<n+1;j++){ dp[0][j] = dp[0][j-1] && p[j-1]==='*';}
//	for(i=1;i<m+1;i++){
//		for(j=1;j<n+1;j++){
//			if(p[j-1] === '*'){
//				dp[i][j] = dp[i-1][j] || dp[i][j-1];
//			}
//			else if(p[j-1] === '?'){
//				dp[i][j] = dp[i-1][j-1];
//			}
//			else{
//				dp[i][j] = dp[i-1][j-1] && s[i-1]===p[j-1];
//			}
//		}
//	}
//	return dp[m][n];
//};