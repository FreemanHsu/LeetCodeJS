/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = module.exports = function(n) {
    if(n===0) return[];
    var res=[];
    helper(res,'',n,0);
    return res;
};

var helper = function(res, str, n, toClose){
    var i;
    if(n===0){
        for(i=0;i<toClose;i++) str+=')';
        res.push(str);
    }
    else{
        if(toClose===0){
            helper(res,str+'(',n-1,1);
        }
        else{
            helper(res,str+')',n,toClose-1);
            helper(res,str+'(',n-1,toClose+1);
        }
    }
};