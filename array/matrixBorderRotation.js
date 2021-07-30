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