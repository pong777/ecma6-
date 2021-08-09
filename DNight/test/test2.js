//for 빼고/ set / map filter 사용해 보기
//츄츄 라이츄 피카츄~~폰켓몬  
// function solution(nums) {
//     let numLength = nums.length
//     var answer = 0;
//     let arr = [];
  
//     for(let num of nums){
//         if(!arr.includes(num)) arr.push(num);
//         if(arr.length === nums.length/2) return arr.length;
//     }
//     answer = arr.length
//     return answer;
//   }
  /* 다른사람 풀이 
  function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}
  */


// function solution(participant, completion) {
//     var answer = '';
//      participant = participant.sort();
//      completion = completion.sort();
//     for ( let i =0; i<participant.length; i++){
//         if(participant[i]!==completion[i]){
//             answer = participant[i];
//             break;
//         }
//     }
//     return answer;
// }
// 다른사람 풀이 
/*
     var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))  

     
    //가독성...그래도..ㅋ 쩔었다.ㅋ
*/

  // set ,.map .fiiter .sort 
  //음양더하기


//   function solution(absolutes, signs) {
//     for(let i = 0; i<absolutes.length; i++){
//         if(signs[i] === false){
//             absolutes[i] = -absolutes[i]            
//         } else {
//             absolutes[i]
//         }
//     } return absolutes.reduce(function(acc,cur){
//         return acc+cur
//     })
// }
// 다른사람 풀이 
/* 
 function solution(absolutes, signs) {

     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
 }
 
 */

