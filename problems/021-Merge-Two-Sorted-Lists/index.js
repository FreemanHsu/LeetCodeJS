/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = module.exports = function(l1, l2) {
    if(l1===null && l2===null) return null;
    if(l1===null) return l2;
    if(l2===null) return l1;
    var p = l1;
    var q = l2;
    var head;
    var l;
    if(p.val<q.val){
        head = p;
        p=p.next;
    }
    else{
        head = q;
        q=q.next;
    }
    l=head;
    while(p && q){
        if(p.val < q.val){
            l.next = p;
            p=p.next;
        }
        else{
            l.next = q;
            q=q.next;
        }
        l = l.next;
    }
    if(p){
        l.next = p;
    }
    if(q){
        l.next = q;
    }
    return head;
};