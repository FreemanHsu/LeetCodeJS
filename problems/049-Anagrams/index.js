/**
 * @param {string[]} strs
 * @return {string[]}
 */
var anagrams = function(strs) {
    var myhash = {};
	var i;
	var key;
	var res=[];
	for(i=0; i<strs.length; i++){
		key = strs[i].split('').sort().join('');
		if(key in myhash){
			if(myhash[key]===-1){
				res.push(strs[i]);
			}
			else{
				res.push(strs[myhash[key]]);
				res.push(strs[i]);
				myhash[key]=-1;
			}
		}
		else{
			myhash[key]=i;
		}
	}
	return res;
};

//console.log(["cat","tac","dog","god"]);