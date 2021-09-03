function solution(game_board, table) {
    let result = [];

    
    for (let i = 0; i < table[0].length; i++) {
        result.push([]);
    }
    // 90도 돌렸을 때 result배열 만들기
    for (let j = 0; j < table[0].length; j++) {
        for (let i = 0; i < table.length; i++) {
            // table의 세로방향 요소들을 result의 가로방향 요소들로 import
            result[j].push(table[i][j])
        }
        // result의 요소들을 reverse
        result[j].reverse();
    }
    for (let i = 0; i < result.length; i++) {
        table[i] = result[i];
    }




    // console.log(table[0]
    //    + '\n' + table[1]
    //    + '\n' + table[2]
    //    + '\n' + table[3]
    //    + '\n' + table[4]
    //    + '\n' + table[5]);

    return table.flat();
}

console.log(solution(
    [
    [1,1,0,0,1,0],
    [0,0,1,0,1,0],
    [0,1,1,0,0,1],
    [1,1,0,1,1,1],
    [1,0,0,0,1,0],
    [0,1,1,1,0,0]],
    [
    [1,0,0,1,1,0],
    [1,0,1,0,1,0],
    [0,1,1,0,1,1],
    [0,0,1,0,0,0],
    [1,1,0,1,1,0],
    [0,1,0,0,0,0]]
    ))