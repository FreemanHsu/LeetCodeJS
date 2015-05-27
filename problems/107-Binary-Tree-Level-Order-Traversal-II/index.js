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
var levelOrderBottom = function(root) {
	if(root===null) return [];
    var res = [];
	var queue = [];
	var tmpNode;
	var level = [];
	var count;
	queue.push(root);
	while(queue.length!==0){
		level.length=0;
		count = queue.length;
		while(count>0){
			tmpNode = queue.shift();
			level.push(tmpNode.val);
			if(tmpNode.left) queue.push(tmpNode.left);
			if(tmpNode.right) queue.push(tmpNode.right);
			count--;
		}
		res.unshift(level.slice(0));
	}
	return res;
};