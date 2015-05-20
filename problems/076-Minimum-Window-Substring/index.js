/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = module.exports = function(s, t) {
    var left = 0;
    var right = 0;
    var minStart = 0;
    var NONE = Math.pow(2,30);
    var minLength = NONE;
    var expected = {};
    var appeard = {};
    var count=0;
    var i;
    for(i=0;i<t.length;i++){
        expected[t[i]] = expected[t[i]] + 1 || 1;
        appeard[t[i]] = 0;
    }
    for(right=0;right<s.length;right++){
        if(s[right] in expected){
            if(appeard[s[right]] < expected[s[right]]){
                appeard[s[right]]++;
                count++;
            }
            else{
                appeard[s[right]]++;
            }
        }
        if(count === t.length){
            while(!(s[left] in expected) || appeard[s[left]] > expected[s[left]]){
                if(s[left] in expected) appeard[s[left]]--;
                left++;
            }
            if(right-left+1 < minLength){
                minLength = right-left+1;
                minStart = left;
            }
        }
    }
    if(minLength === NONE) return "";
    return s.slice(minStart, minStart+minLength);
};