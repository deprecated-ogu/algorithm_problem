// 문제
// 세로 길이 2, 가로 길이 n인 2 x n 보드가 있습니다. 2 x 1 크기의 타일을 가지고 이 보드를 채우는 모든 경우의 수를 리턴해야 합니다.

// 입력
// 인자 1 : n
// number 타입의 1 이상의 자연수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// 타일을 가로, 세로 어느 방향으로 놓아도 상관없습니다. (입출력 예시 참고)

const memory = [];

let tiling = function (n) {
  if (n <= 2) return n;
  if (memory[n]) return memory[n];
  return memory[n] = tiling(n - 1) + tiling(n - 2);
};

let output = tiling(2);
console.log(output); // --> 2

output = tiling(4);
console.log(output); // --> 5
/* 
2 x 4 보드에 타일을 놓는 방법은 5가지
각 타일을 a, b, c, d로 구분

2 | a b c d
1 | a b c d 
------------

2 | a a c c
1 | b b d d 
------------

2 | a b c c
1 | a b d d 
------------

2 | a a c d
1 | b b c d 
------------

2 | a b b d
1 | a c c d 
------------
*/