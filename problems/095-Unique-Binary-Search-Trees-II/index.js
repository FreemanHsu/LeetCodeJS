/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val){
	this.val=val;
	this.left=this.right=null;
};

var generateTrees = function(n) {
	if(n===0) return [null];
	var generator = function(start,end){
		var res = [];
		var rootNode;
		var rootVal;
		var leftChilds;
		var rightChilds;
		var l;
		var r;
		if(start>end) return [null];
		for(rootVal = start; rootVal<=end; rootVal++){
			leftChilds = generator(start,rootVal-1);
			rightChilds = generator(rootVal+1,end);
			for(l in leftChilds){
				for(r in rightChilds){	
					rootNode = new TreeNode(rootVal);	
					rootNode.left = leftChilds[l];
					rootNode.right = rightChilds[r];
					res.push(rootNode);
				}
			}
		}
		return res;
	};
	
	return generator(1,n);
};

//console.log(generateTrees(3).length);