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
 var diameterOfBinaryTree = function(root) {
    if(!root || (!root.left && !root.right)) {
        return 0
    }
    let maxPath = 0
    function dfs(node) {
        if(!node.left && !node.right) {
            return 0
        }
        let leftCount = 0, rightCount = 0
        if (node.left) {
            leftCount = dfs(node.left) + 1
        }
        if (node.right) {
            rightCount = dfs(node.right) + 1
        }
        maxPath = Math.max(maxPath, leftCount + rightCount)
        return Math.max(leftCount, rightCount)
    }
    dfs(root)
    return maxPath
};

// [3,1,null,null,2]
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
const root = new TreeNode()
root.left = new TreeNode()
root.left.right = new TreeNode()

console.log('result', diameterOfBinaryTree(root))