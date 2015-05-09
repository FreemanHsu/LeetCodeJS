/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
var threeSum = module.exports = function(nums){
    var res = [];
    if (nums.length < 3) return res;
    var sortedNum = nums.sort(function(a,b){
        return a-b;
    });
    if (sortedNum[0]>0 || sortedNum[sortedNum.length-1]<0) return res;
    if (sortedNum[0]===0 && sortedNum[sortedNum.length-1]===0) return [[0,0,0]];
    var i=0;
    var j=sortedNum.length-1;
    var k;
    var target;
    for (i=0; i<sortedNum.length-2; i++){
        j=i+1;
        k=sortedNum.length-1;
        while(j<k){
            if(i>0 && sortedNum[i-1]===sortedNum[i]) break;
            target = -sortedNum[i];
            if((sortedNum[j]+sortedNum[k])<target){
                j++;
                while(sortedNum[j]===sortedNum[j-1]) j++;
            }
            else if((sortedNum[j]+sortedNum[k])>target){
                k--;
                while(sortedNum[k]===sortedNum[k+1]) k--;
            }
            else{
                res.push([sortedNum[i],sortedNum[j],sortedNum[k]]);
                j++;
                k--;
            	while(sortedNum[j]===sortedNum[j-1]) j++;
                while(sortedNum[k]===sortedNum[k+1]) k--;
            }
        }
    }
    return res;
};
 
// Naive threeSum exceeds time limit
//var threeSum = module.exports = function(nums) {
//    var i;
//    var j;
//    var target;
//    var numHash = {};
//    var res = [];
//    var tmp;
//    var dupHash = {};
//    for(i=0; i<nums.length; i++){
//        numHash[nums[i]] = i;
//    }
//    for(i=0; i<nums.length-1; i++){
//        for (j=i+1; j<nums.length; j++){
//            target = -(nums[i]+nums[j]);
//            if (numHash[target] && numHash[target] > j){
//                tmp = [nums[i], nums[j], target];
//                tmp.sort();
//                if(dupHash[tmp] === undefined){
//                    dupHash[tmp] = true;
//                    res.push(tmp);
//                }
//            }
//        }
//    }
//    return res;
//};