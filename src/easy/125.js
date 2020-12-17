/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
 */

 /**
 * @param {string} s
 * @return {boolean}
 */
// 对撞指针
// var isPalindrome = function(s) {
//     s = s.replace(/[^0-9a-zA-Z]/g,'').toLowerCase()

//     let i = 0, j = s.length -1
//     while (i < j) {
//         if (s[i++] !== s[j--]) {
//             return false
//         }
//     }
//     return true
// };

var isPalindrome = function(s) {
    
    for (let i = 0, j = s.length - 1; i < j;) {
        if (!isLetterOrNum(s[i])) {
            i++
        } else if (!isLetterOrNum(s[j])) {
            j--
        } else if (s[i].toLowerCase() === s[j].toLowerCase()) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
}

const isLetterOrNum = a => {
    // console.log('a:',a)
    a = a.charCodeAt()
    return a >= 48 && a <= 57 || a >= 65 && a <= 90 || a >= 97 && a <= 122
}
console.log(isPalindrome('A man, a plan, a canal: Panama'))