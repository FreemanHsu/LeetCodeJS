/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    var n = matrix.length;
	if(n===0) return [];
	var m = matrix[0].length;
	var size = m*n;
	var res = [];
	var count = 0;
	var i=0;
	var j=0;
	var dir = 'r';
	var l=0;
	var u=1;
	while(count<size){
		res.push(matrix[i][j]);
		count++;
		if(dir==='r'){
			if(j<m-1) j++;
			else{
				i++;
				dir = 'd';
				m-=1;
			}
		}
		else if(dir==='d'){
			if(i<n-1) i++;
			else{
				j--;
				dir = 'l';
				n-=1;
			}
		}
		else if (dir==='l'){
			if(j>l) j--;
			else{
				i--;
				dir = 'u';
				l++;
			}
		}
		else if (dir==='u'){
			if(i>u) i--;
			else{
				j++;
				dir = 'r';
				u++;
			}
		}
	}
	return res;	
};

//console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]));