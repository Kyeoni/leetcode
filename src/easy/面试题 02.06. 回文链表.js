/**
 * 编写一个函数，检查输入的链表是否是回文的。

 

示例 1：

输入： 1->2
输出： false 
示例 2：

输入： 1->2->2->1
输出： true 
 

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

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
 * @return {boolean}
 */
// var isPalindromeA = function(head) {
//   let array = []
//   while (head) {
//     array.push(head.val)
//     head = head.next
//   }
//   // 双指针
//   for (let i = 0, j = array.length - 1; i < j; i++, j--) {
//     if (array[i] !== array[j]) {
//       return false
//     }
//   }
//   return true
// };

var isPalindrome = function(head) {
  let upperPointer = head
  const check = head => {
    if (head !== null) {
      if (!check(head.next)) {
        return false
      }
      if (head.val !== upperPointer.val) {
        return false
      }
      upperPointer = upperPointer.next
    }
    return true
  }
  return check(head)
};