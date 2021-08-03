function solution(n, arr1, arr2) {
    let answer = [];
    let binary1 = [];
    let binary2 = [];
    let str = [];

    for (let i = 0; i < n; i++) {
        str[i] = '';

        // 2진수 변환
        binary1.push(arr1[i].toString(2));
        binary2.push(arr2[i].toString(2));
        
        // 자릿수 맞춤
        let len1 = n - binary1[i].length;
        let len2 = n - binary2[i].length;

        if (binary1[i].length < n) {
            for (let j = 0; j < len1; j++) {
                binary1[i] = "0" + binary1[i];
            }
        }
        if (binary2[i].length < n) {
            for (let j = 0; j < len2; j++) {
                binary2[i] = "0" + binary2[i];
            }
        }

        // 각 배열 비교
        for (let j = 0; j < n; j++) {
            if (binary1[i].charAt(j) == binary2[i].charAt(j) && binary1[i].charAt(j) == '0' && binary2[i].charAt(j) == '0') {
                str[i] += ' ';
            }
            else {
                str[i] += '#';
            }
        }
        answer.push(str[i]);
    }

    return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));

