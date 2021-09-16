function solution(dartResult) {
    let answer = 0;
    let temp = Array.from(dartResult);
    let first = '';
    let second = '';
    let third = '';

    for (let i = 0; i < temp.length; i++) {
        if (!isNaN(temp[i])) {
            first += temp[i];
        }
        else if (temp[i] == 'S') {
            first = Math.pow(first, 1);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
        else if (temp[i] == 'D') {
            first = Math.pow(first, 2);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
        else if (temp[i] == 'T') {
            first = Math.pow(first, 3);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == '*') {
            first *= 2;
        }
        else if (temp[i] == '#') {
            first *= -1;
        }
        else if (!isNaN(temp[i])) {
            second += temp[i];
        }
        else if (temp[i] == 'S') {
            second = Math.pow(second, 1);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
        else if (temp[i] == 'D') {
            second = Math.pow(second, 2);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
        else if (temp[i] == 'T') {
            second = Math.pow(second, 3);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == '*') {
            first *= 2;
            second *= 2;
        }
        else if (temp[i] == '#') {
            second *= -1;
        }
        else if (!isNaN(temp[i])) {
            third += temp[i];
        }
        else if (temp[i] == 'S') {
            third = Math.pow(third, 1);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
        else if (temp[i] == 'D') {
            third = Math.pow(third, 2);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
        else if (temp[i] == 'T') {
            third = Math.pow(third, 3);
            temp.splice(0, temp.indexOf(temp[i]) + 1);
            break;
        }
    }

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == '*') {
            second *= 2;
            third *= 2;
        }
        else if (temp[i] == '#') {
            third *= -1;
        }
    }
    
    answer = first + second + third;

    return answer;
}

console.log(solution('1S2D*3T'));   // 37
console.log(solution('1D2S#10S'));  // 9
console.log(solution('1D2S0T'));    // 3
console.log(solution('1S*2T*3S'));  // 23
console.log(solution('1D#2S*3S'));  // 5
console.log(solution('1T2D3D#'));   // -4
console.log(solution('1D2S3T*'));   // 59
