/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = module.exports = function(strs) {
    if (strs.length === 0){
        return '';
    }
    if (strs.length === 1){
        return strs[0];
    }
    var res = '';
    var ch;
    var i;
    var j;
    for(i=0; i<strs[0].length; i++){
        ch = strs[0][i];
        if (ch){
            for (j=1; j<strs.length; j++){
                if(strs[j][i] !== ch){
                    return res;
                }
            }
            res += ch;
        }
    }
    return res;
};