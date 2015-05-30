/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    var m = t.length;
    var n = s.length;
    var dp = [];
    var i;
    var j;
    for(i=0;i<=m;i++){
        dp[i] = [];
        dp[i][0] = 0;
    }
    for(j=0;j<=n;j++){
        dp[0][j] = 1;
    }
    for(i=1;i<=m;i++){
        for(j=1;j<=n;j++){
            dp[i][j]=(t[i-1]===s[j-1] && dp[i-1][j-1]+dp[i][j-1]) || dp[i][j-1];
        }
    }
    return dp[m][n];
};