var lowestCommonAncestor = function(root, p, q) {
    let result = [false, false]
    if (root.left) {
        result = lowestCommonAncestor(root.left, p, q)
        if (!(result instanceof Array)) {
            return result
        }
    }
    if (root.right) {
        const rightResult = lowestCommonAncestor(root.right, p, q)
        if (!(rightResult instanceof Array)) {
            return rightResult
        }
        result = [result[0] || rightResult[0], result[1] || rightResult[1]]
    }
    if (root === p) {
        result[0] = true
    }
    else if (root === q) {
        result[1] = true
    }
    if (result[0] && result[1]) {
        return root
    } else
        return result
};