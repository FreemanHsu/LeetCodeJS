/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp=[];
	dp[0]=1;
	dp[1]=1;
	var i;
	var k;
	for (i=2; i<=n;i++){
		dp[i]=0;
		for(k=0;k<i;k++){
			dp[i] = dp[i] + (dp[k]*dp[i-1-k]);
		}
	}
	return dp[n];
};