/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = module.exports = function(nums) {
    var result = -Math.pow(2,30);
    var f=0;
    var i;
    for(i=0; i<nums.length; i++){
        f=Math.max(f+nums[i], nums[i]);
        result=Math.max(f,result);
    }
    return result;
};