/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

//function TreeNode(val){
//    this.val = val;
//    this.left = this.right = null;
//};

var recoverTree = function(root) {
    var s1 = null;
    var s2 = null;
    var fore = null;
    var foreTranverse = function(root){
        if (root===null) return;
        foreTranverse(root.left);
        if(s1) return;
        if(fore && fore.val > root.val){
            s1 = fore;
        }
        fore = root;
        foreTranverse(root.right);
    };
    
    var backTranverse = function(root){
        if (root===null) return;
        backTranverse(root.right);
        if(s2) return;
        if(fore && fore.val < root.val){
            s2=fore;
        }
        fore = root;
        backTranverse(root.left);
    };
    
    foreTranverse(root);
    fore = null;
    backTranverse(root);
    var tmp = s1.val;
    s1.val = s2.val;
    s2.val = tmp;
};

//var recoverTree = function(root) {
//    var holder = [];
//    var pivots = [];
//    var tmp;
//    var helper = function(r){
//        if(r===null) return;
//        helper(r.left);
//        holder.push(r);
//        if(holder.length === 2){
//            if(holder[0].val > holder[1].val){
//                pivots.push(holder[0]);
//            }
//        }
//        if(holder.length === 3){
//            if((holder[1].val < holder[0].val && holder[1].val < holder[2].val) || 
//               (holder[1].val > holder[2].val && holder[1].val > holder[0].val)){
//                if(pivots.length===2) pivots.pop();
//                pivots.push(holder[1]);
//            }
//            holder.shift();
//        }
//        helper(r.right);
//    };
//    helper(root);
//    if(pivots.length===1){
//        pivots.push(holder.pop());
//    }
//    else if(pivots.length===2 && holder[holder.length-1].val<pivots[1].val){
//        pivots.pop();
//        pivots.push(holder.pop());
//    }
//    tmp = pivots[0].val;
//    pivots[0].val = pivots[1].val;
//    pivots[1].val = tmp;
//};

//var root = new TreeNode(2);
//root.left= new TreeNode(3);
//root.right = new TreeNode(1);
//
//recoverTree(root);
//console.log(root);