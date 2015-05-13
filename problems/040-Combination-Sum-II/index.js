/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var myhash = {}; // Bad choice

var combinationSum2 = module.exports = function(candidates, target) {
    var nums = candidates.sort(function(a,b){return a-b;});
	var i;
	var res = [];
	myhash = {}; 
	for(i=0;i<nums.length;i++){
		if(i>0 && nums[i]===nums[i-1]) continue;
		if(nums[i]>target) break;
		helper(nums, [nums[i]], nums[i], i+1, target, res);
	}
	return res;
};

var helper = function(nums, cur, curSum, pos, target, res){
	if(curSum>target) return;
	if(curSum===target){
		if(myhash[cur.toString()]===true) return;
		myhash[cur.toString()]=true;
		res.push(cur.slice(0));
		return;
	}
	else{
		while(pos<nums.length){
			cur.push(nums[pos]);
			helper(nums, cur, curSum+nums[pos], pos+1, target, res);
			cur.pop();
			pos++;
		}
		return;
	}
};

console.log(combinationSum2([2,2,2],4));