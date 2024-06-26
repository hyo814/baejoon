// 1. stack을 활용
// 2. pop으로 stack의 마지막 값 지우기

function solution(s) {
    let answer = 0;

    // 1)
    let stack = [];

    for(let i=0; i<s.length; i++) {

        // 2)
        if(stack[stack.length-1] == s[i]) {
           stack.pop(); 
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length == 0 ? 1 : 0;
}