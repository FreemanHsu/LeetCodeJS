/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = module.exports = function(head) {
    if(head===null || head.next===null) return head;
    var newHead = head.next;
    var p = newHead.next;
    newHead.next  = head;
    var l = head;
    var q;
    var t;
    l.next = p;
    while(p){
        q=p.next;
        if(q===null) break;
        t=q.next;
        l.next=q;
        q.next=p;
        p.next=t;
        l=p;
        p=t;
    }
    return newHead;
};