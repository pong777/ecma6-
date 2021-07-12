// 1. 매개변수 기본값 (Default Parameter value)
/*
  function sum(x = 0, y = 0) {
    return x + y;
  }
  
  console.log(sum(1));    // 1
  console.log(sum(1, 2)); // 3
*/

//2. Rest 파라미터
//2.1 기본 문법
/*
function foo(param, ...rest) {
    console.log(param); // 1
    console.log(rest);  // [ 2, 3, 4, 5 ]
  }
  
  foo(4,2,3,45,[1, 2, 3, 4, 5]);
  

  /*
    function bar(param1, param2, ...rest) {
    console.log(param1); // 1
    console.log(param2); // 2
    console.log(rest);   // [ 3, 4, 5 ]
  }
  
  bar(1, 2, 3, 4, 5);

  //2.2 arguments와 rest 파라미터

  // ES6
function sum(...args) {
    console.log(arguments); // Arguments(5) [1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): ƒ]
    console.log(Array.isArray(args)); // true
    return args.reduce((pre, cur) => pre + cur);
  }
  console.log(sum(1, 2, 3, 4, 5)); // 15


  //3. Spread 문법

  // ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
console.log(...[1, 2, 3]) // 1, 2, 3

// 문자열은 이터러블이다.
console.log(...'Hello');  // H e l l o

// Map과 Set은 이터러블이다.
console.log(...new Map([['a', '1'], ['b', '2']]));  // [ 'a', '1' ] [ 'b', '2' ]
console.log(...new Set([1, 2, 3]));  // 1 2 3

// 이터러블이 아닌 일반 객체는 Spread 문법의 대상이 될 수 없다.
console.log(...{ a: 1, b: 2 });
// TypeError: Found non-callable @@iterator


//3.1 함수의 인수로 사용하는 경우
/*
// ES6
function foo(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
  }
  
  // 배열을 foo 함수의 인자로 전달하려고 한다.
  const arr = [1, 2, 3];
  
  /* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
     spread 문법에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. 
  foo(...arr);
*/


  //3.2 배열에서 사용하는 경우
  /*
    // ES6
  const arr = [1, 2, 3];
  // ...arr은 [1, 2, 3]을 개별 요소로 분리한다
  console.log([...arr, 4, 5, 6]); // [ 1, 2, 3, 4, 5, 6 ]


  //3.2.2 push


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ...arr2는 [4, 5, 6]을 개별 요소로 분리한다
arr1.push(...arr2); // == arr1.push(4, 5, 6);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

3.2.3 splice

const arr1 = [1, 2, 3, 6];
const arr2 = [4, 5];

// ...arr2는 [4, 5]을 개별 요소로 분리한다
arr1.splice(3, 0, ...arr2); // == arr1.splice(3, 0, 4, 5);

console.log(arr1); // [

3.2.4 copy
// ES6
const arr = [1, 2, 3];
// ...arr은 [1, 2, 3]을 개별 요소로 분리한다
const copy = [...arr];

console.log(copy); // [ 1, 2, 3 ]

// copy를 변경한다.
copy.push(4);

console.log(copy); // [ 1, 2, 3, 4 ]
// arr은 변경되지 않는다.
console.log(arr);  // [ 1, 2, 3 ]
  */

//4. Rest/Spread 프로퍼티

/*
// 객체의 병합
const merged = Object.assign({}, { x: 1, y: 2 }, { y: 10, z: 3 });
console.log(merged); // { x: 1, y: 10, z: 3 }

// 특정 프로퍼티 변경
const changed = Object.assign({}, { x: 1, y: 2 }, { y: 100 });
console.log(changed); // { x: 1, y: 100 }

// 프로퍼티 추가
const added = Object.assign({}, { x: 1, y: 2 }, { z: 0 });
console.log(added); // { x: 1, y: 2, z: 0 }

 * /
  */
