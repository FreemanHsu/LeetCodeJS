/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    var m = s1.length;
    var n = s2.length;
    if(m+n !== s3.length) return false;
    var i;
    var j;
    var dp = [];
    for(i=0;i<m+1;i++){
        dp[i]=[];
        for(j=0;j<n+1;j++){
            dp[i][j]=false;
        }
    }
    dp[0][0]=true;
    for(i=1;i<m+1;i++){
        dp[i][0] = dp[i-1][0] && s1[i-1]===s3[i-1];
    }
    for(j=1;j<n+1;j++){
        dp[0][j] = dp[0][j-1] && s2[j-1]===s3[j-1];
    }
    for(i=1;i<m+1;i++){
        for(j=1;j<n+1;j++){
            dp[i][j] = (s1[i-1]===s3[i+j-1] && dp[i-1][j]) || (s2[j-1]===s3[i+j-1] && dp[i][j-1]);
        }
    }
    return dp[m][n];
};