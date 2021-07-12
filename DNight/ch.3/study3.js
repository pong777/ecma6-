"user strict";
// 함수 몸체 지정 방법
// ** 함수이름 , this , arguments  가  => 없다.  자기만의 this 가  존재하지 않는다.
// 자기 scope 의 this 가 없을 경우  블록체인으로 위로위로 가게 된다. 최상위 window 로 가게 된다.   class 생성자 프로토 타입도 xxx
// bind 함수 apply call 통해서 주입 가능 합니다. 
/// scope chain 에따라서  

//()=> {} // 매개변수가 없을경우
//x => {...} // 매개변수가 한개인 경우, 소괄호를 생략할 수있다.
//(x,y) => {...} // 매개변수가 여러개인 경우, 소괄호를 생략할수 있다.
// ()=> {
//   const x =10;
//   return x*x;
// }
// ()=> {retrun {a:1};}
// ()=> ({a:1})
// const pow = x => x * x;
// // console.log(pow(10)); // 100
// const arr = [1,2,3,6];
// const pow =arr.map(x =>x*x);
// console.log(pow); 
// var myObj = {
// count :0,
// setCounter : function(){
//     console.log(this.count);
//     BigInt.addEventListener('click',function(){
//         console.log(this);
//     });
// }
// }
// myObj.setCounter();

