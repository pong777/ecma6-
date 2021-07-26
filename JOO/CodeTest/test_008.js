function solution(arr) {

    let answer = arr.reduce(function(accumulator, currentValue){  
        return accumulator + currentValue;
    });    

    return answer / arr.length;
}

    

//console.log(solution([1,2,3,4])) // 2.5
//console.log(solution([5,5])) // 5
