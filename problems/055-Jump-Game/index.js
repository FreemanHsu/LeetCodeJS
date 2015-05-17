/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = module.exports = function(nums) {
    var target = nums.length-1;
    if(target === 0) return true;
    if(nums[0] === 0) return false;
    var i=0;
    var j;
    var next=0;
    while(i<target){
        if(nums[i]===0) return false;
        next = i+1;
        for(j=i+1; j<=i+nums[i]; j++){
            if(j+nums[j] >= next+nums[next]) next = j;
        }
        i=next;
    }
    return true;
};