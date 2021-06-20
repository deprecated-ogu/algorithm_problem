// https://programmers.co.kr/learn/courses/30/lessons/43164
// 문제 설명
// 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.

// 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
// 주어진 공항 수는 3개 이상 10,000개 이하입니다.
// tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
// 주어진 항공권은 모두 사용해야 합니다.
// 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
// 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.

'use strict';

let answer = [];

function getPath(tickets, visitPath, currLocation, n, isUseTicket) {
	if (visitPath.length === n) {
		answer = visitPath;
		return true;
	}

	for (let i = 0; i < tickets.length; i++) {
		let nextLocation = tickets[i][1];
		if (!isUseTicket[i] && tickets[i][0] === currLocation) {
			isUseTicket[i] = true;
			if (getPath(tickets, [...visitPath, nextLocation], nextLocation, n, isUseTicket)) return true;
			isUseTicket[i] = false;
		}
	}
	return false;
}

function solution(tickets) {
	let visitPath = ["ICN"]
	let isUseTicket = new Array(tickets.length).fill(false);
	getPath(tickets.sort(), visitPath, "ICN", tickets.length + 1, isUseTicket);
	return answer;
}

console.log(solution([["ICN", "JFK"], ['HND', 'IAD'], ['JFK', 'HND']]), "==",['ICN', 'JFK', 'HND', 'IAD'])
console.log(solution([['ICN', 'SFO'], ['ICN', 'ATL'], ['SFO', 'ATL'], ['ATL', 'ICN'], [ 'ATL', 'SFO']]), "==",['ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO'])
console.log(solution([['ICN', 'B'], ['B', 'ICN'], ['ICN', 'A'], [ 'A', 'D'], ['D', 'A']]), "==",['ICN', 'B', 'ICN', 'A', 'D', 'A'])
console.log(solution([['ICN', 'SFO'], ['SFO', 'ICN'], ['ICN', 'SFO'],['SFO', 'JFK']]), "==",['ICN', 'SFO', 'ICN', 'SFO', 'JFK'])
console.log(solution([['ICN', 'A'], ['ICN', 'A'], ['A', 'ICN'],['A', 'C']]), "==",['ICN', 'A', 'ICN', 'A', 'C'])
console.log(solution([['ICN', 'A'], ['A', 'ICN'], ['A', 'B'],['ICN', 'A']]), "==",['ICN', 'A', 'ICN', 'A', 'B'])
console.log(solution([['ICN', 'BBB'], ['AAA', 'ICN'], ['ICN', 'AAA']]),"==",['ICN', 'AAA', 'ICN', 'BBB'])
console.log(solution([['ICN', 'ABB'], ['AAA', 'ICN'], ['ICN', 'AAA'], ['ICN', 'ADD'], [ 'ABB', 'ICN']]), "==",['ICN', 'AAA', 'ICN', 'ABB', 'ICN', 'ADD'])
console.log(solution([['ICN', 'AAA'], ['ICN', 'AAA'], ['AAA', 'ICN'],['AAA', 'CCC']]), "==",['ICN', 'AAA', 'ICN', 'AAA', 'CCC'])
console.log(solution([['ICN', 'AAA'], ['ICN', 'AAA'], ['ICN', 'AAA'],['AAA', 'ICN'], ['AAA', 'ICN']]), "==", ['ICN', 'AAA', 'ICN', 'AAA', 'ICN', 'AAA'])
console.log(solution([['ICN', 'A'], ['ICN', 'B'], ['B', 'ICN']]),"==", ['ICN', 'B', 'ICN', 'A'])
console.log(solution([['ICN', 'A'], ['A', 'C'], ['ICN', 'B'], ['B', 'ICN']]),"==", ['ICN', 'B', 'ICN', 'A', 'C'])
console.log(solution([['ICN', 'BOO'], ['ICN', 'COO'], ['COO', 'DOO'], ['DOO', 'COO'], ['BOO', 'DOO'], ['DOO', 'BOO'], ['BOO', 'ICN'], ['COO', 'BOO']]), "==", ['ICN', 'BOO', 'DOO', 'BOO', 'ICN', 'COO', 'DOO', 'COO', 'BOO'])