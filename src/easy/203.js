/**
 * 203. 移除链表元素
 * 删除链表中等于给定值 val 的所有节点。

示例:

输入: 1->2->6->3->4->5->6, val = 6
输出: 1->2->3->4->5
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
 * @param {number} val
 * @return {ListNode}
 */
// var removeElements = function(head, val) {
//   if (!head) {
//     return null
//   }
//   head.next = removeElements(head.next, val)
//   return head.val === val ? head.next : head
// };

var removeElements = function(head, val) {
  let array = []
  let cur = head
  while (cur) {
    array.push(cur)
    cur = cur.next
  }
  console.log('array--before:',array)

  array = array.filter(v => v.val !== val)
  console.log('array:',array)
  for (let i = 1; i < array.length; i++) {
    array[i - 1].next = array[i]
  }
  return array[0] ? array[0] : null
}