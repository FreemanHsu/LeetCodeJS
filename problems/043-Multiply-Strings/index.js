/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = module.exports = function(num1, num2) {
      if(num1.length===1 || num2.length===1){
          if(Number(num1)===0||Number(num2)===0) return '0';
          if(Number(num1)===1) return num2;
          if(Number(num2)===1) return num1;
      }
      var a=[];
      var b=[];
      var i;
      var j;
      var tmp;
      var m;
      var n;
      var carry = 0;
      var tsum = 0;
      i=num1.length;
      var resReversed=['0'];
      while(i>0){
            a.push(Number(num1.slice(Math.max(i-4,0),i)));
            i-=4;
      }
      i=num2.length;
      while(i>0){
            b.push(Number(num2.slice(Math.max(i-4,0),i)));
            i-=4;
      }
      for(i=0;i<a.length;i++){
            for(j=0;j<b.length;j++){
                  carry=0;
                  tmp = ''+a[i]*b[j]+zeroYielding(i+j);
                  m=0;
                  n=tmp.length-1;
                  while(n>=0){
                        tsum = Number(resReversed[m]||0)+Number(tmp[n])+carry;
                        if(tsum>=10){
                              tsum-=10;
                              carry=1;
                        }
                        else{
                              carry=0;
                        }
                        resReversed[m]=''+tsum;
                        m++;
                        n--;
                  }
                  while(carry){
                        tsum = Number(resReversed[m]||0) + carry;
                        if(tsum>10){
                              tsum-=10;
                              carry=1;
                        }
                        else{
                              carry=0;
                        }
                        resReversed[m]=''+tsum;
                        m++;
                  }
            }
      }
      while(resReversed[resReversed.length-1]=='0' &&  resReversed.length>1) resReversed.pop();
      return resReversed.reverse().join('');
};

var zeroYielding = function(n){
      var res='';
      var i;
      for(i=0;i<n*4;i++){
            res+='0';
      }
      return res;
};

//console.log(multiply("32014","69"));