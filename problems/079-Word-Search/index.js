/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(word.length===0) return true;
    var m = board.length;
    var n = board[0].length;
    if(m*n<word.length) return false;
    var map = [];
    var i;
    var j;
    for(i=0;i<m;i++){
        map[i] = [];
        for(j=0;j<n;j++){
            map[i][j] = false;
        }
    }
    var helper = function(curX, curY, index){
          if(index === word.length) return true;
          if(curY>0 && map[curX][curY-1]===false && board[curX][curY-1]===word[index]){
              map[curX][curY-1] = true;
              if(helper(curX,curY-1, index+1)) return true;
              map[curX][curY-1] = false;
          }
          if(curX>0 && map[curX-1][curY]===false && board[curX-1][curY]===word[index]){
              map[curX-1][curY] = true;
              if(helper(curX-1,curY, index+1)) return true;
              map[curX-1][curY] = false;
          }
          if(curY+1<n && map[curX][curY+1]===false && board[curX][curY+1]===word[index]){
              map[curX][curY+1] = true;
              if(helper(curX,curY+1, index+1)) return true;
              map[curX][curY+1] = false;
          }
          if(curX+1<m && map[curX+1][curY]===false && board[curX+1][curY]===word[index]){
              map[curX+1][curY] = true;
              if(helper(curX+1,curY, index+1)) return true;
              map[curX+1][curY] = false;
          }
          return false;
    };
	
    for(i=0;i<m;i++){
        for(j=0;j<n;j++){
            if(board[i][j] === word[0]){
                map[i][j] = true;
                if(helper(i,j,1)) return true;
                map[i][j] = false;
            }
        }
    }
    
    return false;
};


//console.log(exist(["ABCE","SFCS","ADEE"], "ABCB"));