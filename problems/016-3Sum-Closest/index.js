/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = module.exports = function(nums, target) {
    var sortedNums = nums.sort(function(a,b){return a-b;});
    var i;
    var j;
    var k;
    var res;
    var minDiff = Math.pow(2,32);
    var sum;
    var diff;
    for (i=0; i<sortedNums.length-2; i++){
        if(i>0 && sortedNums[i-1]===sortedNums[i]) continue;
        j=i+1;
        k=sortedNums.length-1;
        while(j<k){
            sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
            diff = sum - target;
            if(Math.abs(diff)<minDiff){
                res = sum;
                minDiff = Math.abs(diff);
            }
            if(diff<0){
                j++;
                while(sortedNums[j]===sortedNums[j-1]) j++;
            }
            else if(diff>0){
                k--;
                while(sortedNums[k]===sortedNums[k+1]) k--;
            }
            else{
                return res;
            }
        }
    }
    return res;
};