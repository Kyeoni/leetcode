/**
 * 709. 转换成小写字母
 * 实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。

示例 1：

输入: "Hello"
输出: "hello"
示例 2：

输入: "here"
输出: "here"
示例 3：

输入: "LOVELY"
输出: "lovely"
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  str = str.split('')
  let A = 'A'.charCodeAt()
  for (let i = 0; i < str.length; i++) {
    let temp = str[i].charCodeAt()
    if (temp >= A && temp <= (A + 25)) {
      str[i] = String.fromCharCode(temp + 32)
    }
  }
  return str.join('')
};

console.log(toLowerCase('9Her987e'))