function solution(record) {
    let dict = {};
    let answer = [];
    let tempList = [];
    record.forEach(function(item, idx){
        let arr = item.split(' ');
            
        if (arr[0] === "Enter" || arr[0] === "Change") {
            dict[arr[1]] = arr[2];
        }           
  
        if (arr[0] === "Enter") {
            tempList.push(['님이 들어왔습니다.',arr[1]]);
        }            
        else if (arr[0] === "Leave") {
            tempList.push(['님이 나갔습니다.',arr[1]]);
        }     
    });

    tempList.forEach(function(item){    
        answer.push(dict[item[1]] + item[0]); 
    });
    
    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"])
//["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
