//1번 
function solution(arr)
{
    let answer = [];  
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }    
    return answer;
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3])); 


//2번 
function solution(s) {
    var answer = '';
    if(s.length%2 != 0) {
        let num = Math.floor(s.length/2);
        answer = s[num];
    } else {
        let num = Math.floor(s.length/2)-1;
        answer = s[num]+s[num+1];
    }
    return answer;
}

let s = 'qwerty';
console.log(solution(s));


//3번
function solution(a, b) { 
    //let today = new Date()
    let answer = new Date(2016, (a-1), b); 
    return String(answer).slice(0,3).toUpperCase();
 }

 console.log(solution(5,24));