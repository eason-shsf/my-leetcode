/**
 * @param {string} s
 * @return {number}
 */
 var numDecodings = function(s) {
    if(!s || s.length === 0 || (s.length === 1 && s ==='0')) {
        return 0
    }
    let cacheList = new Array(s.length)
    function dfs(str, index) {
        if (str[0] === '0') {
            return 0
        }
        if(str.length === 1) {
            return 1
        }
        if(str.length === 2) {    
            let sum =cacheList[index + 1] !== undefined ? cacheList[index+1] : (cacheList[index+1] = dfs(str.substr(1), index + 1))
            sum += parseInt(str) <= 26 ? 1 : 0
            return sum
        }
        if(str.length > 2) {
            let sum = cacheList[index + 1] !== undefined ? cacheList[index+1] : (cacheList[index+1] = dfs(str.substr(1), index + 1))
            if(parseInt(str.substr(0,2)) <= 26) {
                sum += cacheList[index + 2] !== undefined ? cacheList[index+2] : (cacheList[index+2] = dfs(str.substr(2), index + 2))
            }
            return sum
        }
    }
    return dfs(s, 0)
};