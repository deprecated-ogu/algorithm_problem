// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
	let result = [];
	let count = 0;

	for (let i = 0; i < moves.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[j][moves[i] - 1] !== 0) {
				result.push(board[j][moves[i] - 1]);
				board[j][moves[i] - 1] = 0;
				break;
			}
		}
		while (result[result.length - 1] === result[result.length - 2] && result.length !== 0) {
			result.pop();
			result.pop();
			count += 2;
		}
	}
	return count;
}