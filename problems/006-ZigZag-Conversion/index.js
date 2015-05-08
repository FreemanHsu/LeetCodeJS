/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert =  module.exports = function(s, numRows) {
    if (numRows === 1){
        return s;
    }
    var resArray = [];
    var N = numRows;
    var step = 2*(N-1);
    var nextstep;
    var i;
    var j;
    for (i=0; i<N; i++){
        j = i;
        nextstep = step - 2*i;
        if(nextstep === 0) nextstep = step;
        while(j<s.length){
            resArray.push(s[j]);
            j += nextstep;
            nextstep = step - nextstep;
            if(nextstep === 0) nextstep = step;
        }
    }
    return resArray.join('');
};