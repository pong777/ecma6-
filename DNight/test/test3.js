//1.릭사각형 별 찍기...별별별 ... 킹받네 5분만에라니
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


//2.평균값 구하기 
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
//QA...

//3.짝수홀수 구하기

function solution(num) { 
    let answer = num%2 === 0 ? "Even" : "Odd"  
    return answer; 
}

//다른사람 풀이
function evenOrOdd(num) {
    return num % 2 ? "Odd" : "Even";
  }

//4. 제일작은수 제거
function solution(arr) {
    var answer = [];
    if(arr.length===1){ //값이 하나일땐 제거하면 무조건 없으므로
        answer.push(-1);
        return answer;
    }
    let min = Math.min.apply(null,arr); //가장 작은값 가져오는 방법..
    answer = arr.filter(function(element){
       return element!==min 
    });
    return answer;
}

//다른풀이 
function solution(arr) { 
    var answer = [];
    let min = Math.min.apply(null, arr);
    arr = arr.filter((el) => el > min); 
    answer = arr.length === 0 ? [-1] : arr
    return answer;  
}
//와....................=ㅅ=..
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}

// 5. 정규식 구하기 
/*
/[^a-z0-9-._]/gi 에서
^~ : ~를 제외하고
a-z : a부터 z까지
0-9 : 0부터 9까지
-._ 등등 : 해당 문자열

*/
function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase(); //1
      answer = answer.replace(/[^\_\.\w\d\-]/g,'') //2
      answer = answer.replace(/\.+/g,'.') //3
      answer = answer.replace(/^\.|\.$/g,'') //4
      if(answer === ''){
        answer = 'a'
      }; // 5
      answer = answer.substring(0,15).replace(/\.$/g,'') //6
      if(answer.length < 3){
        answer = answer.padEnd(3, answer[answer.length - 1]);
      }
      return answer
  }

  //다른사람 풀이   섞어쓰면되는거였군...=ㅅ=...아...머리가 안돈다.
  const solution = new_id =>
    new_id.toLowerCase()
          .replace(/[^\w-_.]/g, "")
          .replace(/\.+/g, ".")
          .replace(/^\.|\.$/g, "")
          .replace(/^$/, "a")
          .match(/^.{0,14}[^.]/)[0]
          .replace(/^(.)$/, "$1$1$1")
          .replace(/^(.)(.)$/, "$1$2$2");


