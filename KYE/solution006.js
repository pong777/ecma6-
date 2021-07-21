function solution(absolutes, signs) {
    let sum = 0;

    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            sum += absolutes[i];
        } else {
            sum += absolutes[i] * -1;
        }
    }
    return sum;
}

console.log(solution([4,7,12], [true,false,true]));
console.log(solution([1,2,3], [false,false,true]));