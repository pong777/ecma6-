function solution(record) {
    let arr = [];
    let obj = [];
    let lostName = [];
    let temp = [];
    let temp2 = [];
    let getID = [];
    let nameChange = new Map();
    let result = [];
    let answer = [];

    for (let i in record) {
        temp = {
            key: record[i].split(' ')[0], 
            id: record[i].split(' ')[1],
            name: record[i].split(' ')[2]
        };
        temp2 = {
            id: record[i].split(' ')[1],
            name: record[i].split(' ')[2]
        }
        obj.push(temp);
        lostName = temp2;

        if (obj[i].name == undefined) {
            for (let j = 0; j < obj.length; j++) {
                if (obj[i].id == obj[j].id){
                    lostName = nameChange.get(obj[j].id);
                    break;
                }
            }
            obj[i].name = lostName;
        }
        else {
            nameChange.set(obj[i].id, obj[i].name);
        }

        if (obj[i].key == "Enter") {
            arr.push(["님이 들어왔습니다.", obj[i].id]);
            getID.push(obj[i].id);
        }
        else if (obj[i].key == "Leave") {
            arr.push(["님이 나갔습니다.", obj[i].id]);
            getID.push(obj[i].id);
        }
        else if (obj[i].key == "Change") {
            arr.push(["Change", obj[i].id]);
            getID.push(obj[i].id);
        }
    }

    for (let i in arr) {
        if (arr[i][1] == getID[i]) {
            if (arr[i][0].indexOf('들어왔습니다.') > -1) {
                arr[i][1] = nameChange.get(arr[i][1]) + "님이 들어왔습니다.";
            }
            else if (arr[i][0].indexOf('나갔습니다.') > -1) {
                arr[i][1] = nameChange.get(arr[i][1]) + "님이 나갔습니다.";
            }
        }
        result.push(arr[i][1]);
    }

    for (let i = 0; i < result.length; i++) {
        if (result[i].indexOf('.') > -1) {
            answer.push(result[i]);    
        }
    }

    return answer;
}

console.log(solution(["Enter uid1234 Muzi", 
                      "Enter uid4567 Prodo",
                      "Leave uid1234",
                      "Enter uid1234 Prodo",
                      "Change uid4567 Ryan"]));

console.log(solution(["Enter uid1234 Muzi", 
                      "Enter uid4567 Prodo",
                      "Enter uid6789 Muzi",
                      "Leave uid1234",
                      "Change uid6789 Neo", 
                      "Leave uid6789", 
                      "Enter uid123.4 Prodo",
                      "Change uid4567 Ryan",
                      "Enter uid6789 Con",
                      "Change uid6789 Muzi",
                      "Enter @!#$@ Con"]));