// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
	let index = 0;
	let round = 0;
	let score = [];
	while (dartResult[index]) {
			score[round] = Number(dartResult[index]);
			index++;
			if (dartResult[index] === '0') {
					score[round] = 10;
					index++;
			}
			if (dartResult[index] === 'D') score[round] = Math.pow(score[round], 2);
			if (dartResult[index] === 'T') score[round] = Math.pow(score[round], 3);
			index++;
			if (dartResult[index] === '*' || dartResult[index] === '#') {
					if (dartResult[index] === '*') {
							score[round] *= 2;
							score[round - 1] *= 2;
					}
					if (dartResult[index] === '#') score[round] *= -1;
					index++;
			}
			round++;
	}
	return score[0] + score[1] + score[2];
}