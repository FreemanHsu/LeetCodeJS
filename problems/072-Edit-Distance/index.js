/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var m = word1.length;
    var n = word2.length;
    var i;
    var j;
    var dp = [];
    for(i=0;i<=m;i++){
        dp[i]=[];
        dp[i][0] = i;
    }
    for(j=1;j<=n;j++){
        dp[0][j] = j;
    }
    for(i=1;i<=m;i++){
        for(j=1;j<=n;j++){
            dp[i][j]=Math.min(dp[i-1][j]+1, dp[i][j-1]+1, word1[i-1]===word2[j-1]?dp[i-1][j-1]:dp[i-1][j-1]+1);
        }
    }
    return dp[m][n];
};