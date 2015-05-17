/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var n = matrix.length;
	rotateHelper(matrix,0,n);
};

var rotateHelper = function(matrix,base,m){
	var j;
	var tmp;
	for(j=0;j<m-1;j++){
		tmp = matrix[base][base+j];
		matrix[base][base+j]=matrix[base+m-j-1][base];
		matrix[base+m-j-1][base]=matrix[base+m-1][base+m-j-1];
		matrix[base+m-1][base+m-j-1]=matrix[base+j][base+m-1];
		matrix[base+j][base+m-1]=tmp;
	}
	if(m>=3){
		rotateHelper(matrix,base+1,m-2);
	}
};

//var mat = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
//var mat = [[1,2],[3,4]];
//rotate(mat);
//console.log(mat);