/**
 * 206. 反转链表
 * 反转一个单链表。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
进阶:
你可以迭代或递归地反转链表。你能否用两种方法解决这道题？

 */

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
// 迭代法
// var reverseList = function(head) {
//   let cur = null
//   let prev = head
//   while (prev) {
//     let next = prev.next
//     // 指向
//     prev.next = cur
//     cur = prev
//     prev = next
//   }
//   return cur
// };

// 递归
var reverseList = function(head) {
  let returnHead = null
  const recursive = head => {
    if (head) {
      recursive(head.next)
    } else {
      returnHead = 
    }
    head.next.next = head
    head.next = null
  }
};

var reverseList = function(head) {
  if (!head || !head.next) {
    return head
  }
  let returnHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return returnHead
};




