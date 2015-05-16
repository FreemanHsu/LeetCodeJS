Array.prototype.swap = function(i,j){
	var tmp = this[i];
	this[i] = this[j];
	this[j] = tmp;		
};

var permuteUnique = function(nums){
	var arr = nums.sort(function(a,b){return a-b;});
	var res = [];
	res.push(arr.slice(0));
	while(nextpermutation(arr)){
		res.push(arr.slice(0));
	}
	return res;
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

//console.log(permuteUnique([1,2,1,1,0]));