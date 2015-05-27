/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 
function TreeNode(val){
    this.val=val;
    this.left=this.right=null;
};

Array.prototype.find = function(beg, end, x){
    var i;
    for(i=beg;i<=end;i++)
    {
        if(this[i]===x){
            return i;
        }
    }  
    return -1;
};
 
var buildTree = function(preorder, inorder) {
    if(preorder.length===0) return null;
    var buildTreeHelper = function(preFirst, preLast, inFirst, inLast){
        if(preFirst>preLast){
            return null;
        }
        if(preFirst===preLast){
            return new TreeNode(preorder[preFirst]);
        }
        var root = new TreeNode(preorder[preFirst]);
        var indexOfRoot = inorder.find(inFirst,inLast,root.val);
        var lenLeft = indexOfRoot-inFirst;
        root.left = buildTreeHelper(preFirst+1,preFirst+lenLeft,inFirst,indexOfRoot-1);
        root.right = buildTreeHelper(preFirst+lenLeft+1,preLast,indexOfRoot+1,inLast);
        return root;
    };
    return buildTreeHelper(0,preorder.length-1,0,inorder.length-1);
};

//console.log(buildTree([1,2],[2,1]));