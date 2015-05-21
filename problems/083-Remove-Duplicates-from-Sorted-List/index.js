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

var deleteDuplicates = function(head) {
    var p = head;
    if(p===null) return head;
    var q;
    
    while(p!==null){
        q=p.next;
        if(q && p.val===q.val){
            p.next = q.next;
        }
        else{
            p=p.next;
        }
    }
    return head;
};