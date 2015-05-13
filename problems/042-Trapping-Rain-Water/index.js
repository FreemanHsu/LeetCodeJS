/**
 * @param {number[]} height
 * @return {number}
 */
var trap = module.exports = function(height) {
    var n = height.length;
    var i;
    var peak;
    var heightest=0;
    var res=0;
    for(i=0;i<n;i++){
        if(height[i]>height[heightest]) heightest=i;
    }
    for(i=0,peak=0;i<heightest;i++){
        if(height[i]>=peak) peak=height[i];
        else{
            res+= (peak-height[i]);
        }
    }
    for(i=n-1,peak=0;i>heightest;i--){
        if(height[i]>=peak) peak=height[i];
        else{
            res+= (peak-height[i]);
        }
    }
    return res;
};