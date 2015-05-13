/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

var isValidSudoku = function(board, row, col) {
    var i;
    var j;
    var diag = [0,0,0,3,3,3,6,6,6];
    for(i=0;i<9;i++){
        if(i!=row){
            if(board[i][col]===board[row][col]) return false;
        }
    }  
    for(j=0;j<9;j++){
        if(j!=col){
            if(board[row][j]===board[row][col]) return false;
        }
    }
    for(i=diag[row]; i<diag[row]+3; i++){
        for(j=diag[col]; j<diag[col]+3; j++){
            if(i!=row&&j!=col){
                if(board[i][j]===board[row][col]) return false;
            }
        }
    }
    return true;
};

var solveSudokuWorker = function(board) {
    var i;
    var j;
    var k;
    for(i=0;i<9;i++){
        for(j=0;j<9;j++){
            if(board[i][j]!=='.') continue;
            else{
                for(k=1;k<10;k++){
                    board[i][j]=''+k;
                    if(isValidSudoku(board,i,j)){
                        if(solveSudokuWorker(board)) return true;
                    }
                    board[i][j]='.';
                }
                return false;
            }
        }
    }
    return true;
};

var solveSudoku = function(board){
    solveSudokuWorker(board);
};

var b = [[ '.', '.', '9', '7', '4', '8', '.', '.', '.' ],
[ '7', '.', '.', '.', '.', '.', '.', '.', '.' ],
[ '.', '2', '.', '1', '.', '9', '.', '.', '.' ],
[ '.', '.', '7', '.', '.', '.', '2', '4', '.' ],
[ '.', '6', '4', '.', '1', '.', '5', '9', '.' ],
[ '.', '9', '8', '.', '.', '.', '3', '.', '.' ],
[ '.', '.', '.', '8', '.', '3', '.', '2', '.' ],
[ '.', '.', '.', '.', '.', '.', '.', '.', '6' ],
[ '.', '.', '.', '2', '7', '5', '9', '.', '.' ]];

solveSudoku(b);
console.log(b);
