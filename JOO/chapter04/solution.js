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
  */

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

// ES6
function foo(x, y, z) {
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // 3
  }
  
  // 배열을 foo 함수의 인자로 전달하려고 한다.
  const arr = [1, 2, 3];
  
  /* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
     spread 문법에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. */
  foo(...arr);