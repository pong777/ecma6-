//릭사각형 별 찍기...별별별 5분만에라니
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]); 
    let result = "";
    for (let i = 0; i < b ; i++){
        result = "*".repeat(a);
        console.log(result);
    }
});

// 다른사람 풀이
process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    console.log((('*').repeat(a)+`\n`).repeat(b))
});


//평균값 구하기 
function solution(arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++)
        answer += arr[i];
    return answer / arr.length;   //reduce 

}
// 다른사람 풀이
function solution(arr) {
    return arr.reduce((a, b) => a + b) / arr.length;
}

//

// 다른사람 풀이