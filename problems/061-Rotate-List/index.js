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

function ListNode(val){
	this.val = val;
	this.next = null;
};

var rotateRight = function(head, k) {
	if(head===null || head.next===null) return head;
	var newHead;
	var i=head;
	var j=head;
	var length=1;
	while(j.next !== null){
		j=j.next;
		length++;
	}
	k=k%length;
	j=head;
	while(k>0){
		j=j.next;
		k--;
	}
	while(j.next!==null){
		i=i.next;
		j=j.next;
	}
	j.next = head;
	newHead=i.next;
	i.next=null;
	return newHead;
};