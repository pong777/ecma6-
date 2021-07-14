// "user strict";

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
// const original = {
//     a: 1,
//     b: 2,
//     c: {
//       d: 3,
//     },
//   }
//   const copied = { ...original }  
//   original.a = 1000
//   original.c.d = 3000  
//   console.log(copied.a) // 1
  // console.log(copied.c.d) // 3000

  // function ex1 (a,b,...rest){
  //   console.log(Array.isArray(rest));
  //   console.log(rest);
  // }
  // ex1(1,22,333,4444,555555);
  // const  sum = (a =0,b=0) => a+b;
  // console.log(sum());
  // console.log(sum(1));
  // console.log(sum(7,5));
  // console.log(sum());

  // const values = [20, 10, 30, 50, 40];
  //  console.log(Math.max(20, 10, 30, 50, 40)); 
  //  console.log(Math.max.apply(null, values)); 
  //  console.log(Math.max(...values));

  // let originalArray = [1,2];
  // let copiedArray = [...originalArray];
  // console.log(originalArray === copiedArray);
  // originalArray.push(3);
  // console.log(originalArray); 
  // console.log(copiedArray);

// let originalArray = [{ first: 'Hello,', second: 'World!' }, { first: 'Welcome', second: 'ES6!' }]; 
// let copiedArray = [...originalArray]; 
// console.log( copiedArray === originalArray ); 
// console.log(originalArray[0].first); 
// copiedArray[0].first = "Hi,"; 
// console.log(originalArray[0].first); // 원본과 카피배열은 같은 곳을 참조한다. // 즉, 참조가 바뀌어 있지 않은 것(얕은 복사)이다. 
// console.log( copiedArray[0].first );

// const { name: name, age: age } = { name: '재희', age: 30 };
//  console.log(name, age);

// var obj = { name: 'foo',
//  getName () { return this.name; },
//  getName2 : function () { return this.name; } 
// };
//   const a = new obj.getName2();
//   console.log( a ); // 빈 객체 const b = new obj.getName();


// const healthObj = {
//   showHealth : function() {
//     console.log("오늘의 운동시간:" + this.healthTime);
//   }
// }

// const myHealth = Object.assign(Object.create(healthObj), {
//   name: "yj",
//   healthTime: "15:00"
// });

// console.log("myhealth is ", myHealth);
// myHealth.showHealth();

// 이전 자바스크립트 버전

// setTimeout (function() {
//   console.log('hello world');
//   }, 1000);
  
//   let newArr = [1,2,3,4,5].map(function(value, index, object) {
//   return value * 3;
//   });
  
  
//   // ES6 화살표 함수 사용
  
//   setTimeout (() => {
//   console.log('hello world');
//   }, 1000);
  
//   let newArr = [1,2,3,4,5].map((v) => (v*3) );