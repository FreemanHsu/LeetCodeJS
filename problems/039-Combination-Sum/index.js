/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = module.exports = function(candidates, target) {
    var nums = candidates.sort(function(a,b){return a-b;});
	var i;
	var res = [];
	for(i=0;i<nums.length;i++){
		if(i>0 && nums[i]===nums[i-1]) continue;
		if(nums[i]>target) break;
		helper(nums, [nums[i]], nums[i], i, target, res);
	}
	return res;
};

var helper = function(nums, cur, curSum, pos, target, res){
	if(curSum>target) return;
	if(curSum===target){
		res.push(cur.slice(0));
		return;
	}
	else{
		while(pos<nums.length){
			cur.push(nums[pos]);
			helper(nums, cur, curSum+nums[pos], pos, target, res);
			cur.pop();
			pos++;
		}
		return;
	}
};