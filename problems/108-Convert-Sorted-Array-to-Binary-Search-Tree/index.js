/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if(nums.length===0) return null;
	var helper = function(beg,end){
		if(beg > end) return null;
		if(beg === end) return new TreeNode(nums[beg]);
		var mid = Math.floor((beg+end)/2);
		var root = new TreeNode(nums[mid]);
		root.left = helper(beg,mid-1);
		root.right = helper(mid+1,end);
		return root;
	};
	return helper(0,nums.length-1);
};