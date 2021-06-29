function solution(numbers) {
	let strNumbers = numbers.map(el => String(el));
	strNumbers.sort((a, b) => b[0] - a[0]);
	strNumbers.sort((a, b) => (b + a) - (a + b));
	return strNumbers[0] === 0 ? '0' : String(strNumbers.join(''));
}

var numbers = [3, 30, 34, 5, 9]
var numbers = [40, 404]
var numbers = [0, 0, 0, 0]

console.log(solution(numbers)); // 6210