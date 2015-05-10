/**
 * @param {string} s
 * @return {number}
 */
 
var longestValidParentheses = module.exports = function(s) {
    var stack=[];
    var i;
    var last=-1;
    var max=0;
    var t;
    for(i=0;i<s.length;i++){
        if(s[i]==='(') stack.push(i);
        else{
            if(stack.length===0){
                last=i;
            }
            else{
                stack.pop();
                if(stack.length===0){
                    max=Math.max(max,i-last);
                }
                else{
                    max=Math.max(max,i-stack[stack.length-1]);
                }
            }
        }
    }
    return max;
};


//var longestValidParentheses = module.exports = function(s) {
//    var stack=[];
//    var record=[];
//    var longest=0;
//    var cur=0;
//    var tmp;
//    var top = function(){
//        return stack.length===0?null:stack[stack.length-1];
//    };
//    var i;
//    for(i=0;i<s.length;i++){
//        if(s[i]==='('){
//            stack.push('(');
//            record.push(cur);
//        }
//        else if(s[i]===')'){
//            if(top()==='('){
//                stack.pop();
//                record.pop();
//                cur+=2;
//            }
//            else{
//                longest=Math.max(longest,cur);
//                cur=0;
//            }
//        }
//    }
//    while(record.length!==0){
//        tmp=record.pop();
//        longest=Math.max(longest,cur-tmp);
//        cur=tmp;
//    }
//    longest=Math.max(longest,cur);
//    return longest;
//};