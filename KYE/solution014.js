function solution(n, lost, reserve) {
    let answer = 0;
    let temp1 = lost;
    let temp2 = reserve;

    // 중복 제거
    lost = temp1.filter(x => !temp2.includes(x));
    reserve = temp2.filter(x => !temp1.includes(x));

    // 정렬
    lost.sort();
    reserve.sort();
    
    // 체육복을 빌려준 후에도 빌리지 못한 학생
    for (let i = 0; i < reserve.length; i++) {
        for (let j = 0; j < lost.length; j++) {
            if (reserve[i] == lost[j] + 1 || reserve[i] == lost[j] - 1) {
                lost.splice(lost[j].length, 1);
                break;
            }
        }
    }

    // 체육복을 입은 학생
    answer = n - lost.length;

    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));            // 5
console.log(solution(5, [2, 4], [3]));                  // 4
console.log(solution(3, [3], [1]));                     // 2
console.log(solution(9, [1, 2, 5, 7], [2, 4, 5, 8]));   // 8
