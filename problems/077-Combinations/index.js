/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    if(k>n) return [];
	var res = [];
	var nums = [];
	var i;
	for(i=1;i<=n;i++) nums.push(i);
	if(k===n) return [nums];
	
	var helper = function(current, index, remain){
		if(remain === 0){
			res.push(current.slice(0));
			return;
		}
		else{
			if(n-index<remain){
				return;
			}
			helper(current, index+1, remain);
			current.push(nums[index]);
			helper(current, index+1, remain-1);
			current.pop();
		}
	};
	
	helper([],0,k);
	return res;
};

//console.log(combine(5,1));