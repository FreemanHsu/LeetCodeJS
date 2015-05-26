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

var isValidBST = function(root) {
	var cur = -Math.pow(2,32);
    var helper = function(r){
		if(r===null)return true;
		if(helper(r.left)===false) return false;
		if(r.val<=cur) return false;
		else 
			cur = r.val;
		if(helper(r.right)===false) return false;
		return true;
	};
	return helper(root);
};