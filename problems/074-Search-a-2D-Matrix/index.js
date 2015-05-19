/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    var m = matrix.length;
    var n = matrix[0].length;
    var low = 0;
    var high = m*n-1;
    var mid;
    var code;
    var decode = function(index){
        var p=Math.floor(index/n);
        var q=index%n;
        return [p,q]
    };
    
    while(low<=high){
        mid = Math.floor((low+high)/2);
        code = decode(mid);
        if(matrix[code[0]][code[1]] === target) return true;
        else if(matrix[code[0]][code[1]] < target){
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return false;
};