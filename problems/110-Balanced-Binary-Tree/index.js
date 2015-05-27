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
var isBalanced = function(root) {
    var balanced = true;
    var backTranverse = function(r){
        if(!balanced) return -1;
        if(r===null) return 0;
        var left=0;
        var right=0;
        if(r.left) left=backTranverse(r.left);
        if(r.right) right=backTranverse(r.right);
        if(Math.abs(left-right)>1) balanced=false;
        return Math.max(left,right)+1;
    };
    
    backTranverse(root);
    return balanced;
};