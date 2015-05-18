/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0]===1) return 0;
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    if(m===1 & n===1) return 1;
    if(obstacleGrid[m-1][n-1]===1) return 0;
    var i;
    var j;
    for(i=1;i<m;i++){
        if(obstacleGrid[i][0]===1){
           break;
        }
        obstacleGrid[i][0]=-1;
    }
    for(j=1;j<n;j++){
        if(obstacleGrid[0][j]===1){
            break;
        }
        obstacleGrid[0][j]=-1;
    }
    for(i=1;i<m;i++){
        for(j=1;j<n;j++){
            if(obstacleGrid[i][j]===1) continue;
            if(obstacleGrid[i][j-1]===1 && obstacleGrid[i-1][j]===1){
                obstacleGrid[i][j]=0;
            }
            else if(obstacleGrid[i][j-1]===1 || obstacleGrid[i-1][j]===1){
                obstacleGrid[i][j]=Math.min(obstacleGrid[i][j-1],obstacleGrid[i-1][j]);
            }
            else{
                obstacleGrid[i][j]=obstacleGrid[i][j-1]+obstacleGrid[i-1][j];
            }
        }
    }
    return -obstacleGrid[m-1][n-1];
};