/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = module.exports = function(nums, target) {
    var first = 0; var last=nums.length; var mid;
    while(first < last){
        mid = first + ((last-first)>>1);
        if(nums[mid]===target){
            return mid;
        }
        if(nums[mid]>nums[first]){
            if(target >= nums[first] && target<nums[mid]){
                last = mid;
            }
            else{
                first = mid+1;
            }
        }
        else{
            if(target<nums[first] && target>nums[mid]){
                first = mid+1;
            }
            else{
                last = mid;
            }
        }
    }   
    return -1;
};
 
//var search = module.exports = function(nums, target) {
//    var searchHelper = function(base, arr, target){
//        if(arr.length==0) return -1;
//        if(arr.length==1) return arr[0]===target?base:-1;
//        var median = arr.length>>1;
//        var res;
//        if(arr[median]===target) return base+median;
//        if(arr[median]<target){
//            res = searchHelper(base+median+1, arr.slice(median+1,arr.length), target);
//            if(res!==-1){
//                return res;
//            }
//            res = searchHelper(base, arr.slice(0,median), target);
//            return res;
//        }
//        else{
//            res = searchHelper(base, arr.slice(0,median), target);
//            if(res!==-1){
//                return res;
//            }
//            res = searchHelper(base+median+1, arr.slice(median+1,arr.length), target);
//            return res;
//        }
//    };
//    
//    return searchHelper(0, nums, target);
//};