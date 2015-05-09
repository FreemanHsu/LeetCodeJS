function ListNode(val) {
  this.val = val;
  this.next = null;
}

ListNode.createListFromString = function(string) {
  var numbers = string.split('').map(Number);
  var head, tmp;
  numbers.forEach(function(number, index) {
    if (index === 0) {
      head = new ListNode(numbers[0]);
      tmp = head;
      return;
    }
    tmp.next = new ListNode(numbers[index]);
    tmp = tmp.next;
  });
  return head;
};

ListNode.transformListToString = function(list) {
  var result = [];
  var tmp = list;
  while (tmp !== null) {
    result.push(tmp.val);
    tmp = tmp.next;
  }
  return result.join('');
};

require('fs').readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	var linesplit = line.split(' ');
	var i;
	var list;
	var Lists = [];
	for(i=0; i<linesplit.length; i++){
		list = ListNode.createListFromString(linesplit[i]);
		Lists.push(list);
	}
	var result = require('./index')(Lists); // Parameters to be added.
	console.log(ListNode.transformListToString(result));	// Result may need some transformation.
});