let arrGenreTotal = [];

function sortMapElements(value) {
	value.sort((a, b) => b[0] - a[0]);
}

function getMapElementsSum(value) {
	return value.reduce((sum, el) => sum + el[0], 0)
}

function getMapKeyEachTotal(value, key) {
	arrGenreTotal.push([getMapElementsSum(value), key])
}

function getMap(genres, plays) {
	let map = new Map();
	for (let i = 0; i < genres.length; i++) {
		if (!map.has(genres[i]))
			map.set(genres[i], [[plays[i], i]])
		else
			map.set(genres[i], [...map.get(genres[i]), [plays[i], i]])
	}
	return map;
}

function solution(genres, plays) {
	let albumMap = getMap(genres, plays);
	let result = [];

	albumMap.forEach(getMapKeyEachTotal);
	albumMap.forEach(sortMapElements);
	arrGenreTotal.sort((a, b) => b[0] - a[0]);
	for (let i = 0; i < arrGenreTotal.length; i++) {
		result.push(albumMap.get(arrGenreTotal[i][1])[0][1]);
		if (albumMap.get(arrGenreTotal[i][1]).length > 1)
			result.push(albumMap.get(arrGenreTotal[i][1])[1][1]);
	}
	return result;
}

var genres = ["classic", "pop", "classic", "classic", "pop"];
var	plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays)); // [4, 1, 3, 0]