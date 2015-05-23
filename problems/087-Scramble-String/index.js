/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = module.exports = function(s1, s2) {
    var len = s1.length;
    var dp = [];
    var i;
    var j;
    var k;
    var n;
    for(i=0;i<len+1;i++){
        dp[i] = [];
        for(j=0;j<len;j++){
            dp[i][j] = [];
            for(k=0;k<len;k++){
                dp[i][j][k] = false;
            }
        }
    }
    for(i=0;i<len;i++){
        for(j=0;j<len;j++){
            dp[1][i][j] = s1[i]===s2[j];
        }
    }
    for(n=2;n<len+1;n++){
        for(i=0;i+n<=len;i++){
            for(j=0;j+n<=len;j++){
                for(k=1;k<n;k++){
                    if((dp[k][i][j] && dp[n-k][i+k][j+k]) || (dp[k][i][j+n-k] && dp[n-k][i+k][j])){
                        dp[n][i][j] = true;
                    }
                }
            }
        }
    }
    return dp[len][0][0];
};