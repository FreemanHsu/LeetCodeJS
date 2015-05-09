/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = module.exports = function(digits) {
    if(digits == '') return [];
    var dict = {
        '2' : 'abc',
        '3' : 'def',
        '4' : 'ghi',
        '5' : 'jkl',
        '6' : 'mno',
        '7' : 'pqrs',
        '8' : 'tuv',
        '9' : 'wxyz'
    };
    
    var res = [];
    var i;
    var strArray = [];
    for(i=0; i<digits.length; i++){
        strArray.push(dict[digits[i]]);
    }
    helper(res, '', strArray);
    return res;
};

var helper = function(arr, str, strArray){
    if(strArray.length === 0){
        arr.push(str);
        return;
    }
    var i;
    var s = strArray[0];
    var newStrArray = strArray.slice(1,strArray.length);
    for (i=0; i<s.length; i++){
        helper(arr, str+s[i], newStrArray);
    }
};