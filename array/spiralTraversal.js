// 문제
// 2차원 M x N 배열을 나선형(spiral)으로 순회해야 합니다.

// 입력
// 인자 1 : matrix
// 세로 길이(matrix.length)가 M, 가로 길이(matrix[i].length)가 N인 2차원 배열
// matrix[i]는 string 타입을 요소로 갖는 배열
// matrix[i][j].length는 1
// 출력
// string 타입을 리턴해야 합니다.

const checkInclude = function (isVisit, i, j) {
	for (let index = 0; index < isVisit.length; index++)
		if (isVisit[index][0] === i && isVisit[index][1] === j) return true;
	return false;
}

const spiralTraversal = function (matrix) {
  let result = '';
	const M = matrix.length;
	const N = matrix[0].length;
	let i = 0;
	let j = -1;
	let isVisit = [];
	let direction = 0;

	while (isVisit.length < M * N) {
		if (direction % 4 === 0) { // to right
			if (j + 1 < N && !checkInclude(isVisit, i, j + 1)) j++; 
			else direction++;
		}
		if (direction % 4 === 1) { // to down
			if (i + 1 < M && !checkInclude(isVisit, i + 1, j)) i++;
			else direction++;
		}
		if (direction % 4 === 2) { // to left
			if (j - 1 >= 0 && !checkInclude(isVisit, i, j - 1)) j--;
			else direction++;
		}
		if (direction % 4 === 3) { // to up
			if (i - 1 >= 0 && !checkInclude(isVisit, i - 1, j)) i--;
			else direction++;
		}
		if (!checkInclude(isVisit, i, j)) {
			result += matrix[i][j];
			isVisit.push([i, j]);
		}
	}

	return result;
};

let matrix = [
  ['A', 'B', 'C'],
  ['D', 'E', 'F'],
  ['G', 'H', 'I'],
];
let output = spiralTraversal(matrix);
console.log(output); // --> 'ABCFIHGDE'

matrix = [
  ['T', 'y', 'r', 'i'],
  ['i', 's', 't', 'o'],
  ['n', 'r', 'e', 'n'],
  ['n', 'a', 'L', ' '],
];
output = spiralTraversal(matrix);
console.log(output); // --> 'Tyrion Lannister'