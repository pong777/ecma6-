function solution (s) {
    
    const idx = Math.floor(s.length / 2)
    let answer = ""

    if (s.length % 2 == 0) {
        answer = s[idx-1] + s[idx]
    }
    else {
        answer = s[idx]
    }
    return answer
}

//console.log(solution("abcde")) // c
//console.log(solution("qwer")) //"we"