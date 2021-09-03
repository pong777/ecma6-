function solution(word) {
    let answer = ['A', 'E', 'I', 'O', 'U'];
    let result = [];

    for (let i = 0; i < answer.length; i++) {
        result.push(answer[i]);
        for (let j = 0; j < answer.length; j++) {
            result.push(answer[i] + answer[j]);
            for (let k = 0; k < answer.length; k++) {
                result.push(answer[i] + answer[j] + answer[k]);
                for (let l = 0; l < answer.length; l++) {
                    result.push(answer[i] + answer[j] + answer[k] + answer[l]);
                    for (let m = 0; m < answer.length; m++) {
                        result.push(answer[i] + answer[j] + answer[k] + answer[l] + answer[m]);
                    }
                }
            }
        }   
    }

    return result.sort().indexOf(word) + 1;
}

console.log(solution("AAAAE"));
console.log(solution("AAAE"));
console.log(solution("I"));
console.log(solution("EIO"));

