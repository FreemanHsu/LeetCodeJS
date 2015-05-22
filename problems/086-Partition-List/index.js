/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val){
    this.val = val;
    this.next = null;
};
 
var partition = function(head, x) {
    var leftDummy = new ListNode(0);
    var rightDummy = new ListNode(0);
    var leftTail = leftDummy;
    var rightTail = rightDummy;
    
    while(head!==null){
        if(head.val < x){
            leftTail.next = head;
            leftTail = head;
        }
        else{
            rightTail.next = head;
            rightTail = head;
        }
        head = head.next;
    }
    rightTail.next = null;
    leftTail.next = rightDummy.next;
    return leftDummy.next;
};