/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = module.exports = function(s) {
    var numbers = ['0','1','2','3','4','5','6','7','8','9'];
    var dotCount = 0;
    var eCount = 0;
    var allowSign = true;
    var i=0;
    var j=s.length-1;
    while(s[i]===' ') i++;
    while(s[j]===' ') j--;
    s=s.slice(i,j+1);
    if(s.length === 0) return false;
    for(i=0;i<s.length;i++){
        if(allowSign){
            if(s[i]==='-' || s[i]==='+'){
                if(!s[i+1]) return false;
                allowSign=false;
                continue;
            }
        }
        allowSign=false;
        if(s[i]===' ') return false;
        if(s[i]==='.'){
            if(!(s[i-1] in numbers) && !(s[i+1] in numbers) && s[i+1]!=='e' && s[i+1]!=='E') return false;
            dotCount++;
            if(dotCount>1) return false;
        }
        else if(s[i]==='e' || s[i]==='E'){
            dotCount = 2;
            eCount++;
            if(!(s[i-1] in numbers) && s[i-1]!=='.' || (s[i-1]==='.' && !s[i-2]) || !s[i+1]) return false;
            allowSign = true;
            if(eCount>1) return false;
        }
        else if(s[i] in numbers){
            continue;
        }
        else{
            return false;
        }
    }
    return true;
};