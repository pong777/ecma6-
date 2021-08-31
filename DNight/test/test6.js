//8주차
//놀이공원 $_$ 
function solution(price, money, count) {
    let  totalPrice = 0;
     for( let i =1; i<=count; i++){
        totalPrice += price *i;        
     }
     return  money > totalPrice ? 0 : totalPrice-money ;
 }
 //가우스...검색.. 다른사람 풀이

 function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}