function solution(price, money, count) {
    var answer = -1;
    let sumPrice = 0;
    while(count) {
        sumPrice += retCal(price, count);
        count--;
    }
    answer = sumPrice - money;
    if(answer < 0) {
        answer = 0;
    }
    return answer;
}

function retCal(price, count){   
        return price * count;
    }

console.log(solution(3,20,4)) //10