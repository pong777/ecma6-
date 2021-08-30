function solution(scores) {
    let answer = '';
    let maxScore = 0;
    let minScore = 0;
    let tempArr = [];

    const average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;

    for(var i=0;i<scores.length;i++){
        tempArr = [];  

        for(var j=0;j<scores[0].length;j++) {
            tempArr.push(scores[j][i]);           
        }

        maxScore = Math.max(...tempArr);
        minScore = Math.min(...tempArr);

        if (scores[i][i] === maxScore) {      
            if (tempArr.indexOf(maxScore) == tempArr.lastIndexOf(maxScore)){
                scores[i][i] = 0;
                tempArr.splice(tempArr.indexOf(maxScore),1)
            }
            
        }    
        else if (scores[i][i] === minScore) {
            if (tempArr.indexOf(minScore) == tempArr.lastIndexOf(minScore)){
                scores[i][i] = 0;
                tempArr.splice(tempArr.indexOf(minScore),1)
            }   
        }  
        //console.log(tempArr)

        answer += chkGrade(average(tempArr));
      

    }
    return answer;
}

function chkGrade(score){  
    if(score>=90){
        return 'A';
    }else if(score>=80){
        return 'B';
    }else if(score>=70){
        return 'C';
    }else if(score>=50){
        return 'D';
    }else{
        return 'F';
    }
}


//console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]])) //"FBABD"
//console.log(solution([[50,90],[50,87]]))	//"DA"
//console.log(solution([[70,49,90],[68,50,38],[73,31,100]]))	//"CFD"