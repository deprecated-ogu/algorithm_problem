// 문제
// 스도쿠는 숫자 퍼즐로, 가로 9칸, 세로 9칸으로 이루어져 있는 표에 1부터 9까지의 숫자를 채워 넣는 퍼즐입니다. 퍼즐을 푸는 방법은 아홉 가로줄, 세로줄, 3X3 칸에 1에서 9까지의 숫자를 중복되지 않게 한 번씩만 넣으면 됩니다. 일부 칸이 비어있는 상태인 스도쿠 보드를 입력받아 스도쿠 퍼즐이 완성된 보드를 리턴해야 합니다.

// 입력
// 인자 1 : board
// 가로 길이(board[i].length)와 세로 길이(board.length)가 모두 9인 2차원 배열
// matrix[i][j]는 1 이상 9 이하의 자연수
// 출력
// 가로와 세로의 길이가 모두 9인 2차원 배열을 리턴해야 합니다.


const boardSize = 9;

const findZeroArray = function (board) {
    let arr = [];

    // find value "0" position
    for (let x = 0; x < 9; x++) {
        for (let y = 0; y < 9; y++) {
            if (board[x][y] === 0)
                arr.push([x, y]);
        }
    }
    return arr;
}

const checkBox = function (board, x, y, value) {
    // select section
    let startX = parseInt(x / 3) * 3;
    let startY = parseInt(y / 3) * 3;

    // inspect section
    for (let i = startX; i < startX + 3; i++) {
        for (let j = startY; j < startY + 3; j++) {
            if (board[i][j] === value)
                return false;
        }
    }
    return true;
}

const checkCorrect = function (board, x, y, value) {
    for (let index = 0; index < boardSize; index++) {
        // inspect axis X
        if (board[x][index] === value) return false;
        // inspect axis Y
        if (board[index][y] === value) return false;
    }
    // inspect 3x3 box
    if (checkBox(board, x, y, value) === false) return false;
    return true;
}

const backTracking = function (board, zeroPositionArray, n) {
    // fill all value
    if (n === zeroPositionArray.length)
        return true;

    // get value "0" position
    let x = zeroPositionArray[n][0];
    let y = zeroPositionArray[n][1];

    // insert 1 ~ 9 value
    for (let value = 1; value <= 9; value++) {
        // if not problem
        if (checkCorrect(board, x, y, value)) {
            // insert value
            board[x][y] = value;
            // next "0" position recursed
            if (backTracking(board, zeroPositionArray,n + 1)) return true;
            // if is wrong value, set "0"
            board[x][y] = 0;
        }
    }
    // all value (1 ~ 9) is wrong, back previous "0" position
    return false;
}

const sudoku = function (board) {
    let zeroPositionArray = findZeroArray(board);
    backTracking(board, zeroPositionArray, 0);
    return board;
};

let board = [
    [0, 3, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

let output = sudoku(board);
console.log(output);