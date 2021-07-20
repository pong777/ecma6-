function solution(nums) {
    const haveCount = nums.length / 2   

    // 중복 제거    
    const setnoDuple = [...new Set(nums)]

    if (setnoDuple.length >= haveCount) {
        return haveCount
    }
    else {    
        return setnoDuple.length
    }
}
//console.log(solution([3, 1, 2,4]))
//onsole.log(solution([3, 1, 2, 3]))
//console.log(solution([3, 3, 3, 2, 2, 4]))
//console.log(solution([3, 3, 3, 2, 2, 2]))