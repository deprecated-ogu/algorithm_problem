// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
	let priorityQueue = priorities.slice().sort((a, b) => b - a);
	let result = [];
	
	while (priorityQueue.length) {
		for (let i = 0; i < priorities.length; i++) {
			if (priorities[i] === priorityQueue[0]) {
				result.push(i);
				priorityQueue.shift();
			}
		}
	}
	return result.indexOf(location) + 1;
}


var priorities = [1, 1, 9, 1, 1, 1];
var location = 0;
console.log(solution(priorities, location)); // 5

var priorities = [1, 1, 3, 2, 1, 4, 1, 1, 3, 1, 1, 1];
var location = 8
console.log(solution(priorities, location)); // 2