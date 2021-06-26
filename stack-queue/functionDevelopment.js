// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
	let result = [];
	let isComplete = new Array(progresses.length).fill(false);
	let totalCount = 0;
	
	while (totalCount < progresses.length) {
		let count = 0;
		for (let i = 0; i < progresses.length; i++) progresses[i] += speeds[i];

		for (let i = 0; i < progresses.length; i++) {
			if (progresses[i] < 100) break;
			if (progresses[i] >= 100 && !isComplete[i]) {
				count++;
				isComplete[i] = true;
			}
		}
		totalCount += count;
		if (count) result.push(count);
	}

	return result;
}

var progresses = [93, 30, 55];
var speeds = [1, 30, 5]
console.log(solution(progresses, speeds)); // [2, 1]
var progresses = [95, 90, 99, 99, 80, 99]
var speeds = [1, 1, 1, 1, 1, 1];
console.log(solution(progresses, speeds)); // [1, 3, 2]