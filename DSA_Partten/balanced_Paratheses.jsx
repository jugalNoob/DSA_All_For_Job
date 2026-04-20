function balanced(data){
    let stack = [];

    debugger;
    for(let ch of data){

        if(ch === '(') stack.push(')');
        else if(ch === '{') stack.push('}');
        else if(ch === '[') stack.push(']');
        else {
            // closing bracket
            if(stack.pop() !== ch){
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(balanced("[]"));   // true
