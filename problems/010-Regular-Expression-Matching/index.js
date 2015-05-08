/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 
// 递归好慢
var isMatch = module.exports = function(s, p) {
    return isMatchHelper(s, 0, p, 0);
};

var isMatchHelper = function(s,posS, p, posP){
    if(p.length === posP){
        return s.length === posS;
    }
    if(p[posP+1]!='*'){
        if(s[posS]===p[posP] || ( s[posS] && p[posP]==='.')){
            return isMatchHelper(s, posS+1, p, posP+1);
        }
        else{
            return false;
        }
    }
    else{
        while(s[posS]===p[posP] || ( s[posS] && p[posP]==='.')){
            if (isMatchHelper(s, posS, p, posP+2)){
                return true;
            }
            posS++;
        }
        return isMatchHelper(s, posS, p, posP+2);
    }
}