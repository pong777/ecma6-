function solution(weights, head2head) {
    let answer = [];
    let arr = [];
    let result = [];
    let weightWin = [];

    for (let i = 0; i < weights.length; i++) {
        let cnt = 0;
        let win = 0;
        let cntWeightWin = 0;
        for (let j = 0; j < head2head.length; j++) {
            // 경기를 뛴 횟수
            if (head2head[i].substring(j, j + 1) == "W" || head2head[i].substring(j, j + 1) == "L") {
                cnt++;
                // 이긴 횟수
                if (head2head[i].substring(j, j + 1) == "W") {
                    // 자신보다 몸무게가 무거운 복서를 이긴 횟수
                    if (weights[i] < weights[j]) {
                        cntWeightWin++;
                    }
                    win++;
                }
            }
            
            // 경기를 한번도 하지 않은 복서의 승률
            if (head2head[j + 1] == undefined) {
                if (cnt == 0) {
                    answer.push(0);
                    break;
                }
                // 복서의 승률
                answer.push((win / cnt * 100));
            }
        }
        // 자신보다 몸무게가 무거운 복서를 이긴 횟수를 각각 담음
        weightWin.push(cntWeightWin);
    }

    // 복서 정보가 담긴 객체 생성
    for (let i = 0 ; i < answer.length; i++) {
        let temp = {
            key: i + 1,                 // 번호
            value: answer[i],           // 승률
            weight: weights[i],         // 몸무게
            weightW: weightWin[i],      // 자신보다 몸무게가 무거운 복서를 이긴 횟수
        };
        arr.push(temp);
    }
    
    arr.sort(function(a, b) {
        // 승률
        if (a.value != b.value)     return b.value - a.value;
        // 자신보다 몸무게가 무거운 복서를 이긴 횟수
        if (a.weightW != b.weightW) return b.weightW - a.weightW;
        // 자기 몸무게가 더 무거운 사람
        if (a.weight != b.weight)   return b.weight - a.weight;
        // 모두 동일한 경우 작은 번호가 앞쪽
        return a.key - b.key;
    });

    // 결과
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].key);
    }

    return result;
}

console.log(solution([50,82,75,120], ["NLWL","WNLL","LWNW","WWLN"]));
console.log(solution([145,92,86], ["NLW","WNL","LWN"]));
console.log(solution([60,70,60], ["NNN","NNN","NNN"]));