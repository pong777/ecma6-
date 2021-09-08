const scoreCal = (char) => {
    switch (char) {
        case 'S':
            return 1;            
        case 'D':
            return 2;
            break;
        case 'T':
            return 3;                 
    }
};

const optionCal = (sumArray, option, idx) => {

    if (option === '*') {
        sumArray[idx - 1] = sumArray[idx - 1] * 2
        sumArray[idx] *= 2
    } 
    else if (option === '#') {
        sumArray[idx] *= -1
    }
    return sumArray;
};


function solution (dartResult) {

    const scoreArray = dartResult.replace(/[*#SDT]/g,'|').split('|').filter(item => item !== '')
    const calcArray = dartResult.replace(/[0-9]/g, '|').split('|').filter(item => item !== '')

    let answer = 0
    let sumArray = []
  
    calcArray.forEach((item, idx) => {

        let num = scoreCal(item[0]);
        let option = ''

        if (item.length > 1) {
            option = item[1]
        }   

        sumArray.push((scoreArray[idx]) ** num)
  
        sumArray = optionCal(sumArray, option, idx)

    })

    sumArray.forEach(item => {
        answer += item
    })
    return answer
}

console.log(solution('1S2D*3T')) // 37
console.log(solution('1D2S#10S')) // 9
console.log(solution('1S2D*3T')) // 37
console.log(solution('1D2S0T')) // 3
console.log(solution('1S*2T*3S')) // 23
console.log(solution('1D#2S*3S')) // 5
console.log(solution('1T2D3D#')) // -4
console.log(solution('1D2S3T*')) // 59
