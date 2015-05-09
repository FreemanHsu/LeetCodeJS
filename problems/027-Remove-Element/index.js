/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 
var removeElement = function(nums, val) {
    var res = 0;
    var i;
    for(i=0; i<nums.length; i++){
        if(nums[i]!=val){
            if(i!=res){
                nums[res] = nums[i];   
            }
            res++;
        }
    }
    return res;
};

//var removeElement = function(nums, val) {
//    var length = nums.length;
//    var i;
//    for(i=0; i<length; i++){
//        if(nums[i]===val){
//            do{
//                length-=1;
//            }while(length>0 && nums[length]===val && i<length);
//            nums[i]=nums[length];
//        }
//    }
//    return length;
//};