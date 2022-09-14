/**
 * 1013. 将数组分成和相等的三个部分
 * 给你一个整数数组 A，只有可以将其划分为三个和相等的非空部分时才返回 true，否则返回 false。

形式上，如果可以找出索引 i+1 < j 且满足 A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1] 就可以将数组三等分。

 

示例 1：

输入：[0,2,1,-6,6,-7,9,1,2,0,1]
输出：true
解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
示例 2：

输入：[0,2,1,-6,6,7,9,-1,2,0,1]
输出：false
示例 3：

输入：[3,3,6,5,-2,2,5,1,-9,4]
输出：true
解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 

提示：

3 <= A.length <= 50000
-10^4 <= A[i] <= 10^4

 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  let plus = A.reduce((acc,cur,id) => {
    acc[id] = cur + acc[id - 1]
    return acc
  }, [])
  console.log('plus:', plus)
  if (plus[plus.length - 1]%3) {
    return false
  }
  let per = plus[plus.length - 1] / 3
  let count = per
  let restart = 0
  for (let i = 0; i < A.length; i++) {
    if (count === 0) {
      restart ++
      count = per
    }
    count = count - A[i]
  }
  console.log('count',count)
  console.log('restart',restart)
  return (count === 0 || count === per) && restart >= 2 && restart <=3
};

console.log(canThreePartsEqualSum([1,-1,1,-1]))