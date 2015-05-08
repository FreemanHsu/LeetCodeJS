/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = module.exports = function(str) {
    var INTMIN = Math.pow(2,31);
    var INTMAX = INTMIN-1;
    var i;
    var res=0;
    var blank = /\s/;
    var num = /\d/;
    var sign = /\+|\-/;
    var state = 0;
    var positive = 1;
    for (i=0; i<str.length; i++){
        if (state === 0){
            if (blank.test(str[i])){
                continue;
            } 
            else if (sign.test(str[i])){
                state = 2;
                positive = str[i]=='+'?1:-1;
            }
            else if (num.test(str[i])){
                state = 2;
                res = Number(str[i]);
            }
            else{
                return 0;
            }
        }
        else if (state === 1){
            if (sign.test(str[i])){
                positive = str[i]=='+'?1:-1;
            }
            else if (num.test(str[i])){
                res = Number(str[i]);
            }
            else{
                return 0;
            }
        	state = 2;
        }
        else if(state === 2){
            if (num.test(str[i])){
                res = res*10 + Number(str[i]);
                if (res > INTMAX && positive === 1){
                    return INTMAX;
                }
                if (res > INTMIN && positive === -1){
                    return -INTMIN;
                }
            }
            else{
                return res*positive;
            }
        }
    }
    return res*positive;
};