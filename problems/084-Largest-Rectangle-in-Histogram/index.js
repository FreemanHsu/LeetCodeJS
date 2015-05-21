/**
 * @param {number[]} height
 * @return {number}
 */
var largestRectangleArea = function(height) {
    var stack = [];
    height.push(0);
    var i;
    var res = 0;
    var tmp;
    var width;
    for(i=0;i<height.length;i++){
        if(stack.length===0 || height[i]>=height[stack[stack.length-1]]){
            stack.push(i);
        }
        else{
            while(stack.length>0 && height[i]<height[stack[stack.length-1]]){
                tmp = height[stack.pop()];
                if(stack.length === 0){
                    width = i;
                }
                else{
                    width = i-stack[stack.length-1]-1;
                }
                res = Math.max(res, tmp*width);
            }
            stack.push(i);
        }
    }
    return res;
};

//console.log(largestRectangleArea([2,1,5,6,2,3]));