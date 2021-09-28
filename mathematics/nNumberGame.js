// https://programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let answer = "";
  let numberStr = "";
  let decimal = 0;

  while (numberStr.length < m * t) {
    numberStr += decimal.toString(n);
    decimal++;
  }
  for (let i = 0; i <= numberStr.length; i += m) {
    if (answer.length === t) break;
    answer += numberStr[i + p - 1];
  }

  return answer.toUpperCase();
}

var n = 10;
var t = 10;
var m = 2;
var p = 1;
console.log(solution(n, t, m, p));

0;
1;
10;
11;
100;
011011100;

0;
1;
1;
1;
