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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    var res = [];
    var cur = 0;
    var path = [];
    var helper = function(root){
        if(root === null) return;
        cur += root.val;
        path.push(root.val);
        if(root.left === null && root.right===null) // is leaf
        {
            if(cur === sum){
                res.push(path.slice(0));
            }
            cur -= root.val;
            path.pop();
            return;
        }
        if(root.left) helper(root.left);
        if(root.right) helper(root.right);
        cur -= root.val;
        path.pop();
    };
    helper(root);
    return res;
};