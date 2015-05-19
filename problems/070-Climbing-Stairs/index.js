/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    var dp = [];
    var k=2;
    dp[0]=1;
    dp[1]=2;
    while(k<n) {
        dp[k]=dp[k-1]+dp[k-2];
        k++;
    }
    return dp[n-1];
};