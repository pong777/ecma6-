function solution(participant, completion) {
    let result;
    participant.sort();
    completion.sort();

    for (let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) {
            result = participant[i];
            return result;
        }
    }

}

console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));