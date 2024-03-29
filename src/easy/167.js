/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度 O(n^2) 暴力解法
// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (target === (numbers[i] + numbers[j])) {
//                 return [i + 1, j + 1]
//             }       
//         }
//     }
// }

// 时间复杂度 O(nlogn) 二分查找
// var twoSum = function(numbers, target) {
//     for (let i = 0; i < numbers.length; i++) {
//         let left = i + 1, right = numbers.length - 1
//         while (left <= right) {
//             let mid = left + ((right - left) >> 1)
//             let result = target - numbers[i]
//             if (numbers[mid] === result) {
//                 return [i + 1, mid + 1]
//             } else if (numbers[mid] > result) {
//                 right = mid - 1
//             } else {
//                 left = mid + 1
//             }
//         }
//     }
// }

// 时间复杂度 O(n) 对撞指针
var twoSum = function(numbers, target) {
    for (let i = 0, j = numbers.length - 1; i < j;) {
        let plus = numbers[i] + numbers[j]
        if (plus === target) {
            return [i + 1, j + 1]
        } else if (plus > target) {
            j--
        } else {
            i++
        }
    }
}



// var twoSum = function(numbers, target) {
//     let result = []
//     for (let i = 0; i < numbers.length; i++) {
//         result[0] = i
//         let id = numbers.lastIndexOf(target-numbers[i])
//         if (id > -1 && id > i) {
//             result[1] = id
//             break
//         }
//     }
//     return result.map(val => ++val)
// };

// var twoSum = function(numbers, target) {
//     let i = 0, j = numbers.length -1
//     while (i < j) {
//         let res = numbers[i] + numbers[j]
//         if (res === target) {
//             return [++i,++j]
//         } else if (res > target) {
//             j--
//         } else {
//             i++
//         }
//     }
// };

console.log(twoSum([-1,0,0,3,4],0))