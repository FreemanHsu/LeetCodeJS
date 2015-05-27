/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
	if(root===null) return [];
    var res = [];
	var level = [];
	var queue = [];
	var tmpNode;
	var len;
	queue.push(root);
	while(queue.length!==0){
		level.length = 0;
		len = queue.length;
		while(len>0){
			tmpNode = queue.shift();
			level.push(tmpNode.val);
			if(tmpNode.left !== null) queue.push(tmpNode.left);
			if(tmpNode.right!== null) queue.push(tmpNode.right);
			len--;
		}
		res.push(level.slice(0));
	}
	return res;
};