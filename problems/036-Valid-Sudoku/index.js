/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var i;
	var j;
	var k;
	var hash = {};
	var iset = [];
	var jset = [];
	for(i=0;i<9;i++){
		hash = {};
		for(j=0;j<9;j++){
			if(board[i][j]==='.') continue;
			if(board[i][j] in hash) return false;
			else{
				hash[board[i][j]]=true;
			}
		}
	}
	for(i=0;i<9;i++){
		hash = {};
		for(j=0;j<9;j++){
			if(board[j][i]==='.') continue;
			if(board[j][i] in hash) return false;
			else{
				hash[board[j][i]]=true;
			}
		}
	}
	for(k=0;k<9;k++){
		hash={};
		switch (k) {
			case 0: iset=[0,1,2]; jset=[0,1,2];  break;
			case 1: iset=[0,1,2]; jset=[3,4,5];  break;
			case 2: iset=[0,1,2]; jset=[6,7,8];  break;
			case 3: iset=[3,4,5]; jset=[0,1,2];  break;
			case 4: iset=[3,4,5]; jset=[3,4,5];  break;
			case 5: iset=[3,4,5]; jset=[6,7,8];  break;
			case 6: iset=[6,7,8]; jset=[0,1,2];  break;
			case 7: iset=[6,7,8]; jset=[3,4,5];  break;
			case 8: iset=[6,7,8]; jset=[6,7,8];  break;
		}
		for(i in iset){
			for(j in jset){
				if(board[iset[i]][jset[j]]==='.') continue;
				if(board[iset[i]][jset[j]] in hash) return false;
				else{
					hash[board[iset[i]][jset[j]]]=true;
				}
			}
		}
	}
	return true;
};

console.log(isValidSudoku(["....5..1.",".4.3.....",".....3..1","8......2.","..2.7....",".15......",".....2...",".2.9.....","..4......"]));
