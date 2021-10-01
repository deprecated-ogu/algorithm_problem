// https://programmers.co.kr/learn/courses/30/lessons/76502

function checkBracket(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (stack.length === 0) {
        return 0;
      } else {
        if (s[i] === ")" && stack.pop() !== "(") return 0;
        if (s[i] === "]" && stack.pop() !== "[") return 0;
        if (s[i] === "}" && stack.pop() !== "{") return 0;
      }
    }
  }
  return stack.length ? 0 : 1;
}

function solution(s) {
  let answer = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    s.push(s.shift());
    answer += checkBracket(s);
  }

  return answer;
}

var s = "{{{{{{{";
console.log(solution(s));
