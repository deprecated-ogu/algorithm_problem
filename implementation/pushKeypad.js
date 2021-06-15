// https://programmers.co.kr/learn/courses/30/lessons/67256
// 이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
// 맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

// 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
// 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
// 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
// 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
// 4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
// 순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

// [제한사항]
// numbers 배열의 크기는 1 이상 1,000 이하입니다.
// numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
// hand는 "left" 또는 "right" 입니다.
// "left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
// 왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

const keyPad = [[1, 2, 3],
[4, 5, 6],
[7, 8 ,9],
['*', 0, '#']];

// 키 위치 반환 함수
function getPosition(key) {
    for (let i = 0; i < keyPad.length; i++) {
        if (keyPad[i].indexOf(key) !== -1) {
            return [i, keyPad[i].indexOf(key)];
        }
    }
}

// 키와 키 사이의 거리 반환 함수
function getDistance(position, number) {
    return Math.abs(position[0] - number[0]) + Math.abs(position[1] - number[1]);
}

function solution(numbers, hand) {
    // 초기 손가락 위치 설정
    let leftIndex = getPosition('*');
    let rightIndex = getPosition('#');
    
    let result = numbers.map((el) => {
        let currentKeyIndex = getPosition(el);

        // 왼손과 오른손이 확정적인 경우에 대한 조건문
        if (el === 1 || el === 4 || el === 7) {
            leftIndex = currentKeyIndex;
            return 'L';
        }
        if (el === 3 || el === 6 || el === 9) {
            rightIndex = currentKeyIndex;
            return 'R';
        }

        // 현재 누를 키의 왼손과 오른손에 대한 거리 계산
        let leftDistance = getDistance(leftIndex, currentKeyIndex);
        let rightDistance = getDistance(rightIndex, currentKeyIndex);

        // 거리가 같은 경우 주 손잡이로 반환
        if (leftDistance === rightDistance) {
            if (hand === "left") {
                leftIndex = currentKeyIndex;
                return 'L';
            }
            if (hand === "right") {
                rightIndex = currentKeyIndex;
                return 'R';
            }
        }

        // 더 가까운 손 반환
        if (leftDistance < rightDistance) {
            leftIndex = currentKeyIndex;
            return 'L';
        }
        if (leftDistance > rightDistance) {
            rightIndex = currentKeyIndex;
            return 'R';
        }
    })

    // 문자열로 반환
    return result.join('');
}