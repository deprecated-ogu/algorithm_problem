// https://programmers.co.kr/learn/courses/30/lessons/42627

'use strict'

function solution(jobs) {
	let currentTime = 0;
	let latency = 0;
	let idxJobs = jobs.map((el, idx) => ([...el, idx]));

	while (idxJobs.length) {
		let currentJob;
		let enableJobs = idxJobs.filter(el => el[0] <= currentTime)
		
		if (enableJobs.length) {
			enableJobs.sort((a, b) => a[1] - b[1]);
			currentJob = enableJobs.shift();
			idxJobs = idxJobs.filter(el => (currentJob[2] !== el[2]));
			currentTime += currentJob[1];
			latency += (currentTime - currentJob[0]);
		}
		else currentTime++;
	}

	return parseInt(latency / jobs.length);
}

var jobs = [[0, 3], [1, 9], [2, 6]];
console.log(solution(jobs)); // 9

var jobs = [[0, 10], [4, 10], [15, 2], [5, 11]];
console.log(solution(jobs)); // 15