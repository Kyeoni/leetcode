/**
 * 请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

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
// var isPalindrome = function(head) {
//   let array = []
//   let currentNode = head
//   while (currentNode) {
//     array.push(currentNode.val)
//     currentNode = currentNode.next
//   }

//   for (let i = 0, j = array.length - 1; i < j; i++, j--) {
//     if (array[i] !== array[j]) {
//       return false
//     }
//   }
//   return true
// };

var isPalindrome = function(head) {
  let frontPointer = head
  const recursivelyCheck = currentNode => {
    if (currentNode !== null) {
      if (!recursivelyCheck(currentNode.next)) {
        return false
      }
      if (frontPointer.val !== currentNode.val) {
        return false
      }
      frontPointer = frontPointer.next
    }
    return true
  }
  return recursivelyCheck(head)
}