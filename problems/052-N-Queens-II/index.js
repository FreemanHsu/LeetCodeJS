/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    if(n===1) return 1;
    var cols = [];
    var count = 0;
    var hash = {};
    var i;
    var j;
    var key;
    var next;
    for(i=0;i<n;i++) cols.push(i);
    while(nextpermutation(cols)){
        hash = {};
        next = false;
        for(j=0; j<n; j++){
            key = j+cols[j];
            if(key in hash) {
                next=true;
                break;
            }
            hash[key] = true;
        }
        if(next)continue;
        hash = {};
        for(j=0; j<n; j++){
            key = j-cols[j]; 
            if(key in hash){
                next = true;
                break;
            }
            hash[key] = true;
        }
        if(next)continue;
        count++;
    }
    return count;
};

Array.prototype.swap = function(i,j){
	var tmp = this[i];
	this[i] = this[j];
	this[j] = tmp;		
};


var nextpermutation = function(nums){
	var n = nums.length;
	var pivot;
	var partition;
	var i = n-1;
	var j;
	while(i>0){
		if(nums[i]>nums[i-1]){
			pivot = i-1;
			break;
		}
		i--;
	}
	if(i===0) return false;
	for(i=n-1;i>0;i--){
		if(nums[i]>nums[pivot]){
			partition = i;
			break;
		}
	}
	nums.swap(pivot,partition);
	i=pivot+1;
	j=n-1;
	while(i<j){
		nums.swap(i,j);
		i++;
		j--;
	}
	return true;
};

//console.log(totalNQueens(1));