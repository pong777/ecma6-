function solution(arr) {
    
    const arrLength = arr.length;
    let answer = [];

    if (arrLength <= 1) {
        answer = [-1];
    }
    else {
        answer = arr.filter(function(item) {
            return item !== Math.min.apply(null, arr);
        });
    }
    return answer;
}


//console.log(solution([4,3,2,1])) // [4,3,2]
//console.log(solution([10])) // -1]
