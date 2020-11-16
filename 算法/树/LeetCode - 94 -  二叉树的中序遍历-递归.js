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
    const result = [];
    if(!root){
        return result;
    }
    traversal(root,visit(result))
    return  result
};
function traversal(node,visitNode){
    if(!node){
        return;
    }
    const left = node.left;
    const right = node.right;
    left && traversal(left,visitNode);
    visitNode(node);
    right && traversal(right,visitNode);
}
const visit = function (result) {
    return function (node) {
        result.push(node.val)
    }
}
