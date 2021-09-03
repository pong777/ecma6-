function solution(scores) {
    let answer = new Array(scores.length);
    let arr = array2(scores.length, scores.length);
    let result = '';

    // 학생의 평가 점수 구하기
    for (let i = 0; i < scores.length; i++) {
        for (let j = 0; j < scores.length; j++) {
            arr[i][j] = scores[j][i];
        }
    }

    // 학생의 평균
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        let value = 0;
        let temp = 0;
        answer[i] = 0;
        // 자기 자신의 값이 최대/최소값일 경우 중복된 최대/최소값 카운트
        for (let k = 0; k < arr.length; k++) {
            // 자기 자신의 값이 최대/최소값인지 구분
            for (let l = 0; l < arr.length; l++) {
                if (i == l && arr[i][l] == Math.max.apply(null, arr[i])) {
                    value = arr[i][l];
                    break;
                }
                else if (i == l && arr[i][l] == Math.min.apply(null, arr[i])) {
                    value = arr[i][l];
                    break;
                }
            }

            if (arr[i][k] == (Math.max.apply(null, arr[i]) && value)) {
                ++temp;
            }
            else if (arr[i][k] == (Math.min.apply(null, arr[i]) && value)) {
                ++temp;
            }
        }

        // 학생의 학점
        for (let j = 0; j < arr.length; j++) {
            answer[i] += arr[i][j];
            ++count;
            // 자신의 평가 점수가 최대/최소값일 경우 제외
            if (i == j && (arr[i][j] == Math.max.apply(null, arr[i]) || arr[i][j] == Math.min.apply(null, arr[i]))) {                
                answer[i] -= arr[i][j];
                --count;

                // 자신의 평가 점수 최대/최소값이 중복일 경우 제외하지 않는다.
                if (temp > 1) {
                    answer[i] += arr[i][j];
                    ++count;
                }
            }
        }
        answer[i] /= count;

        if (answer[i] >= 90) {
            result += 'A';
        }
        else if (answer[i] >= 80) {
            result += 'B';
        }
        else if (answer[i] >= 70) {
            result += 'C';
        }
        else if (answer[i] >= 50) {
            result += 'D';
        }
        else {
            result += 'F';
        }
    }

    return result;
}

function array2(rows, columns) {
    let arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(columns);
    }

    return arr;
}

console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]));
