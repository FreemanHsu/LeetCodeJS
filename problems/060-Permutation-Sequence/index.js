/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 
// Cantor expansion
var getPermutation = module.exports = function(n, k) {
	var nums = [];
	var res = [];
	var i;
	var remaining = n;
	var product = 1;
	var dividend = k-1;
	var index;
	for(i=1;i<=n;i++){
		nums.push(i);
		product *= i;
	}
	while(remaining>0){
		product /= remaining;
		index = Math.floor(dividend/product);
		res.push(''+nums[index]);
		nums.splice(index,1);
		dividend=dividend%product;
		remaining--;
	}
	return res.join('');
};
 
//var getPermutation = module.exports = function(n, k) {
//    var nums = [];
//	var i;
//	var total=1;
//	for(i=1;i<n+1;i++){
//		nums.push(''+i);
//		total *= i;
//	}
//	if(k<=total/2){
//		for(i=0;i<k-1;i++) movePermutation(nums,'n');
//	}
//	else{
//		nums.reverse();
//		for(i=0;i<total-k;i++) movePermutation(nums,'p');
//	}
//	return nums.join('');
//};
//
//var movePermutation = function(nums, dir){
//	var pivot;
//	var partition;
//	var i=nums.length-1;
//	var j;
//	var tmp;
//	if(dir!=='p' && dir!=='n') dir='n';
//	while(i>0){
//		if(dir==='p'){
//			if(nums[i]<nums[i-1]){
//				pivot=i-1;
//				break;
//			}
//		}
//		else if(dir==='n'){
//			if(nums[i]>nums[i-1]){
//				pivot=i-1;
//				break;
//			}
//		}
//		i--;
//	}
//	if(i===0) return false;
//	i=nums.length-1;
//	while(i>0){
//		if(dir==='p'){
//			if(nums[i]<nums[pivot]){
//				partition = i;
//				break;
//			}
//		}
//		else if(dir==='n'){
//			if(nums[i]>nums[pivot]){
//				partition = i;
//				break;
//			}
//		}
//		i--;
//	}
//	tmp = nums[pivot]; nums[pivot]=nums[partition]; nums[partition]=tmp;
//	for(i=pivot+1,j=nums.length-1;i<j;i++,j--){
//		tmp=nums[i]; nums[i]=nums[j]; nums[j]=tmp;
//	}
//	return true;
//};