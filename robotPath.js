// toy 25 need studt

const getValidPath = function (room, src) {
	let result = [];
	if (src[1] + 1 < room[0].length && room[src[0]][src[1] + 1] === 0) result.push([src[0], src[1] + 1]);
	if (src[0] + 1 < room.length && room[src[0] + 1][src[1]] === 0) result.push([src[0] + 1, src[1]]);
	if (src[1] - 1 >= 0 && room[src[0]][src[1] - 1] === 0) result.push([src[0], src[1] - 1]);
	if (src[0] - 1 >= 0 && room[src[0] - 1][src[1]] === 0) result.push([src[0] - 1, src[1]]);
	return result;
}

const recurse = function (room, src, dst, count) {
	
	if (src[0] == dst[0] && src[1] == dst[1]) {
		console.log(src, dst, count)
		return count;
	}
	let validPath = getValidPath(room, src);
	
	for (let i = 0; validPath.length; i++) {
		room[src[0]][src[1]] = 1;
		console.log(room, src);
		if (recurse(room, validPath[i], dst, count + 1) === undefined) return ;
		room[src[0]][src[1]] = 0;
	}
	return ;
};

const robotPath = function (room, src, dst) {
	let count = recurse(room, src, dst, 0);
	return count;
};


var room = [
  [0, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0],
];
var src = [4, 2];
var dst = [2, 2];
var output = robotPath(room, src, dst);
console.log(output); // --> 8


// var room = [
// 	[0, 1, 0, 1],
// 	[0, 1, 0, 0],
// 	[0, 1, 1, 0],
// 	[0, 0, 0, 0],
// ];
// var src = [0, 0];
// var dst = [0, 2];
// var output = robotPath(room, src, dst);
// console.log(output); // --> 10


// var room = [
// 	[0, 0, 0, 0, 0, 0, 0],
// 	[1, 1, 1, 1, 0, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0],
// 	[1, 0, 1, 1, 1, 0, 1],
// 	[0, 0, 1, 0, 0, 0, 1],
// 	[0, 0, 1, 0, 1, 1, 1],
// 	[0, 0, 1, 0, 1, 0, 0],
// 	[0, 0, 0, 0, 0, 0, 0],
// ];
// var src = [0, 3];
// var dst = [7, 3];

// var output = robotPath(room, src, dst);
// console.log(output); // -->11