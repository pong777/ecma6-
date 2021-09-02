function solution(word) { 
    const wordList = ["A", "E", "I", "O", "U"];

    let tempList = [];
 
    const mkString = (char, cnt) => {
        if (cnt === wordList.length) {
            return 0;
        } 
        else {
            cnt++;
            for (let i = 0; i < wordList.length; i++) {
                const tempWord = char + wordList[i];        
                tempList.push(tempWord);
                mkString(tempWord, cnt);
            }
        }
    }

    mkString('', 0);
    //console.log(tempList);
    return tempList.indexOf(word) + 1;
}





console.log(solution('AAAAE')); //6
//console.log(solution('AAAE')); //10
//console.log(solution('I')); //1563
//console.log(solution('EIO')); //1189
