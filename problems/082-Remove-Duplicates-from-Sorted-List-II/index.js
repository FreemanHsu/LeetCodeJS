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
 
function ListNode(val){
	this.val = val;
	this.next = null;
};

var deleteDuplicates = function(head) {
	var p = head;
	if(p === null) return head;
	var q = p.next;
	if(q === null) return head;
	var r = q.next;
	if(r === null) return p.val===q.val?null:head;
	
	while(p!==null){
		q = p.next;
		if(q===null)break;
		r = q.next;
		if(p.val === q.val){
			while(q.next && q.next.val===q.val) q=q.next;
			head = q.next;
			p = head;
		}
		else if(r && q.val === r.val){
			while(r.next && r.next.val===r.val) r=r.next;
			p.next = r.next;
		}
		else{
			p=q;
		}
	}
	
	return head;
};