// https://programmers.co.kr/learn/courses/30/lessons/43165

let count = 0;

function dfs(numbers, target, currValue, depth) {
    if (depth === numbers.length) {
        if (currValue === target) count++;
        return ;
    }
    
    dfs(numbers, target, currValue + numbers[depth], depth + 1);
    dfs(numbers, target, currValue - numbers[depth], depth + 1);
}

function solution(numbers, target) {
    dfs(numbers, target, 0, 0);
    return count;
}