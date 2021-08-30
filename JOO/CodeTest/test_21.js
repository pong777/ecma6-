function solution(table, languages, preference) {

    let newList = [];
    let dictObject = {};
    let sortable = [];
    let maxScore = 0;
    let answer = [];

    for (let i = 0; i < table.length; i++){
        newList.push(table[i].split(" "));  
    }

    for (let x = 0; x < languages.length; x++){
        for (let y = 0; y < newList.length; y++){
            if (newList[y].indexOf(languages[x]) != -1){     
                if ( newList[y][0] in dictObject == false) {
                    dictObject[newList[y][0]] = 0;
                }                          
                dictObject[newList[y][0]] += (6 - newList[y].indexOf(languages[x])) * preference[x];
            }
        }
    }    
    
    for (let key in dictObject) {
        if (maxScore < dictObject[key]) {
            maxScore = dictObject[key];
        }
        sortable.push([key, dictObject[key]]);
    }    

    answer = sortable.filter(function(item){        
        return item[1] === maxScore;
    });  

    answer.sort();   

    return answer[0][0];
}


//console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["PYTHON", "C++", "SQL"], [7,5,5])) //"HARDWARE"
//console.log(solution(["SI JAVA JAVASCRIPT SQL PYTHON C#", "CONTENTS JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP", "GAME C++ C# JAVASCRIPT C JAVA"], ["JAVA", "JAVASCRIPT"], [7,5])) //"PORTAL"