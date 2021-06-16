// 문제
// 가위바위보 게임은 2인 이상의 사람이 동시에 '가위, 바위, 보'를 외치고 동시에 가위, 바위 또는 보 중에서 한 가지를 의미하는 손 모양을 내밀어 승부를 결정짓는 게임입니다. 세 판의 가위바위보 게임을 할 경우, 한 사람은 세 번의 선택(예. 가위, 가위, 보)을 할 수 있습니다. 세 번의 선택으로 가능한 모든 경우의 수를 구하는 함수를 작성합니다.

// 입력
// 없음
// 출력
// 2차원 배열(arr[i])을 리턴해야 합니다.
// arr[i]는 전체 경우의 수 중 한 가지 경우(총 세 번의 선택)를 의미하는 배열입니다.
// arr[i]는 'rock', 'paper', 'scissors' 중 한 가지 이상을 요소로 갖는 배열입니다.
// arr[i].length는 3

const makeStr = ['rock', 'paper', 'scissors'];

function recurse(result, temp, depth, n) {
	if (depth === n) {
    result.push(temp);
    return ;
  }

	for (let i = 0; i < 3; i++)
		recurse(result, [...temp, makeStr[i]], depth + 1, n);

	return result;
}

function rockPaperScissors(n) {
  n = n || 3
	return recurse([], [], 0, n);
}

let output = rockPaperScissors(5);
console.log(output);