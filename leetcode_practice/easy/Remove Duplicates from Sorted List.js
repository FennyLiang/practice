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
var util = require('util');

var deleteDuplicates = function(head) {
  if(head === null || head.next ===null) return head;

  var current = head; // current為輔助指標，先指向head所指向的節點
  while(current.next !== null){
    // 如果目前Node的值與下一個相同，跳過下一個
    if(current.val == current.next.val){
      current.next = current.next.next; //current會跳到下下一個節點，此時head所指的節點仍沒變，但下一個節點會指向current所指節點
    } else {
      current = current.next;
    }
  }
  return head;
};


var head = {
  number: 1,
  next: {
    number: 2,
    next:{
      number: 4,
      next:{
        number: 4,
        next:{
          number:5
        }
      }
    }
  }
};

function ListNode(val){
  this.val = val;
  this.next = null;
}

var returnResult = deleteDuplicates(head);

console.log(`returnResult::::::: ${util.inspect(returnResult)}`)
