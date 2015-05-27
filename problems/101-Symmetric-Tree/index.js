/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
	var isSymTree = function(p, q) {
	    if(p===null && q===null) return true;
		if(p===null || q===null) return false;
		if(p.val!==q.val) return false;
		return isSymTree(p.left,q.right) && isSymTree(p.right,q.left);
	};
	if(root===null || (root.left===null && root.right===null)) return true;
	if(root.left===null || root.right===null) return false;
	return isSymTree(root.left,root.right);
};
