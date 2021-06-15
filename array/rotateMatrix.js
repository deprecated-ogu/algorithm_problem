// 문제
// 2차원 N x N 배열을 시계 방향으로 90도 회전시킨 배열을 리턴해야 합니다.

// 입력
// 인자 1 : matrix
// 가로 길이(matrix[i].length)와 세로 길이(matrix.length)가 모두 N인 2차원 배열
// matrix[i][j]는 number 타입
// 출력
// 2차원 배열을 리턴해야 합니다.

const rotateOne = function (matrix, M, N) {
	let result = [];
	let tmp = [];

  for (let i = 0; i < N; i++) {
		tmp = [];
		for (let j = 0; j < M; j++)
			tmp.push(matrix[M - j - 1][i]);
		result.push(tmp);
	}

	return result;
}

const rotateMatrix = function (matrix, k = 1) {
	if (matrix.length === 0) return [];
  let rotate = k % 4;
  let result = matrix.slice();

  for (let i = 0; i < rotate; i++) 
    result = rotateOne(result, result.length, result[0].length);
  return result;
};

const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(matrix[0][0]); // --> 1
console.log(matrix[3][2]); // --> 15

const rotatedMatrix = rotateMatrix(matrix);
console.log(rotatedMatrix[0][0]); // --> 13
console.log(rotatedMatrix[3][2]); // --> 8