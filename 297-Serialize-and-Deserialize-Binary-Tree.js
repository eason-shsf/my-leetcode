/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    if(!root) {
        return ''
    }
    function getDepth(node) {
        let leftDepth = 0, rightDepth = 0
        if(node.left) {
            leftDepth = getDepth(node.left)
        }
        if(node.right) {
            rightDepth = getDepth(node.right)
        }
        return 1 + Math.max(leftDepth, rightDepth)
    }
    const arr = [root]
    const maxDepth = getDepth(root)
    const nodeLen = Math.pow(2, maxDepth) - 1
    const resultArr = []
    while(arr.length > 0 && resultArr.length < nodeLen) {
        const curNode = arr.shift()
        resultArr.push(curNode ? curNode.val : null)
        arr.push(curNode && curNode.left || null)
        arr.push(curNode && curNode.right || null)
    }
    return resultArr.reduce((result, item) => {
        if(result) {
            result += ','
        }
        result += (item === null || item === undefined) ? 'null' : item
        return result
    }, '')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data === '') {
        return null
    }
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    const strArr = data.split(',')
    const rootVal = parseInt(strArr.shift())
    const rootNode = new TreeNode(rootVal)
    const nodeArr = [rootNode]
    while(strArr.length > 0) {
        const leftStr = strArr.shift(),
            rightStr = strArr.shift()
        const leftVal = leftStr === 'null' ? null : parseInt(leftStr)
        const rightVal = rightStr === 'null' ? null : parseInt(rightStr)
        const leftNode = leftVal === null ? null : new TreeNode(leftVal),
            rightNode = rightVal === null ? null : new TreeNode(rightVal)
        const pNode = nodeArr.shift()
        nodeArr.push(leftNode)
        nodeArr.push(rightNode)
        if(pNode) {
            pNode.left = leftNode
            pNode.right = rightNode
        }
    }
    return rootNode
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
console.log('result ', deserialize( serialize(new TreeNode(1))))