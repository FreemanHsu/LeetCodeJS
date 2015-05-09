/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = module.exports = function(nums, target) {
    if (nums.length<4) return [];
	var sortedNums = nums.sort(function(a,b){return a-b;});
	var res = [];
	var i;
	var j;
	var m;
	var n;
	var partialSum;
	var sum;
	for (i=0; i<sortedNums.length-3; i++){
		if (i>0 && sortedNums[i-1]===sortedNums[i]) continue;
		for(j=i+1; j<sortedNums.length-2; j++){
			if(j>i+1 && sortedNums[j-1]===sortedNums[j]) continue;
			partialSum = sortedNums[i] + sortedNums[j];
			m = j+1;
			n = sortedNums.length-1;
			while(m<n){
				sum = partialSum + sortedNums[m] + sortedNums[n];
				if(sum > target){
					do{
						n--;
					}while(sortedNums[n] === sortedNums[n+1]);
				}
				else if (sum < target){
					do{
						m++;
					}while(sortedNums[m] === sortedNums[m-1]);
				}
				else{
					res.push([sortedNums[i], sortedNums[j], sortedNums[m], sortedNums[n]]);
					do{
						m++;
					}while(sortedNums[m] === sortedNums[m-1]);
					do{
						n--;
					}while(sortedNums[n] === sortedNums[n+1]);
				}
			}
		}
	}
	return res;
};