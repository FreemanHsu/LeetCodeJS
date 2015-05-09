/**
 * @param {number[]} nums
 * @return {number}
 */
 
var removeDuplicates = module.exports = function(nums) {
    var i=0;
    var res=0;
    var prev = Math.pow(2,31);
    while(i!=nums.length){
        if(nums[i]==prev){
            i++;
        }
        else{
            if(i!=res){
                nums[res] = nums[i];
            }
            prev = nums[i];
            i++;
        	res++;
        }
    }
    return res;  
};

//var removeDuplicates = module.exports = function(nums) {
//    var l = nums.length;
//    var INTMAX = Math.pow(2,31)-1;
//    var i;
//    var dup=0;
//    for(i=1; i<nums.length;i++){
//        if(nums[i]===nums[i-1]){
//            nums[i-1]=INTMAX;
//            dup++;
//        }
//    }
//    nums.sort(function(a,b){return a-b;});
//    return l-dup;
//};