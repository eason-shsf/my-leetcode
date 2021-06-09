/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxPathSum = function(root) {
     if(!root.left && !root.right) {
        return root.val
    }
    let max = -1000 * 3 * 10000
    function dfs (node) {
        let leftMaxPath = 0, rightMaxPath = 0
        if(node.left) {
            leftMaxPath = dfs(node.left)
        }
        if(node.right) {
            rightMaxPath = dfs(node.right)
        }
        const sum = sumThreeMax(node.val, leftMaxPath, rightMaxPath)
        if (sum > max) {
            max = sum
        }
        return calcPathMax(node.val, leftMaxPath, rightMaxPath)
    }
    function sumThreeMax(val, left, right) {
        let max = val + left + right
        return max
    }
    function calcPathMax(val, left, right) {
        const maxPath = (left > right ? left : right) + val
        return maxPath > 0 ? maxPath : 0
    }
    dfs(root)
    return max
};