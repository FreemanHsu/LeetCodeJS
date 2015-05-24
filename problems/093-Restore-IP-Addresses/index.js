/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    var res = [];
    
    var helper = function(cur, index){
        if(index===s.length){
            if(cur.length === 4){
                res.push(cur.join("."));
            }
            else{
                return;
            }
        }
        if(cur[cur.length-1]!=='0' && Number(cur[cur.length-1]+s[index])<=255){
            cur[cur.length-1] += s[index];
            helper(cur, index+1);
            cur[cur.length-1] = cur[cur.length-1].slice(0,-1);
        }
        if(cur.length<4){
            cur.push(s[index]);
            helper(cur, index+1);
            cur.pop();
        }
    };
    
    helper([s[0]], 1);
    
    return res;
};

//console.log(restoreIpAddresses("25525511"));