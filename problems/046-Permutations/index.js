/**
 * @param {number[]} nums
 * @return {number[][]}
 */

Array.prototype.swap = function(i,j){
	var tmp = this[i];
	this[i] = this[j];
	this[j] = tmp;		
};

var permute = function(nums){
	var n = nums.length;
	var res = [];
	var arr = nums;
	var helper = function(iter){
		if(iter === n-1){
			res.push(arr.slice(0));
			return;
		}
		var i;
		for(i=iter; i<n; i++){
			arr.swap(iter,i);
			helper(iter+1);
			arr.swap(iter,i);
		}
	};
	helper(0);
	return res;
};

//var permute = function(nums) {
//	var numArr = nums;
//	numArr.sort(function(a,b){return a-b;});
//    var res = [];
//	helper(res,numArr,[]);
//	return res;
//};

//var helper = function(result, remain, current){
//	var n = remain.length;
//	var i;
//	var tmp;
//	if(n===0){
//		result.push(current.slice(0));
//		return;
//	}
//	for(i=0;i<n;i++){
//		current.push(remain[i]);
//		tmp = remain.splice(i,1)[0];
//		helper(result, remain, current);
//		current.pop();
//		remain.splice(i,0,tmp);
//	}
//};