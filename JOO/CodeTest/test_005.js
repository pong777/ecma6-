function solution(participant, completion) {
    participant.sort()
    completion.sort()
    let answer = []
    for (var i = 0; i < participant.length; i++) {
        if (participant[i] != completion[i]) {
            completion.splice(i,0,'blank')
            answer.push(participant[i])
        }
    }
    return answer.join(',')
}



//console.log(solution(["leo", "kiki", "eden"],["eden", "kiki"])) //leo
//console.log(solution(["marina", "josipa", "nikola", "vinko", "filipa"],["josipa", "filipa", "marina", "nikola"])) //vinko
//console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"])) //mislav

