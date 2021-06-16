// 문제
// 세로와 가로의 길이가 각각 M, N인 마을지도가 배열로 주어졌을 때, '1'은 주민이 있는 집을 의미하고 '0'은 주민이 없는 땅을 의미합니다. 이 마을은 소문이 시작되면 하루에 상하좌우 한 칸 바로 옆에 있는 집으로 퍼집니다. 특정 주민의 집 (R, C)으로부터 어떤 소문이 시작될 경우, 마을 전체로 소문이 퍼지는데 걸리는 시간(일)을 리턴해야 합니다.

// 입력
// 인자 1 : village
// string 타입을 요소로 갖는 배열
// village.length는 M
// village[i]는 string 타입
// village[i].length는 N
// village[i][j]는 세로로 i, 가로로 j인 지점의 정보를 의미
// village[i][j]는 '0' 또는 '1'
// 인자 2: row
// number 타입의 0 이상의 정수
// 소문이 시작되는 집의 세로 위치
// 인자 3: col
// number 타입의 0 이상의 정수
// 소문이 시작되는 집의 가로 위치
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// M, N은 100 이하의 자연수입니다.
// row, col에는 항상 주민이 살고 있습니다.
// 모든 집은 연결되어 있습니다. 즉, 한 집에서 다른 집으로 가는 경로가 항상 존재합니다.
// village를 그래프로 구현하는 함수가 주어집니다.

// remove dup el in arr
function multiDimensionalUnique(arr) {
	let uniques = [];
	let itemsFound = {};
	for(let i = 0, l = arr.length; i < l; i++) {
			let stringified = JSON.stringify(arr[i]);
			if (itemsFound[stringified]) continue;
			uniques.push(arr[i]);
			itemsFound[stringified] = true;
	}
	return uniques;
}

const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

// find house near by
const findHouseIndex = function (matrix, row, col) {
	let indexArr = [];

	if (row - 1 >= 0 && matrix[row - 1][col] === '1') indexArr.push([row - 1, col]);
	if (row + 1 < matrix.length && matrix[row + 1][col] === '1') indexArr.push([row + 1, col]);
	if (col - 1 >= 0 && matrix[row][col - 1] === '1') indexArr.push([row, col - 1]);
	if (col + 1 < matrix[0].length && matrix[row][col + 1] === '1') indexArr.push([row, col + 1]);

	return indexArr;
}

const gossipProtocol = function (village, row, col) {
	let matrix = createMatrix(village);
	let needVisit = findHouseIndex(matrix, row, col);
	let count = 0;

	matrix[row][col] = 'x';
	while (needVisit.length) {
		let tmpNeedVisit = needVisit.slice();
		needVisit = [];
		for (let i = 0; i < tmpNeedVisit.length; i++) {
			let row = tmpNeedVisit[i][0];
			let col = tmpNeedVisit[i][1];
			matrix[row][col] = 'x';
			needVisit = [...needVisit, ...findHouseIndex(matrix, row, col)];
		}
		count++;
		needVisit = multiDimensionalUnique(needVisit);
	}
	return count;
};


var village = [
  '0101', // 첫 번째 줄
  '0111',
  '0110',
  '0100',
];
var row = 1;
var col = 2;
var output = gossipProtocol(village, row, col);
console.log(output); // --> 3

var village = [
	'0010000',
	'0011000',
	'0001100',
	'1011111',
	'1111011',
	'0011100',
	'0011100',
	'0001000',
];
var row = 2;
var col = 4;
var output = gossipProtocol(village, row, col);
console.log(output); // --> 7
// 1. 시작: (1, 2)에서 시작, 소문이 퍼진 곳을 x로 표기
//  [
//   '0101',
//   '01x1',
//   '0110',
//   '0100',
//  ]

// 2. 1일 뒤
//  [
//   '0101',
//   '0xxx',
//   '01x0',
//   '0100',
//  ]

// 3. 2일 뒤
//  [
//   '0x0x',
//   '0xxx',
//   '0xx0',
//   '0100',
//  ]

// 4. 3일 뒤: 소문이 전부 퍼짐 (끝)
//  [
//   '0x0x',
//   '0xxx',
//   '0xx0',
//   '0x00',
//  ]
