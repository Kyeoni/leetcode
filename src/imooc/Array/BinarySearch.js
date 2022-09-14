/*
 * @Description: 二分查找
 * @Author: Kyeoni hujr
 * @Date: 2020-11-27 16:30:29
 * @LastEditors: Kyeoni hujr
 * @LastEditTime: 2020-11-27 20:15:20
 */

const binarySearch = (arr, target) => {
  // 在闭区间中进行搜索
  let low = 0, high = arr.length - 1
  while (low <= high) {
    // let mid = low + (high - low) >> 1
    // 或者
    let mid = (low + high) / 2
    if (arr[mid] > target) {
      high = mid - 1
    } else if (arr[mid] < target) {
      low = mid + 1
    } else { 
      return mid
    }
  }
  return -1
}

// binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 3)
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], 1))


// [0,1,0,3,12]
// [1,3,12,0,0]

// [1,0,0,3,12]
// [1,3,0,0,12]
const taxi = arr => {
  let i = 0,j = 0
  while (i < arr.length) {
    if (arr[i]) {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
      j++
    }
    i++
  }
  return arr
}

console.log(taxi([0,1,0,3,12]))