/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = module.exports = function(nums) {
    var end = nums.length - 1;
    var i;
    var j;
    var pivot=-1;
    var partition;
    var tmp;
    for(i=end;i>0;i--){
        if(nums[i-1]<nums[i]){
            pivot = i-1;
            break;
        }
    }
    if(pivot!==-1){
        for(partition=end;partition>0;partition--){
            if(nums[partition]>nums[pivot]) break;
        }
        tmp = nums[partition]; nums[partition]=nums[pivot]; nums[pivot]=tmp;
    }
    for(i=pivot+1,j=end;i<j;i++,j--){
        tmp=nums[i]; nums[i]=nums[j]; nums[j]=tmp;
    }
    
    // for test
    return nums;
};