function solution (lottos, winNums) {
 
    let correctcnt = 0
    let zerocnt = 0
    
    lottos.forEach(item => {
        if (winNums.includes(item)) correctcnt += 1
        if (item === 0) zerocnt += 1
    })
    
    return rankingCal(correctcnt,zerocnt)
}

function rankingCal(correctcnt,zerocnt) {
    const arr = [7 - (correctcnt + zerocnt)  , 7 - (correctcnt)]

    return arr.reduce((acc,cur) => {
        acc.push(cur == 7 ? 6 : cur)
        return acc;
    },[]);
}




//console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])) // [3, 5]
//console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])) // [1, 6]
//console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])) // [1, 1]
