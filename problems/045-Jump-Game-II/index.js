/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = module.exports = function(nums) {
	var target = nums.length-1;
	var farest = nums.map(function(item,index){return index+item;});
	var i=0;
	var res=0;
	var next=0;
	var j;
	while(i<target){
		res++;
		if(farest[i]>=target) return res;
		next = i+1;
		for (j=i+1;j<=farest[i];j++){
			if(farest[j]>=farest[next]){
				next=j;
			}
		}
		i=next;
	}
	return res;
};