"user strict";

//매개변수 기본값  default parameter values
//인수가 부족한 경우  undefined 이다.
// funciton foo(..rest){
//     console.log(Array.isArray(rest));
//     console.log(rest);
// }
// foo(1,2,3,4,5);
//rest 피라미터 
//Rest 파라미터는 함수 정의시 선언한 매개변수 개수를 
// //나타내는 함수 객체의 length 프로퍼티에 영향을 주지 않는다.
// funtion sum(x,y){
//  return x + y;
// }
// console.log(sum(1)); Nan
// function sum(x,y){
//     x = x || 0;
//     y = y|| 0;
//     return x + y;
// }
// console.log(sum(1));
// console.log(sum(1,2));

// function foo(x,y,z){
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// const arr =[1,2,3];
// foo(...arr); // array 를 받아서 각 매개변수로 전달되었다.
// const aArr = [1,2,3];
// const bArr = [4,5,6];
// //array concat 
// console.log('concat :'+ aArr.concat(bArr));
// //sparead 
// console.log('spread: '+[...aArr,...bArr]);

// const o1 = { x: 1, y: 2 };
// const o2 = { ...o1, z: 3 };
// console.log(o2); // { x: 1, y: 2, z: 3 }
 
// const target = { x: 1, y: 2 };
// const source = { z: 3 };
// // Object.assign를 사용하여도 동일한 작업을 할 수 있다.
// // Object.assign은 타깃 객체를 반환한다
// // console.log(Object.assign(target, source)); // { x: 1, y: 2, z: 3 }
// const htmlCollection = document.getElementsByTagName('li');
// const newArray = [...htmlCollection];
const original = {
    a: 1,
    b: 2,
    c: {
      d: 3,
    },
  }
  const copied = { ...original }  
  original.a = 1000
  original.c.d = 3000  
  console.log(copied.a) // 1
  console.log(copied.c.d) // 3000
