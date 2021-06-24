// https://programmers.co.kr/learn/courses/30/lessons/42628

// 문제 설명
// 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말합니다.

// 명령어	수신 탑(높이)
// I 숫자	큐에 주어진 숫자를 삽입합니다.
// D 1	큐에서 최댓값을 삭제합니다.
// D -1	큐에서 최솟값을 삭제합니다.
// 이중 우선순위 큐가 할 연산 operations가 매개변수로 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0] 비어있지 않으면 [최댓값, 최솟값]을 return 하도록 solution 함수를 구현해주세요.

// 제한사항
// operations는 길이가 1 이상 1,000,000 이하인 문자열 배열입니다.
// operations의 원소는 큐가 수행할 연산을 나타냅니다.
// 원소는 “명령어 데이터” 형식으로 주어집니다.- 최댓값/최솟값을 삭제하는 연산에서 최댓값/최솟값이 둘 이상인 경우, 하나만 삭제합니다.
// 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

function operate(arr, [command, number]) {
	if (command === 'I') arr.push(number);
	arr.sort((a, b) => a - b);
	if (command === 'D') {
		if (number === 1) arr.pop();
		if (number === -1) arr.shift();
	}
}

function solution(operations) {
	let operatorArr = operations.map(el => el.split(' ' ));
	operatorArr.forEach(el => { el[1] = parseInt(el[1]); });
	let arr = [];

	while (operatorArr.length) operate(arr, operatorArr.shift());
	arr.sort((a, b) => a - b);
	
	return arr.length ? [arr[arr.length - 1], arr[0]] : [0, 0];
}



var operations = ["I 16","D 1"];
console.log(solution(operations)); //[0,0]
var operations = ["I 7","I 5","I -5","D -1"];
console.log(solution(operations)); //[7,5]


// function getMinHeap(arr, n, root) {
// 	let minNum = root;
// 	let left = 2 * root + 1;
// 	let right = 2 * root + 2;

// 	if (left < n & arr[left] < arr[minNum]) minNum = left;
// 	if (right < n & arr[right] < arr[minNum]) minNum = right;
// 	if (minNum !== root) {
// 		[arr[minNum], arr[root]] = [arr[root], arr[minNum]];
// 		getMinHeap(arr, n, minNum);
// 	}
// }

// function getMaxHeap(arr, n, root) {
// 	let maxNum = root;
// 	let left = 2 * root + 1;
// 	let right = 2 * root + 2;

// 	if (left < n & arr[left] > arr[maxNum]) maxNum = left;
// 	if (right < n & arr[right] > arr[maxNum]) maxNum = right;
// 	if (maxNum !== root) {
// 		[arr[maxNum], arr[root]] = [arr[root], arr[maxNum]];
// 		getMaxHeap(arr, n, maxNum);
// 	}
// }

// function operate([minHeap, maxHeap], [command, number]) {
// 	if (command === 'I') {
// 		minHeap.push(number);
// 		maxHeap.push(number);
// 	}
// 	getMinHeap(minHeap, minHeap.length, 0);
// 	getMaxHeap(maxHeap, maxHeap.length, 0);
// 	if (command === 'D') {
// 		if (number === 1) {
// 			minHeap.pop();
// 			maxHeap.shift();
// 		}
// 		if (number === -1) {
// 			minHeap.shift();
// 			maxHeap.pop();
// 		}
// 	}
// }

// function solution(operations) {
// 	let operatorArr = operations.map(el => el.split(' ' ));
// 	operatorArr.forEach(el => { el[1] = parseInt(el[1]); });
// 	let minHeap = [];
// 	let maxHeap = [];
// 	let arr = [minHeap, maxHeap];

// 	while (operatorArr.length) operate(arr, operatorArr.shift());
// 	getMinHeap(minHeap, minHeap.length, 0);
// 	getMaxHeap(maxHeap, maxHeap.length, 0);
// 	return minHeap.length ? [maxHeap.shift(), minHeap.shift()] : [0, 0];
// }