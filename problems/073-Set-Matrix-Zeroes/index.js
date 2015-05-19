/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// Space O(m+n)
//var setZeroes = function(matrix) {
//    var m = matrix.length;
//    var n = matrix[0].length;
//    var clearRow = function(row){
//        var k;
//        for(k=0;k<n;k++){
//            matrix[row][k] = 0;
//        }
//    };
//    
//    var clearCol = function(col){
//        var k;
//        for(k=0;k<m;k++){
//            matrix[k][col] = 0;
//        }
//    };
//    var i;
//    var j;
//    var hashRow = {};
//    var hashCol = {};
//    for(i=0;i<m;i++){
//        for(j=0;j<n;j++){
//            if(matrix[i][j]===0){
//                hashRow[i] = true;
//                hashCol[j] = true;
//            }
//        }
//    }
//    console.log(hashRow, hashCol);
//    for(i in hashRow){
//        clearRow(i);
//    }
//    for(j in hashCol){
//        clearCol(j);
//    }
//};

// Space O(1)
var setZeroes = function(matrix) {
    var m = matrix.length;
    var n = matrix[0].length;
    
    var clearRow = function(row){
        var k;
        for(k=0;k<n;k++){
            matrix[row][k] = 0;
        }
    };
    
    var clearCol = function(col){
        var k;
        for(k=0;k<m;k++){
            matrix[k][col] = 0;
        }
    };
    
    var i;
    var j;
    var flagRow0 = false;
    var flagCol0 = false;
    for(j=0;j<n;j++){
        if(matrix[0][j]===0){
            flagRow0 = true;
            break;
        }
    }
    for(i=0;i<m;i++){
        if(matrix[i][0]===0){
            flagCol0 = true;
            break;
        }
    }
    for(i=1;i<m;i++){
        for(j=1;j<n;j++){
            if(matrix[i][j]===0){
                matrix[0][j] = 0;
                matrix[i][0] = 0;
            }
        }
    }
    
    for(j=1;j<n;j++){
        if(matrix[0][j]===0) clearCol(j);
    }
    
    for(i=1;i<m;i++){
        if(matrix[i][0]===0) clearRow(i);
    }
    
    if(flagRow0) clearRow(0);
    if(flagCol0) clearCol(0);
    
};