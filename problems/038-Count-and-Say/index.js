/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = module.exports = function(n) {
    var res = '1';
    var i;
    for(i=1;i<n;i++){
        res = countIter(res);
    }  
    return res;
};

var countIter = function(str){
    var i=0;
    var prev;
    var cnt=1;
    var res='';
    while(i<str.length){
        if(prev){
            if(str[i]===prev){
                cnt++;
            }
            else{
                res+=cnt;
                res+=prev;
                cnt=1;
                prev=str[i];
            }
        }
        else{
            prev=str[i];
        }
        i++;
    };
    res+=cnt;
    res+=prev;
    return res;
};