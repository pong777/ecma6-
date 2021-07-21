function solution(absolutes, signs) {
    var answer = absolutes.reduce((finalVal, item, idx) => finalVal + (item * (signs[idx] == true ? 1 : -1 )), 0)
    return answer
}


//console.log(solution([4,7,12],[true,false,true]))//9
//console.log(solution([1,2,3],[false,false,true]))//0
