/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
 
function ListNode(val){
    this.val=val;
    this.next=null;
};

function TreeNode(val){
    this.val=val;
    this.left=this.right=null;
};

var sortedListToBST = function(head) {
    if(head===null) return null;
    var cnt = 0;
    var p = head;
    while(p.next){
        cnt++;
        p=p.next;
    }
    var headWraper = {list: head};
    var helper = function(listWraper,beg,end){
        if(beg>end) return null;
        var mid = Math.floor((beg+end)/2);
        var leftChild = helper(listWraper,beg,mid-1);
        var parent = new TreeNode(listWraper.list.val);
        listWraper.list=listWraper.list.next;
        var rightChild = helper(listWraper,mid+1,end);
        parent.left=leftChild;
        parent.right=rightChild;
        return parent;
    };
    
    return helper(headWraper,0,cnt);
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);

console.log(sortedListToBST(head));