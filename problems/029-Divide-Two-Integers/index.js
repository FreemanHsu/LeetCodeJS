/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
 
var INTMAX = Math.pow(2,31)-1;
var INTMIN = -INTMAX-1;
    
var divide = module.exports = function(dividend, divisor) {
    if(divisor === 0) return INTMAX;
    if(dividend === INTMIN && divisor===-1) return INTMAX;
    if(divisor === 1) return dividend;
    if(divisor === -1) return -dividend;
    var sign = 1;
    var a = dividend;
    var b = divisor;
    var c;
    var i;
    var res=0;
    if(a < 0){
        a = -a;
        sign = -sign;
    }
    if(b <0){
        b = -b;
        sign = -sign;
    }
    c=b;
    i=0;
    if(a>INTMAX){
        a-=b;
        res++;
    }
    var boudary = a>>1;
    while(boudary>=c){
        if(c==0){
            break;
        }
        c=c<<1;
        i++;
    }
    
    while(a>=b){
        a-=c;
        res+=1<<i;
        while(a<c){
            c=c>>1;
            i--;
        }
    }
    
    return sign>0?res:-res;
};