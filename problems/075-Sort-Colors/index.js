/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var i = 0;
	var j = nums.length-1;
	var k=0;
	var tmp;
	var swap = function(x,y){
		tmp = nums[x];
		nums[x] = nums[y];
		nums[y] = tmp;
	};
	while(k<nums.length){
		if(nums[k]===0){
			if(k!==i) swap(k,i);
			if(k===i){
				k++;
			}
			i++;
		}
		else if(nums[k]===2){
			if(k>=j) break;
			swap(k,j);
			j--;
		}
		else if(nums[k]===1){
			k++;
		}
	}
};

//sortColors([0]);