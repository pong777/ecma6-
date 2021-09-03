function solution(table, languages, preference) {
    let score = [];
    let result = '';
    let language = "JAVA JAVASCRIPT C C++ C# SQL PYTHON KOTLIN PHP";
    language = language.split(" ");

    for (let i = 0; i < table.length; i++) {
        table[i] = table[i].split(" ");
    }
    
    for (let i = 0; i < table.length; i++) {
        score[i] = 0;
        for (let j = 1; j <= table.length; j++) {
            for (let k = 0; k < languages.length; k++) {
                if (languages[k] == table[i][j]) {
                    score[i] += preference[k] * (5 - j + 1);
                }
                else {
                    score[i] += preference[k] * 0;
                }
            }
        }
    }

    let tempScore = [];
    let tempName = [];
    for (let i = 0; i < score.length; i++) {
        if (score[i] == Math.max.apply(null, score)) {
            result = table[i][0];
            tempScore.push(Math.max.apply(null,score));
            tempName.push(table[i][0]);
        }
    }

    if (tempScore.length > 1) {
        tempName.sort();
        result = tempName[0];
    }

    return result;
}

console.log(solution(
["SI JAVA JAVASCRIPT SQL PYTHON C#", 
"CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", 
"HARDWARE C C++ PYTHON JAVA JAVASCRIPT", 
"PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", 
"GAME C++ C# JAVASCRIPT C JAVA"], 

["PYTHON", "C++", "SQL"], 

[7, 5, 5]));
