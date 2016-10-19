/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * 給一個連結陣列，移除連結陣列從後面數來第n個節點
   例如，

   1->2->3->4->5, n = 2.

   從後面數2個，移除4後的連結陣列變成 1->2->3->5.

   注意:

   n不會比連結陣列還長，試著跑一次迴圈解題。
 *
 *
 * [1,2,3,4] ， n = 2，fast = [1,2,3,4] ， slow = [0,1,2,3,4] (0為假節點)
   n = 2，快指針先走2點，fast = [3,4]，slow = [0,1,2,3,4]
   快慢指針一起跑，當fast = null，slow = [2,3,4]，這時候慢指針必須跳過他第2個點，也就是跳過3
 *
 *
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var util = require('util');


var removeNthFromEnd = function(head, n) {

  if(head == null) return head;

  // 用假節點當首節點，方便操作
  var node = new ListNode(0);
  node.next = head;


  var slow = node;
  var fast = head;

  // 快指針先跑n個節點
  while(n > 0){
    fast = fast.next;
    n--;
  }

  // 因為快指針已經先跑n點，所以當快指針fast跑完，慢指針slow會在要移除的前一點上
  while(fast){
    fast = fast.next;
    slow = slow.next;
  }
  if(slow.next == null){
    slow.next = null ;
  } else {
    slow.next = slow.next.next;
  }


  return node.next;

}



var head = {
  number: 1,
    next: {
      number: 2,
        next:{
          number: 3,
          next:{
            number: 4,
             next:{
              number:5
             }
          }
        }
      }
    };

function ListNode(val) {
     this.val = val;
     this.next = null;
 }

var n = 2;
var resultArray = removeNthFromEnd(head, n);

console.log(`${util.inspect(resultArray)}`);


