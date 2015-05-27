/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if(root === null) return 0;
	var res = 0;
    var helper = function(r,depth){
		if(r===null){
			res = Math.max(res,depth);	
			return;
		}
		helper(r.left,depth+1);
		helper(r.right,depth+1);
	};
	helper(root,0);
	return res;
};