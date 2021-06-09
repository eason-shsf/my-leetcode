/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    if (numCourses < 2 || prerequisites.length < 1) {
        return true
    }
    debugger
    const nextList = new Array(numCourses)
    for(let i = 0; i < prerequisites.length; i++) {
        if(!nextList[prerequisites[i][1]]) {
            nextList[prerequisites[i][1]] = []
        }
        nextList[prerequisites[i][1]].push(prerequisites[i][0])
    }
    const visited = new Array(numCourses)

    function dfsForCircle(index) {
        if (visited[index] === 1) {
            return false
        }
        if (visited[index] === -1) {
            return true
        }
        visited[index] = 1
        if (nextList[index] && nextList[index].length > 0) {
            for(let j = 0; j < nextList[index].length; j++) {
                if (!dfsForCircle(nextList[index][j])) {
                    return false
                }
            }
        }
        visited[index] = -1
        return true
    }

    for (let i = 0; i < numCourses; i++) {
        if(visited[i]) {
            continue
        }
        if(!dfsForCircle(i, i, 0)) {
            return false
        }
    }
    return true
};
console.log(canFinish(4, [[1,0],[2,0],[3,1],[3,2]]))