/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

//function ListNode(val){
//	this.val = val;
//	this.next = null;
//};
 
var reverseBetween = function(head, m, n) {
    var front;
	var end;
	var p;
	var q;
	var count = 2;
	if(m===1){
		front = null;
		p=head;
		count = 1;
		end = p.next;
	}
	else{
		front = head;
		while(count < m){
			front = front.next;
			count++;
		}	
		p=front.next;
		end = p.next;
	}
	while(count<n){
		q=end;
		end=q.next;
		q.next=p;
		p=q;
		count++;
	}
	if(front!==null){
		front.next.next=end;
		front.next=p;
	}
	else{
		head.next=end;
		head=p;
	}
	return head;
};

//var printList = function(head){
//	var i = 0;
//	while(head && i<10){
//		console.log(head.val);
//		head = head.next;
//		i++;
//	}
//};
//
//var l = [1,2,3,4,5];
//var head;
//var p;
//for(var e in l){
//	if(!head){
//		head = new ListNode(l[e]);
//		p=head;
//	}
//	else{
//		p.next = new ListNode(l[e]);
//		p=p.next;
//	}
//}
//
//printList(head);
//var newHead = reverseBetween(head,2,4);
//printList(newHead);