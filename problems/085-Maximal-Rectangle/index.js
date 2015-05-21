/**
 * @param {character[][]} matrix
 * @return {number}
 */

Array.prototype.top = function(){
	if(this.length>0){
		return this[this.length-1];	
	}
	else{
		return null;
	}
};

Array.prototype.isEmpty = function(){
	return this.length===0?true:false;
};
 
var maximalRectangle = function(matrix) {
    var m = matrix.length;
	if(m===0) return 0;
	var n = matrix[0].length;
	var i;
	var j;
	var k;
	var t;
	var heights = [];
	var res = 0;
	for(i=0; i<m; i++){
		heights.length = 0;
		for(j=0; j<n; j++){
			if(matrix[i][j]==='0'){
				heights.push(0);
			}
			else{
				t=1;
				k=i-1;
				while(k>=0 && matrix[k][j]==='1'){
					t++;k--;
				}
				heights.push(t);
			}
		}
		res = Math.max(res, largestRectInHistogram(heights));
	}
	return res;
};

var largestRectInHistogram = function(nums){
	nums.push(0);
	var i;
	var res=0;
	var tmp;
	var stack = [];
	var width;
	for(i=0; i<nums.length; i++){
		if(stack.isEmpty() || nums[i]>=nums[stack.top()]){
			stack.push(i);
		}
		else{
			while(!stack.isEmpty() && nums[i]<nums[stack.top()]){
				tmp = stack.pop();
				if(stack.isEmpty()){
					width = i;
				}
				else{
					width = i - stack.top() - 1;
				}
				res = Math.max(res, nums[tmp]*width);
			}
			stack.push(i);
		}
	}
	return res;
};

//console.log(maximalRectangle(["01","01"]));