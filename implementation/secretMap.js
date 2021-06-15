// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
	let answer = [];
	for (let i = 0; i < n; i++)
			answer.push(arr1[i] | arr2[i]);

	answer = answer.map(el => el.toString(2).padStart(n, '0'));
	return answer.map(el => el.replace(/1/g, '#').replace(/0/g, ' '));
}