/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var reverseKGroup = module.exports = function(head, k) {
    if(head===null || head.next===null || k<2) return head;
    
    var nextGroup=head;
    var newNextGroup;
    var i;
    for(i=0; i<k; i++){
        if(nextGroup === null){
            return head;
        }
        nextGroup = nextGroup.next;
    }
    newNextGroup = reverseKGroup(nextGroup,k);
    
    var prev;
    var cur=head;
    var next;
    while(cur!=nextGroup){
        next = cur.next;
        cur.next = prev===undefined?newNextGroup:prev;
        prev = cur;
        cur = next;
        next = next && next.next;
    }
    return prev;
};
 
// Using stack is super slow
//var reverseKGroup = module.exports = function(head, k) {
//    if(head===null || head.next===null) return head;
//    if(k===1) return head;
//    var newHead;
//    var stack=[];
//    var p;
//    var q;
//    var i;
//    var t;
//    var flag = true;
//    p=head;
//    while(flag){
//        t = p;
//        for (i=0; i<k; i++){
//            if(p===null){
//                flag = false;
//                break;
//            }
//            stack.push(p);
//            p=p.next;
//        }
//        if(newHead===undefined){
//            if(flag===false){
//                return head;
//            }
//            newHead = stack.pop();
//            q=newHead;
//        }
//        if(flag){
//            while(stack.length>0){
//                q.next = stack.pop();
//                q=q.next;
//            }
//            q.next = p;
//        }
//        else{
//            q.next = t;
//        }
//    }
//    return newHead;
//};