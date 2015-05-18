/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	  var current = 1;
	  var total = n*n;
	  var i=0;
	  var j=0;
	  var boundaryU=1;
	  var boundaryR=n-1;
	  var boundaryD=n-1;
	  var boundaryL=0;
	  var dir = 'r';
	  var mat=[];
	  var k;
	  for(k=0;k<n;k++){
		  mat[k]=[];
	  }
	  while(current <= total){
		  mat[i][j]=current;
		  if(dir==='r'){
			  if(j<boundaryR) j++;
			  else{
				  i++;
				  dir='d';
				  boundaryR--;
			  }
		  }
		  else if(dir==='d'){
			  if(i<boundaryD) i++;
			  else{
				  j--;
				  dir='l';
				  boundaryD--;
			  }
		  }
		  else if(dir==='l'){
			  if(j>boundaryL) j--;
			  else{
				  i--;
				  dir='u';
				  boundaryL++;
			  }
		  }
		  else if(dir==='u'){
			  if(i>boundaryU) i--;
			  else{
				  j++;
				  dir='r';
				  boundaryU++;
			  }
		  }
		  current++;
	  }
	  return mat;
};

//console.log(generateMatrix(1));