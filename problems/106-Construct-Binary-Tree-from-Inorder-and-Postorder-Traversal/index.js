/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

Array.prototype.find = function(beg, end, x){
	var i;
	for(i=beg;i<=end;i++){
		if(this[i]===x){
			return i;
		}
	}
	return -1;
};
 
var buildTree = function(inorder, postorder) {
	if(inorder.length===0) return null;
    var buildTreeHelper = function(inFirst, inLast, postFirst, postLast){
		if(inFirst>inLast) return null;
		if(inFirst===inLast) return new TreeNode(inorder[inFirst]);
		var root = new TreeNode(postorder[postLast]);
		var indexOfRoot = inorder.find(inFirst,inLast,root.val);
		var lenLeft = indexOfRoot - inFirst;
		root.left = buildTreeHelper(inFirst,indexOfRoot-1,postFirst,postFirst+lenLeft-1);
		root.right = buildTreeHelper(indexOfRoot+1,inLast,postFirst+lenLeft,postLast-1);
		return root;
	};
	return buildTreeHelper(0,inorder.length-1,0,postorder.length-1);
};