/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = module.exports = function(nums, target) {
    var res;
    var pos={};
    pos.first=0;
    pos.last=nums.length;
    var binarySearch = function(nums, first, last, target){
        if(last<=first) return {'last': last};
        var mid = first + Math.floor((last-first)/2);
        if(nums[mid]===target){
            return mid;
        }  
        if(nums[mid]>target){
            return binarySearch(nums, first, mid, target);
        }
        else{
            return binarySearch(nums, mid+1, last, target);
        }
        return {'last': last};
    };
    
    res = binarySearch(nums, pos.first, pos.last, target);
    if(typeof res === 'object'){
        res = target>nums[res.last]?res.last+1:res.last;
    }
    
    return res;
};