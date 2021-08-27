// 비밀지도
function solution(n, arr1, arr2) {
    var answer = [];

    const tmp1 = [];
    const tmp2 = [];
    const len = Math.max(...arr1).toString(2).length;

    console.log(len)

    for(let i = 0; i< arr1.length; i++){
        tmp1.push (arr1[i].toString(2))
        while(tmp1[i].length !== len){
            tmp1[i] = "0"+tmp1[i]
        }
    }
    console.log(tmp1)

    for(let i = 0; i< arr2.length; i++){
        tmp2.push (arr2[i].toString(2))
        while(tmp2[i].length !== len){
            tmp2[i] = "0"+tmp2[i]
        }
    }
    console.log(tmp2)
    for(let i = 0 ; i < len; i++){
        let val =""
        for(let j = 0 ; j < len; j++){
            tmp1[i][j] == 0 && tmp2[i][j] ==0 ? val += " " : val += "#" 
        }
        answer.push(val);
        val = "";
    }
    console.log(answer)
    return answer;
}

//다른사람 풀이 
function solution(n, arr1, arr2) {
    return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
}

const addZero = (n, s) => {
    return '0'.repeat(n - s.length) + s;
}
//풀이 2  
var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))
// map 사용법
const stringAdd = (arr) => arr.reduce((acc, val) => acc + (val * 1), 0);
 function solution(n, arr1, arr2) {
    return arr1.map((x, idx) => [x, arr2[idx]]).reduce((acc, x) => {
      let se = x.map(y => y.toString(2));
      return [
        ...acc,
        String(stringAdd(se)).padStart(n, "0").replace(/1|2/g, "#").replace(/0/g, " "), 
      ];
    }, []);
  }

//로또




//체육복
function solution(n, lost, reserve) {
    let answer = 0;   
    lost.sort(function(a,b){
       return a-b; 
    });    
    for(let i=0;i<lost.length;i++){
        let index =reserve.indexOf(lost[i]);
        if(index!==-1){ //경우가 있을떄..
            delete reserve[index];
            delete lost[i];
        }
    }
    for(let i=0;i<lost.length;i++){
        
        if(lost[i]!==1&&reserve.indexOf(lost[i]-1)!==-1){ 
            delete reserve[reserve.indexOf(lost[i]-1)];
            delete lost[i];
        }
        else if(reserve.indexOf(lost[i]+1)!==-1){
              delete reserve[reserve.indexOf(lost[i]+1)];
              delete lost[i];
        }
    }
    lost = lost.filter(function(element){
        return lost!==false;
    });
    answer  = n-lost.length;
    return answer;
}


//다른사람 풀이.
function solution(n, lost, reserve) {      
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r-a) <= 1)
        if(!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}
// 다른 풀이 2
function solution(n, lost, reserve) {

    const actualReserve = reserve.filter ( el => (lost.indexOf(el) === -1 ) );
    const actualLost = lost.filter ( el => (reserve.indexOf(el) === -1 ) );

    const set = Array.apply(undefined, new Array(n)).map( (el, i) => (actualLost.indexOf(i+1) === -1) ?  true : false );

    for (let hero of actualReserve ) {
        if (set[hero - 1 - 1] === false) {
            set[hero - 1 - 1] = true;
        } else if (set[hero - 1 + 1] === false) {
            set[hero - 1 + 1] = true;
        }
    }
    console.log(actualReserve, set, set.filter( el => el).length);
    return set.filter( el => el).length
}
