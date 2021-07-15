function solution (arr) {    
    let answer = []
    arr.reduce((acc, cur) => {
        if (acc !== cur) answer.push(cur)
        return cur
    }, -1)
    return answer
}

//console.log(solution([1, 1, 3, 3, 0, 1, 1])) // [1,3,0,1]
//console.log(solution([4, 4, 4, 3, 3])) // [4,3]