/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = module.exports = function(head, n) {
    var p = head;
    var q = head;
    var i;
    for (i=0; i<n; i++) q=q.next;
    if(q===null){
        return head.next;
    }
    while(q.next!==null){
        p=p.next;
        q=q.next;
    }
    p.next=p.next.next;
    return head;
};

function ListNode(val){
    this.val = val;
    this.next = null;
}