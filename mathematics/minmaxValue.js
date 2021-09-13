// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const arr = s.split(" ").map((el) => parseInt(el));
  return `${Math.min(...arr)} ${Math.max(...arr)}`;
}

var s = "-1 -2 -3 -4";
console.log(solution(s));
