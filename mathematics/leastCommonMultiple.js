function GCD(m, n) {
  if (m % n == 0) return n;
  return GCD(n, m % n);
}

function solution(arr) {
  while (arr.length > 1) {
    let a = arr.shift();
    let b = arr.shift();
    let gcd = GCD(a, b);
    arr.push((a * b) / gcd);
  }
  return arr[0];
}

console.log(solution([2, 6, 8, 14]));
