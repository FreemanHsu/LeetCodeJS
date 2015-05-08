/**
 * @param {string} s
 * @return {string}
 */
 
var longestPalindrome = module.exports = function(s) {
    var ss = "#";
    var i;
    var p = [];
    var id = 0;
    var maxPos = 0;
    for (i=0; i<s.length; i++){
        ss = ss + s[i] + "#";
    }
    p[0]=0;
    for (i=1; i<ss.length; i++){
        if (p[id]+id > i){
            p[i] = Math.min((p[id]-(i-id)),p[2*id-i])
        }
        else{
            p[i] = 0;
        }
        while(ss[i+p[i]+1] && ss[i-p[i]-1] && ss[i+p[i]+1]===ss[i-p[i]-1]){
            p[i]++;
        }
        if ((p[i]+i)>p[id]+id){
            id = i;
        }
        if (p[i]>p[maxPos]){
            maxPos = i;
        }
    }
    var start = Math.floor(maxPos/2) - Math.floor(p[maxPos]/2);
    var end = start + p[maxPos];
    return s.slice(start, end);
};
 
// 动态规划 超时
//var longestPalindrome = module.exports = function(s) {
//    var dp=[];
//    var i;
//    var j;
//    var start = 0;
//    var length = 0;
//    var len;
//    for (i=0; i<s.length; i++){
//        dp[i] = [];
//        for (j=0; j<s.length; j++){
//            dp[i][j]=0;
//        }
//    }
//    for (i=0; i<s.length; i++){
//        dp[i][i]=1;
//    }
//    for (i=0; i<s.length-1;i++){
//        if (s[i] == s[i+1]){
//            dp[i][i+1] = 1;
//            start = i;
//            length = 2;
//        }
//    }
//    for (len=3; len<s.length+1; len++){
//        for (i=0; i<s.length-len+1; i++){
//            if (s[i]===s[i+len-1] && dp[i+1][i+len-2]===1){
//                s[i][len] = 1;
//                start = i;
//                length = len;
//            }
//        }
//    }
//    return s.slice(start, start+length);
//};