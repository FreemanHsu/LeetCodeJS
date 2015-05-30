/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function(root) {
    var helper = function(root){
		if(root === null) return null;
		var left = null;
		var right = root.right;
		if(root.left){
			left = helper(root.left);
			root.right = left;
			root.left = null;
			while(left.right!==null) left=left.right;
			left.right = right;
		}
		if(right) helper(right);
		return root;
	};
	
	helper(root);
};
