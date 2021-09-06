// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
  if (s.length === 1) return 1;
  let arr = [];

  for (let i = 1; i <= s.length / 2; i++) {
    let count = 1;
    let str = "";
    for (let j = 0; j < s.length; j += i) {
      let curStr = s.substr(j, i);
      let nxtStr = s.substr(j + i, i);
      if (curStr === nxtStr) {
        count++;
      } else {
        str += count > 1 ? count + curStr : curStr;
        count = 1;
      }
    }
    arr.push(str.length);
  }
  arr;
  return Math.min(...arr);
}

console.log(solution("aabbaccc"));
