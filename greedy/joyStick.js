// https://programmers.co.kr/learn/courses/30/lessons/42860
// 문제 설명
// 조이스틱으로 알파벳 이름을 완성하세요. 맨 처음엔 A로만 이루어져 있습니다.
// ex) 완성해야 하는 이름이 세 글자면 AAA, 네 글자면 AAAA

// 조이스틱을 각 방향으로 움직이면 아래와 같습니다.

// ▲ - 다음 알파벳
// ▼ - 이전 알파벳 (A에서 아래쪽으로 이동하면 Z로)
// ◀ - 커서를 왼쪽으로 이동 (첫 번째 위치에서 왼쪽으로 이동하면 마지막 문자에 커서)
// ▶ - 커서를 오른쪽으로 이동
// 예를 들어 아래의 방법으로 "JAZ"를 만들 수 있습니다.

// - 첫 번째 위치에서 조이스틱을 위로 9번 조작하여 J를 완성합니다.
// - 조이스틱을 왼쪽으로 1번 조작하여 커서를 마지막 문자 위치로 이동시킵니다.
// - 마지막 위치에서 조이스틱을 아래로 1번 조작하여 Z를 완성합니다.
// 따라서 11번 이동시켜 "JAZ"를 만들 수 있고, 이때가 최소 이동입니다.
// 만들고자 하는 이름 name이 매개변수로 주어질 때, 이름에 대해 조이스틱 조작 횟수의 최솟값을 return 하도록 solution 함수를 만드세요.

// 제한 사항
// name은 알파벳 대문자로만 이루어져 있습니다.
// name의 길이는 1 이상 20 이하입니다.

function getDiffIdx(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++)
		if (arr[i] !== 'A') result.push(i);
	return result;
}

function getDistance(diffIdx, currIdx, N) {
	let leftDistance;
	let rightDistance;
	if (currIdx <= diffIdx) {
		leftDistance = currIdx + (N - diffIdx);
		rightDistance = diffIdx - currIdx;
	}
	else {
		leftDistance = currIdx - diffIdx;
		rightDistance = diffIdx + (N - currIdx);
	}
	return leftDistance < rightDistance ? leftDistance : rightDistance;
}

function getAlphabetCount(name, diffIdx) {
	return name.charCodeAt(diffIdx) < 78 ? name.charCodeAt(diffIdx) - 65 : 91 - name.charCodeAt(diffIdx);
}

function solution(name) {
	const N = name.length;
	let diffIdxArr = getDiffIdx(name);
	let currIdx = 0;
	let count = 0;
	
	do {
		let distanceArr = diffIdxArr.map((el) => getDistance(el, currIdx, N));
		let minIdx = distanceArr.indexOf(Math.min.apply(null, distanceArr));
		let [ diffIdx ] = diffIdxArr.splice(minIdx, 1);
		
		count += distanceArr[minIdx]
		count += getAlphabetCount(name, diffIdx);
		currIdx = diffIdx;
	} while (diffIdxArr.length)

	return count;
}

console.log(solution("JAZ")); // 11
console.log(solution("JEROEN")); // 56
console.log(solution("JAN")); // 23
console.log(solution("ABAAAAAAAAABB")); // 7