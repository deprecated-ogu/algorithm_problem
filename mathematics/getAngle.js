function solution(w, h) {
	const angle = Math.atan2(h, w) * 180 / Math.PI;
	return angle;
}

console.log(solution(100, 100));