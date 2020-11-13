var preorderTraversal = function(root) {
    if(!root){
        return []
    }
    const stack = [];
    const result = [];
    let curr = root;
    while (true){
        visitAlongLeftBranch(curr,stack,result)
        if(stack.length === 0){
            break;
        }
        curr = stack.pop()
    }
    return result
};
function visitAlongLeftBranch(node,stack,result){
    let curr = node;
    while(curr !== null){
        result.push(curr.val);
        const {right,left} = curr;
        stack.push(right);
        curr = left
    }
}
