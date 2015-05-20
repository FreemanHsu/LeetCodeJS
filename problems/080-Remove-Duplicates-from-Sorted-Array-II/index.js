/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length<3) return nums.length; 
    var i=1;
    var j=1;
    var prev=nums[0];
    var times=1;
    var tmp;
    
    while(j<nums.length){
       if(nums[j]===prev){
           times++;
           if(times>2){
               j++;
               continue;
           }
       }
       else{
           prev = nums[j];
           times = 1;
       }
       if(i!==j){
           tmp = nums[j];
           nums[j] = nums[i];
           nums[i] = tmp;
       }
       i++;
       j++;
    }
    return i;
};

//console.log(removeDuplicates([1,1,1,2,2,3]));