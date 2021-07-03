// 변수 let const 

// let  최초 선언한  변수명 은 바꿀수 x 값 재할당 가능  : 변하는 값 선언
//const  바뀌지 않는 상수 수정x  :  변하지 않는값 설정   
//1. 변수는 문자,숫자 $와 _ 만사용   let_ =1;  let $ =3;
//2. 첫글자가 숫자가 될수 x 
//3. 예약어 사용 불가  let let =9 X 
//4. 가급적 상수는  대문자로 변수명 설정
//5. 변수명은 읽기 쉽고 이해할수 있게 선언  

//  let name ="Mike";
//  age = 105;
//alert(name);//
//console.log(age);

// //string 자료형  
// const name1 = "Mike";
// const name2 = 'Mike';
// const name3 = `Mike`; 

//호이스팅  변화 Temporal Dead Zone(TDZ)
// 스코프의 선두에서 선언 단계가 실행된다.
// 아직 변수가 초기화(메모리 공간 확보와 undefined로 초기화)되지 않았다.
// 따라서 변수 선언문 이전에 변수를 참조할 수 없다.
// console.log(foo); // ReferenceError: foo is not defined
// let apple; // 변수 선언문에서 초기화 단계가 실행된다.
// console.log(apple); // undefined
// apple = 1; // 할당문에서 할당 단계가 실행된다.
// console.log(apple); // 1 


// var funcs = [];

// // 함수의 배열을 생성하는 for 루프의 i는 for 루프의 코드 블록에서만 유효한 지역 변수이면서 자유 변수이다.
// for (let i = 0; i < 3; i++) {
//   funcs.push(function () { console.log(i); });
// }

// // 배열에서 함수를 꺼내어 호출한다
// for (var j = 0; j < 3; j++) {
//   console.dir(funcs[j]);
//   funcs[j]();
// }

//global func {} scope 생성  
//var case
// function setClick(){

//     var _loop = function _loop(i){  //function scope args 임 
//         batns[i].onclick =function(){
//             console.info(i);
//         };
//     };
//     for (var i =0 ; i<3; i++){
//         _loop(i);
//     }
// }
// setClick();
// let case
// function setClick(){

//     for(let i =0;i<3; i++){
//         btns[i].onclick = function(){
//             console.info(i);
//         }
//     }
// }