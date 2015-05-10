/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = module.exports = function(nums, target) {
    var a;
    var b;
    var binarySearch = function(nums, first, last, target){
        if(last<=first) return -1;
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
        return -1;
    };
    
    var res=[];
    a = b = binarySearch(nums,0,nums.length,target);
    if(a!==-1){
        while(nums[a-1]===nums[a]) a--;
        while(nums[b+1]===nums[b]) b++;   
    }
    res.push(a,b);
    return res;
};