// https://programmers.co.kr/learn/courses/30/lessons/62048#

function GCD(m, n) {
  if (m % n == 0) return n;
  return GCD(n, m % n);
}

function solution(w, h) {
  const gcd = GCD(w, h);
  return w * h - (w / gcd + h / gcd - 1) * gcd;
}

var w = 8;
var h = 12;
console.log(solution(w, h));
