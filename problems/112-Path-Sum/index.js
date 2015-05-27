/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
	if(root===null){
		return false;
	}
	var hasSum = false;
    var foreTranverse = function(node,total){
		if(hasSum) return;
		var tmp = total+node.val;
		if(node.left===null && node.right===null){
			if(tmp === sum) hasSum = true;
		}
		if(node.left) foreTranverse(node.left, tmp);
		if(node.right) foreTranverse(node.right, tmp);
	};
	foreTranverse(root,0);
	return hasSum;
};