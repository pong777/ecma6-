function solution(N, stages) {
    const answer = [];
    const result = [];
    const temp = [];
    let failure = 0;
    let users = stages.length;

    for (let i = 0; i <= N; i++) {
        for (let j = 0; j < stages.length; j++) {
            if (i + 1 == stages[j]) {
                failure += 1;
            }
        }
        if (!isNaN(failure / users)) {
            result.push(failure / users);
            temp.push(failure / users);
        }
        else {
            result.push(0);
            temp.push(0);
        }

        users -= failure;

        failure = 0;
    }

    if (result.length > N) {
        result.pop();
        temp.pop();
    }

    temp.sort(function(a, b) {
        if (a === b) return a - b;
        return b - a;
    });

    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (temp[i] == result[j]) {
                answer.push(result.indexOf(result[j]) + 1);
                result[j] = -1;
                break;
            }
        }
    }

    return answer;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(solution(4, [4, 4, 4, 4, 4]));
console.log(solution(5, [2,1,2,4,2,4,3,3]));