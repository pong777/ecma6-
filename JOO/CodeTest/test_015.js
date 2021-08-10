function solution(s) {
    const dic = {'zero':'0', 'one':'1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}
    let temp_value = ''
    let answer = ''
    for(let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            answer += s[i]
        } else {
            temp_value += s[i]
            if (temp_value in dic) {
                answer += dic[temp_value]
                temp_value = ''
            }
        }
    }
    return Number(answer);
}