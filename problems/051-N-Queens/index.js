/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    var board = [];
	var state = [];
	var i;
	var j;
	for(i=0;i<n;i++){
		board[i] = [];
		state[i] = [];
		for(j=0;j<n;j++){
			board[i][j]='.';
			state[i][j]=0;
		}
	}
	var res = [];
	helper(res,board,state,0,n);
	return res;
};

var helper = function(res,board,state,level,n){
	if(level === n){
		res.push(board.map(function(item,index){
			return item.join('');
		}));
		return;
	}
	var i=level;
	var j;
	var k;
	var list = getValidTile(state,i,n);
	if(list.length === 0) return;
	for(k=0;k<list.length;k++){
		j=list[k];
		placeQueen(board,state,i,j,n);
		helper(res,board,state,level+1,n);
		removeQueen(board,state,i,j,n);
	}
};

var getValidTile=function(state,row,n){
	var i;
	var validList = [];
	for(i=0;i<n;i++){
		if(state[row][i]===0){
			validList.push(i);
		}
	}
	return validList;
};

var placeQueen=function(board,state,row,col,n){
	var i;
	var j;
	board[row][col]='Q';
	state[row][col]=-1;
	for(i=0;i<n;i++){
		if(i!==row){
			state[i][col]++;
		}
	}
	for(j=0;j<n;j++){
		if(j!==col){
			state[row][j]++;
		}
	}
	i=row-1;j=col-1;
	while(i>=0 && j>=0){
		state[i][j] ++;
		i--;j--;
	}
	i=row+1;j=col+1;
	while(i<n && j<n){
		state[i][j]++;
		i++;j++;
	}
	i=row-1;j=col+1;
	while(i>=0 && j<n){
		state[i][j]++;
		i--;j++;
	}
	i=row+1;j=col-1;
	while(i<n && j>=0){
		state[i][j]++;
		i++;j--;
	}
};

var removeQueen = function(board,state,row,col,n){
	var i;
	var j;
	board[row][col]='.';
	state[row][col]=0;
	for(i=0;i<n;i++){
		if(i!==row){
			state[i][col]--;
		}
	}
	for(j=0;j<n;j++){
		if(j!==col){
			state[row][j]--;
		}
	}
	i=row-1;j=col-1;
	while(i>=0 && j>=0){
		state[i][j]--;
		i--;j--;
	}
	i=row+1;j=col+1;
	while(i<n && j<n){
		state[i][j]--;
		i++;j++;
	}
	i=row-1;j=col+1;
	while(i>=0 && j<n){
		state[i][j]--;
		i--;j++;
	}
	i=row+1;j=col-1;
	while(i<n && j>=0){
		state[i][j]--;
		i++;j--;
	}
};

//console.log(solveNQueens(8).length);