function dfs(matrix, isVisit, row) {
	isVisit[row] = true;
	for (let i = 0; i < matrix.length; i++)
		if (!isVisit[i] && matrix[row][i] === 1)
			dfs(matrix, isVisit, i);
}

function solution(n, computers) {
	let count = 0;
	let isVisit = new Array(n).fill(false);
	let matrix = [];
	for (let i = 0; i < n; i++) matrix.push(computers[i]);

	for (let i = 0; i < n; i++) {
		if (!isVisit[i]) {			
			dfs(matrix, isVisit, i);
			count++;
		}
	}

	return count;
}

// var n = 3;
// var computers = [[1, 1, 0], 
// 								[1, 1, 0], 
// 								[0, 0, 1]]
// console.log(solution(n, computers)); // 2

var n = 3;
var computers = [[1, 1, 0], 
								[1, 1, 1], 
								[0, 1, 1]];
console.log(solution(n, computers)); // 1