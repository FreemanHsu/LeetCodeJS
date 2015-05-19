/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = module.exports = function(x) {
    if(x<=0) return 0;
    if(x===1) return 1;
    var low = 1;
    var high = Math.floor(x/2);
    while(low!==high){
        if(high * high > x){
            high = low + Math.floor((high-low)/2);
        }
        else if(high * high < x){
            low = high;
            high = high * 2 - 1;
        }
        else{
            break;
        }
    }
    return high;
};