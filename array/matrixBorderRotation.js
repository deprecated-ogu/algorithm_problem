// https://programmers.co.kr/learn/courses/30/lessons/77485

// 문제 설명
// rows x columns 크기인 행렬이 있습니다. 행렬에는 1부터 rows x columns까지의 숫자가 한 줄씩 순서대로 적혀있습니다. 이 행렬에서 직사각형 모양의 범위를 여러 번 선택해, 테두리 부분에 있는 숫자들을 시계방향으로 회전시키려 합니다. 각 회전은 (x1, y1, x2, y2)인 정수 4개로 표현하며, 그 의미는 다음과 같습니다.

// x1 행 y1 열부터 x2 행 y2 열까지의 영역에 해당하는 직사각형에서 테두리에 있는 숫자들을 한 칸씩 시계방향으로 회전합니다.
// 다음은 6 x 6 크기 행렬의 예시입니다.

// 이 행렬에 (2, 2, 5, 4) 회전을 적용하면, 아래 그림과 같이 2행 2열부터 5행 4열까지 영역의 테두리가 시계방향으로 회전합니다. 이때, 중앙의 15와 21이 있는 영역은 회전하지 않는 것을 주의하세요.

// 행렬의 세로 길이(행 개수) rows, 가로 길이(열 개수) columns, 그리고 회전들의 목록 queries가 주어질 때, 각 회전들을 배열에 적용한 뒤, 그 회전에 의해 위치가 바뀐 숫자들 중 가장 작은 숫자들을 순서대로 배열에 담아 return 하도록 solution 함수를 완성해주세요.

function getMatrix(rows, columns) {
	let matrix = [];
	var value = 1;
	for (let i = 0; i < columns; i++) {
		let tmpArr = [];
		for (let j = 0; j < rows; j++) {
			tmpArr.push(value);
			value++;
		}
		matrix.push(tmpArr);
	}
	return matrix;
}

function getIdx(startRow, startColumn, endRow, endColumn) {
	let idxArr = [];
	let row = startRow;
	let col = startColumn;
	for (col; col < endColumn; col++) {
		idxArr.push([row - 1, col - 1]);
	}
	for (row; row < endRow; row++) {
		idxArr.push([row - 1, col - 1]);
	}
	for (col; col > startColumn; col--) {
		idxArr.push([row - 1, col - 1]);
	}
	for (row; row > startRow; row--) {
		idxArr.push([row - 1, col - 1]);
	}
	
	return idxArr
}

function rotatePartMatrix(matrix, rows, columns, startRow, startColumn, endRow, endColumn) {
	let idxArr = getIdx(startRow, startColumn, endRow, endColumn);
	idxArr.reverse();
	let tmp = matrix[idxArr[0][0]][idxArr[0][1]];
	let min = tmp;

	for (let i = 0; i < idxArr.length - 1; i++) {
		let [x1, y1] = idxArr[i];
		let [x2, y2] = idxArr[i + 1];
		matrix[x1][y1] = matrix[x2][y2];
		if (matrix[x1][y1] < min) {
			min = matrix[x1][y1];
		}
	}
	matrix[idxArr[idxArr.length - 1][0]][idxArr[idxArr.length - 1][1]] = tmp;
	return min;
}

function solution(rows, columns, queries) {
	let result = [];
	let matrix = getMatrix(rows, columns);

	for (let i = 0; i < queries.length; i++) {
		let query = queries[i];
		result.push(rotatePartMatrix(matrix, rows, columns, query[0], query[1], query[2], query[3]));
	}

	return result;
}

// 100, 97, [[1, 1, 100, 97]]
// console.log(solution(6, 6, [[2,2,5,4],[3,3,6,6],[5,1,6,3]]));
console.log(solution(100, 97, [[1, 1, 100, 97]]));