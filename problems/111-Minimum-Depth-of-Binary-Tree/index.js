/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if(root===null) return 0;
    var min = Math.pow(2,30);
    var foreTranverse = function(r,depth){
        if(r.left===null && r.right===null){
            min = Math.min(depth,min);
            return;
        }
        if(r.left) foreTranverse(r.left,depth+1);
        if(r.right) foreTranverse(r.right,depth+1);
    };
    foreTranverse(root,1);
    return min;
};