/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    var pathArr = path.split('/');
    var i;
    var stack = [];
    var res = '/';
    for(i=0;i<pathArr.length;i++){
        if(pathArr[i]==='' || pathArr[i]==='.') continue;
        else if(pathArr[i]==='..'){
            if(stack.length===0) continue;
            else stack.pop();
        }
        else{
            stack.push(pathArr[i]);
        }
    }
    res += stack.join('/');
    return res;
};

//simplifyPath("/a/./b///../c/../././../d/..//../e/./f/./g/././//.//h///././/..///");