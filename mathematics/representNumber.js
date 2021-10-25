// https://programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  let count = 0;
  let halfNum = Math.floor(n / 2);
  for (let i = 1; i <= halfNum; i++) {
    let temp = 0;
    let j = i;
    while (temp < n) {
      temp += j;
      j++;
    }
    if (temp === n) count++;
  }
  return count + 1;
}

console.log(solution(15));
