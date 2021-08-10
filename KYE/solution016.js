function solution(board, moves) {
    let basket = [];
    let result = 0;

    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i]-1] != 0) {
                if (board[j][moves[i]-1] == basket[basket.length-1]) {
                    basket.pop();
                    result += 2;
                }
                else {
                    basket.push(board[j][moves[i]-1]);
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    
    return result;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));
