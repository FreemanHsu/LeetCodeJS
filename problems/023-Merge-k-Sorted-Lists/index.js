/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = module.exports = function(lists) {
    var n = lists.length;
    if(n===0) return [];
    var i;
    while(n!=1){
        if(n & 0x01){
            lists[0] = mergeTwoLists(lists[0], lists[n-1]);
            n--;
        }
        n=n/2;
        for(i=0; i<n; i++){
            lists[i] = mergeTwoLists(lists[i], lists[n+i]);
        }
    }
    return lists[0];
};

var mergeTwoLists = function(l1, l2) {
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