function solution(price, money, count) {
    let answer = 0;
    let result = 0;

    for (let i = 1; i <= count; i++) {
        answer += price * i;
    }

    if (money < answer) {
        result = answer - money;
    }
    else {
        result = 0;
    }

    return result;
}

console.log(solution(3, 20, 4, 10));
