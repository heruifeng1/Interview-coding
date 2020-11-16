function goAlongLeftTree(node, stack) {
    while(node){
        stack.push(node);
        node = node.left;
    }
}

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const stack = [];
    const result = [];
    let curr = root;
    while(true){
        goAlongLeftTree(curr,stack);
        if(stack.length === 0){
            break;
        }
        const node = stack.pop();
        result.push(node.val);
        curr = node.right;
    }
};
