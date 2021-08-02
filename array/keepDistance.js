// https://programmers.co.kr/learn/courses/30/lessons/81302#fn1

function isValidKeep(place) {
	for (let i = 0; i < place.length; i++) {
		for (let j = 0; j < place.length; j++) {
			if (place[i][j] === 'P') {
				if (i + 1 < place.length) 
						if (place[i + 1][j] === 'P') return 0;
				if (j + 1< place.length) 
						if (place[i][j + 1] === 'P') return 0;
				if (j + 1 < place.length && i + 1 < place.length) 
					if (place[i + 1][j + 1] === 'P') {
							if (place[i + 1][j] === 'O' || place[i][j + 1]==='O') return 0;
					}
				if (i > 0 && j + 1 < place.length){
					if (place[i - 1][j + 1]==='P') {
						if (place[i - 1][j] === 'O' || place[i][j + 1] === 'O') return 0;
					}
				}
				
				if (i + 2 < place.length) 
					if (place[i + 2][j] === 'P'&& place[i + 1][j] === 'O') return 0;
				if (j + 2 < place.length) 
					if (place[i][j + 2] === 'P' && place[i][j + 1] === 'O') return 0;
			}
		}
	}
	return 1;
}

function solution(places) {
	let answer = [];
	for (let i = 0; i < places.length; i++)
		answer.push(isValidKeep(places[i]));
	return answer;
}

var places = [
	[
		"POOOP", 
		"OXXOX", 
		"OPXPX", 
		"OOXOX", 
		"POXXP"
	], 
	["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
	["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], 
	["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], 
	["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]
];
console.log(solution(places));



// function getPIndex (place) {
// 	let arr = [];
// 	for (let i = 0; i < place.length; i++)
// 		for (let j = 0; j < place[i].length; j++)
// 			if (place[i][j] === 'P') arr.push([i, j]);

// 	return arr;
// }

// function checkPartition(p1, p2, place) {
// 	if (p1[0] === p2[0]) {
// 		if (place[p1[0]][(p1[1] + p2[1]) / 2] === 'X') return true;
// 	}
// 	if (p1[1] === p2[1]) {
// 		if (place[(p1[0] + p2[0]) / 2][p1[1]] === 'X') return true;
// 	}
// 	else {
// 		if (place[p1[0]][p2[1]] === 'X' && place[p2[0]][p1[1]] === 'X') return true;
// 	}
// }

// function checkValid (p1, p2, place) {
// 	let [x1, y1] = p1;
// 	let [x2, y2] = p2;
// 	let distance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
// 	if (distance > 2) return true;
// 	if (checkPartition(p1, p2, place)) return true;
// 	return false;
// }

// function checkKeepDistance(result, place) {
// 	let isValid = 1;
// 	let pIndex = getPIndex(place);
// 	for (let i = 0; i < pIndex.length - 1; i++) {
// 		for (let j = i + 1; j < pIndex.length ; j++) {
// 			if (!checkValid(pIndex[i], pIndex[j], place)) {
// 				isValid = 0;
// 				break;
// 			}
// 		}
// 		if (!isValid) break;
// 	}
// 	result.push(isValid);
// }