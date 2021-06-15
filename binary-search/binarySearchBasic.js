// 문제
// 오름차순 정렬된 정수의 배열(arr)과 정수(target)를 입력받아 target의 인덱스를 리턴해야 합니다.

// 입력
// 인자 1 : arr
// number 타입을 요소로 갖는 배열
// arr[i]는 정수
// 인자 2 : target
// number 타입의 정수
// 출력
// number 타입을 리턴해야 합니다.
// 주의사항
// 이진탐색 알고리즘(O(logN))을 사용해야 합니다.
// 단순한 배열 순회(O(N))로는 통과할 수 없는 테스트 케이스가 존재합니다.
// target이 없는 경우, -1을 리턴해야 합니다.

const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle
  while (left <= right) {
    middle = parseInt((left + right) / 2);
    if (target === arr[middle]) return middle;
    if (arr[middle] < target) left = middle + 1;
    if (arr[middle] > target) right = middle - 1;
  }
  return -1;
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 2);
console.log(output); // --> 2

output = binarySearch([4, 5, 6, 9], 100);
console.log(output); // --> -1