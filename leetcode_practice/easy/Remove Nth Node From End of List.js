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
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */


var removeNthFromEnd = function(head, n) {

  var reverseArray = [];
  var result = [];

  if( n == 0){

    return head;

  }else{

    reverseArray = head.reverse();
    reverseArray.splice(n-1, 1); // remove index = n-1; 1 element

  }

  result = reverseArray.reverse();

  return result;

}



var head = [1, 2, 3, 4, 5];
var n = 0;
var resultArray = removeNthFromEnd(head, n);

console.log(`${resultArray}`);


