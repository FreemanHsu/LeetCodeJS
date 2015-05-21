/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    return helper(nums,0,nums.length-1,target);
};

var helper = function(nums,beg,end,target){
    if(nums===[]) return false;
    var first = beg;
    var last = end;
    var mid;
    while(first<=last){
        mid = first + ((last-first)>>1);
        if(nums[mid]===target) return true;
        if(nums[first]===nums[mid] && nums[mid]===nums[last]){
            return helper(nums,first,mid-1,target) || helper(nums,mid+1,last,target);
        }
        if(nums[first]<=nums[mid]){
            if(target>=nums[first] && target<nums[mid]){
                last = mid-1;
            }
            else{
                first = mid+1;
            }
        }
        else if(nums[first]>nums[mid]){
            if(target<nums[first] && target>nums[mid]){
                first = mid+1;
            }
            else{
                last = mid-1;
            }
        }
    }
    return false;
};

//console.log(search([1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],2));