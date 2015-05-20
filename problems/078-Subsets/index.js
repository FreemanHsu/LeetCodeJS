/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    var n = nums.length;
    nums.sort(function(a,b){return a-b;});
    var res = [];
    
    var helper = function(current, index){
        if(index===n) res.push(current.slice(0));
        else{
            helper(current,index+1);
            current.push(nums[index]);
            helper(current,index+1);
            current.pop();
        }
    };
    
    helper([],0);
    
    return res;
};

//console.log(subsets([]));