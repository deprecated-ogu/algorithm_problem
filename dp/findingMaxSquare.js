// https://programmers.co.kr/learn/courses/30/lessons/12905

function solution(board) {
  let answer = -Infinity;

  if (board[0].length < 2 || board.length < 2) return 1;
  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
      if (board[i][j] > 0)
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i][j - 1], board[i - 1][j]) + 1;
      answer = answer < board[i][j] ? board[i][j] : answer;
    }
  }
  return answer * answer;
}

var board = [
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(solution(board));
