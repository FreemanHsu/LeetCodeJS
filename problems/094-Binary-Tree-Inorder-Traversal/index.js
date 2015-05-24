/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 

//var inorderTraversal = function(root) {
//    var res = [];
//	var inOrder = function(root){
//		if(root === null) return;
//		inOrder(root.left);
//		res.push(root.val);
//		inOrder(root.right);
//	};
//	inOrder(root);
//	return res;
//};

var inorderTraversal = function(root) {
	var res = [];
	if(root===null) return res;
	var iter = root;
	var stack = [];
	while(iter!==null || stack.length!==0){
		if(iter!==null){
			stack.push(iter);
			iter = iter.left;
		}
		else{
			iter = stack.pop();
			res.push(iter.val);
			iter = iter.right;
		}
	}
	return res;
};