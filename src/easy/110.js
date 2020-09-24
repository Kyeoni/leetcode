/*
 给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。

示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
 */ 
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  let max = 0;
  let min = 0;
  let count = 0
  const deep = (tn) => {
    if (tn.left || tn.right) {
      // 左右子树都有或只有一个
      // 深度加一
      count++
      if (!tn.left) {
        // 没有左子树 结算
        if (max < count) {
          max = count
        }
        if (min > count) {
          min = count
        }
      } else {
        deep(tn.left)
      }
      if (!tn.right) {
        // 没有右子树 结算
        if (max < count) {
          max = count
        }
        if (min > count) {
          min = count
        }
      } else {
        deep(tn.left)
      }
    }
 
  }
  deep(root)

  return max - min <= 1
};

  //    1
  //   / \
  //  2   2
  // / \
//  3   3
// / \
// 4   4

let a = new TreeNode(1)
let b1 = new TreeNode(2)
let b2 = new TreeNode(2)
a.left = b1
a.right = b2
let c1 = new TreeNode(3)
let c2 = new TreeNode(3)
b1.left = c1
b1.right = c2
let d1 = new TreeNode(4)
let d2 = new TreeNode(4)
c1.left = d1
c1.right = d2


console.log(isBalanced(a))