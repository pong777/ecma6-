"user strict";
// var a = 20;
// var b = 8;
// var c = "자바스크립트";
// var str = "저는 " + (a + b) + "살이고 " + c + "를 좋아합니다.";
// console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.

// let a = 20;
// let b = 8;
// let c = "자바스크립트";
// let str = `저는 ${a+b}살이고 ${c}를 좋아합니다.`;
// console.log(str);   //저는 28살이고 자바스크립트를 좋아합니다.

// let person = 'Lee';
// let age = 28;

// let tag = function(strings, personExp, ageExp) {    //함수 이름은 원하는 대로 가능!
//     let str0 = strings[0];
//     let str1 = strings[1];
//     console.log("str0 : " + str0);  //strings는 
//     console.log("str1 : " + str1);

//     let ageStr;
//     if(ageExp > 99) ageStr = 'centenaian';
//     else ageStr = 'youngster';

//     return str0 + personExp + str1 + ageStr;    //이 함수 내에서 template literal 반환 가능
// };
// let output = tag`that ${person} is a ${age}`;
// console.log(output);    //that Lee is a youngster

// let person = 'Lee';
// let age = 28;
// let tag = function (string , personExp,ageExp){

//     let str0 = string[0];
//     let str1 = string[1];
//     console.log("str0 : " + str0);
//     console.log("str1 :" + str1);
//     let ageStr;
//     if(ageExp > 99) ageStr = 'centenaina';
//     else ageStr = 'youngster';
//     return  str0 + personExp + str1 +ageStr; 
// };
// let output= tag`that ${person} is a ${age}`;
// console.log(output); // that
// let myTag= function(strings,a,b,c){
//     console.log(`문자열 배열 길이 : ${strings.length}`);
//     for(let i = 0; i<strings.length ; i+=1) {

//         console.log (`문자열 요소 [${i}]: ${strings[i]}`);

//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// let html = 5;
// let css = 3;
// let js = 'es10';
// let string = myTag`HTML${html}, CSS${css}, JavaSript${js}`;
// function generateLink (image, width) {
//     const widthInt = parseInt(width , 10)
//     return 'https://' + getProvider() + '/' +image + '?width=' + widthInt;
//  }

// function generateLink(image,width){

//     return `https://${getProvider()} / ${images}?widht=${parseInt(width,10)}`
// }

// const name = 'Kim';
// const helloMsg = `hello ${name}`;
// console.log(helloMsg); // hello Kim

// const obj = { a: 1 };
// const msg = `${obj}`;
// console.log(msg); // [object Object]

// const foo = () => 1;
// const msg2 = `${foo}`;
// console.log(msg2); // () => 1

// const food1 = '피자';
// const food2 = '치킨';

// const foodMsg = (texts, ...values) => {
// 	console.log(texts);
// 	console.log(values);
// };
// foodMsg`제가 어제 먹은 음식은 ${food1}그리고 ${food2}입니다.`;


// const template = `<ul class="nav-items">
//   <li><a href="#home">Home</a></li>
//   <li><a href="#news">News</a></li>
//   <li><a href="#contact">Contact</a></li>
//   <li><a href="#about">About</a></li>
// </ul>`;

// console.log(template);
// console.log(`1 + 1 = ${1 + 1}`); // 강제타입 반환