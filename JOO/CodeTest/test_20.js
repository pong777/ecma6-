//참조
//https://jjnooys.medium.com/javascript-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%9C%84%ED%81%B4%EB%A6%AC-%EC%B1%8C%EB%A6%B0%EC%A7%80-3%EC%A3%BC%EC%B0%A8-%ED%8D%BC%EC%A6%90-%EC%A1%B0%EA%B0%81-%EC%B1%84%EC%9A%B0%EA%B8%B0-b43fda2d5413


function solution(game_board, table) {
    const length = game_board.length;
  
    function getString(block) {
      return block.reduce((a, v) => {
        a.push(v.join(""));
        return a;
      }, []).join(',');
    }
  
    function rotate(block) {
      const shape = [];
  
      let blockCopy = block.map((v) => [...v]);
      let count = 0;
      while (count < 3) {
        const col = blockCopy.length;
        const row = blockCopy[0].length;
  
        const newBlock = new Array(row).fill().map((v) => new Array(col).fill(0));
  
        for (let i = 0; i < col; i++) {
          for (let j = 0; j < row; j++) {
            newBlock[j][col - 1 - i] = blockCopy[i][j];
          }
        }
  
        count++;
        shape.push(getString(newBlock));
        blockCopy = newBlock.slice();
      }
  
      return shape;
    }
  
    function findBlocks(board, col, row, number) {
      const coord = [];
      let count = 1;
  
      board[col][row] = -1;
      coord.push([col, row]);
  
      function recursive(board, col, row, number) {
        // top
        const top = col - 1;
        if (top >= 0 && board[top][row] === number) {
          coord.push([top, row]);
          count++;
          board[top][row] = -1;
          
          // 다음 인접한 top 탐색
          recursive(board, top, row, number);
        }
        // bottom
        const bottom = col + 1;
        if (bottom < length && board[bottom][row] === number) {
          coord.push([bottom, row]);
          count++;
          board[bottom][row] = -1;
          
          recursive(board, bottom, row, number);
        }
  
        // right
        const right = row + 1;
        if (right < length && board[col][right] === number) {
          coord.push([col, right]);
          count++;
          board[col][right] = -1;
          
          recursive(board, col, right, number);
        }
  
        // left
        const left = row - 1;
        if (left >= 0 && board[col][left] === number) {
          coord.push([col, left]);
          count++;
          board[col][left] = -1;
          
          recursive(board, col, left, number);
        }
      }
  
      recursive(...arguments);
      const rows = coord.map((v) => v[1]);
      const cols = coord.map((v) => v[0]);
  
      const min_row = Math.min(...rows);
      const max_row = Math.max(...rows);
      const min_col = Math.min(...cols);
      const max_col = Math.max(...cols);
  
      const block = board
        .slice(min_col, max_col + 1)
        .map((v, i) =>
          v
            .slice(min_row, max_row + 1)
            .map((x, j) =>
              coord.find((v) => v[0] === min_col + i && v[1] === min_row + j)
                ? count
                : 0
            )
        );
  
      return block;
    }
  
    const spaces = [];
    const blocks = [];
    
    for (let cols = 0; cols < length; cols++) {
      for (let rows = 0; rows < length; rows++) {
        
        if (game_board[cols][rows] === 0) {
          spaces.push(getString(findBlocks(game_board, cols, rows, 0)));
        }
        
        if (table[cols][rows] === 1) {
          const block = findBlocks(table, cols, rows, 1);
          blocks.push([getString(block), ...rotate(block)]);
        }
      }
    }
  
    const answer = blocks.reduce((acc, block) => {
      const fillIndex = spaces.findIndex((space) =>
        block.find((b) => b === space)
      );
  
       if(fillIndex > -1) {
        return acc + (spaces.splice(fillIndex, 1)[0].match(/[1|2|3|4|5|6]/)[0]) * 1;
      }
  
      return acc;
    }, 0);
  
    return answer;
  }



consonle.log(solution([[1,1,0,0,1,0],[0,0,1,0,1,0],[0,1,1,0,0,1],[1,1,0,1,1,1],[1,0,0,0,1,0],[0,1,1,1,0,0]],[[1,0,0,1,1,0],[1,0,1,0,1,0],[0,1,1,0,1,1],[0,0,1,0,0,0],[1,1,0,1,1,0],[0,1,0,0,0,0]]))//14

consonle.log(solution([[0,0,0],[1,1,0],[1,1,1]],[[1,1,1],[1,0,0],[0,0,0]]))//0