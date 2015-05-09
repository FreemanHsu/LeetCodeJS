/**
 * @param {number[]} height
 * @return {number}
 */
 
var maxArea = module.exports = function(height) {
	var i=0;
	var j=height.length-1;
	var maxArea = 0;
	var tmpArea = 0;
	while(i<j){
		tmpArea = Math.min(height[i],height[j])*(j-i);
		maxArea = Math.max(tmpArea, maxArea);
		if(height[i]>height[j]){
			j--;
		}
		else{
			i++;
		}
	}
	return maxArea;
}; 
 
 
// Naive One exceeds time limit
//var maxArea = module.exports = function(height) {
//  var i;
//	var width;
//	var maxArea = 0;
//	var selectedHeight = 0;
//	for (width = 1; width<height.length; width++){
//		selectedHeight = 0;
//		for(i=0; i+width<height.length; i++){
//			selectedHeight= Math.max(selectedHeight, Math.min(height[i], height[i+width]));
//		}
//		maxArea = Math.max(maxArea, width*selectedHeight);
//	}
//	return maxArea;
//};