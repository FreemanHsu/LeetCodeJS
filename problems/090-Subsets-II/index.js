/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var res = [];
	var record = {};
	var n = nums.length;
	nums.sort(function(a,b){return a-b;});
	var helper = function(current, index){
		if(index === n){
			if(current.toString() in record){
				return;
			}
			res.push(current.slice(0));
			record[current.toString()] = true;
		}
		else{
			helper(current, index+1);
			current.push(nums[index]);
			helper(current,index+1);
			current.pop();
		}
	};
	
	helper([],0);
	return res;
};