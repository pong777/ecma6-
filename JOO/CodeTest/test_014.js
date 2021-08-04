
function solution (n, lost, reserve) {
    var answer = 0
    const student = []
    for (let i = 1; i <= n; i++) student.push(i)
    
    lost.sort
    reserve.sort
    
    const tempLost = lost.filter(val => !reserve.includes(val))
    const tempReserve = reserve.filter(val => !lost.includes(val))
    for (var value of student) {
        if (tempLost.includes(value)) {
            if (tempReserve.includes(value - 1)) {
                tempReserve.forEach((item, index) => {
                    if (item === value - 1) {
                        tempReserve.splice(index, 1)
                        answer += 1
                    }
                })
            } else if (tempReserve.includes(value + 1)) {
                tempReserve.forEach((item, index) => {
                    if (item === value + 1) {
                        tempReserve.splice(index, 1)
                        answer += 1
                    }
                })
            }
        } else {
            answer += 1
        }
    }
    return answer
}

