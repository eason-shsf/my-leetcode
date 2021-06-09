/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let curWord = ''
    let result = []
    for(let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if(curWord.length > 0) {
                result.push(curWord)
                curWord =  ''
            }
        } else {
            curWord += s[i]
        }
    }
    if (curWord.length > 0) {
        result.push(curWord)
    }
    return result.reduce((str, item) => {
        if(str.length > 0) {
            str = ' ' + str
        }
        str = item + str
        return str
    }, '')
};