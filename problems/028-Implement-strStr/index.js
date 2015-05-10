/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = module.exports = function(haystack, needle) {
    var next = [];
    calNext(next, needle);
    var i=0;
    var j=0;
    while(i<haystack.length && j<needle.length){
        if(j===-1 || haystack[i]===needle[j]){
            i++;
            j++;
        }
        else{
            j=next[j];
        }
    }
    if(j===needle.length){
        return i-j;
    }
    else{
        return -1;
    }
};

var calNext = function(next, needle){
    next[0] = -1;
    var len = needle.length;
    var j=0;
    var k=-1;
    while(j<len-1){
        if(k==-1 || needle[j]===needle[k]){
            k++;
            j++;
            if(needle[j]!==needle[k]){
                next[j]=k;   
            }
            else{
                next[j]=next[k];
            }
        }
        else{
            k=next[k];
        }
    }
};