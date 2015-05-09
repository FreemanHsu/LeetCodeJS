/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = module.exports = function(s) {
    var dict = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    var i;
    var last;
    var current;
    var res = 0;
    
    for (i=0; i<s.length; i++){
        current = dict[s[i]];
        if (last && last<current){
            res -= 2*last;
        }
        res += current;
        last = current;
    }
    
    return res;
};