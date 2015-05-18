/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
	var n = grid[0].length;
	var i;
	var j;
	for(i=1;i<m;i++) grid[i][0]+=grid[i-1][0];
	for(j=1;j<n;j++) grid[0][j]+=grid[0][j-1];
	for(i=1;i<m;i++){
		for(j=1;j<n;j++){
			grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
		}
	}
	return grid[m-1][n-1];
};