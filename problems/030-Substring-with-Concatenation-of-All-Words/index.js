/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	if(words.length === 0) return [];
	var wordsNum = words.length;
	var wordLen = words[0].length;
	var windowSize = wordsNum * wordLen;
	if(s.length<windowSize) return [];
	var i;
	var j;
	var cnt;
	var dictOld={};
	var dict={};
	var chunk;
	var offset;
	var res = [];
	for(i=0; i<wordsNum; i++){
		if (dictOld[words[i]]){
			dictOld[words[i]]++;
		}
		else{
			dictOld[words[i]]=1;
		}
	}
	var refreshDict = function(){
		dict={};
		for(var item in dictOld){
			dict[item]=dictOld[item];
		}
	};
	
	for(offset=0; offset<wordLen; offset++){
		i=j=offset;
		refreshDict();
		cnt=0;
		while(j<s.length){
			chunk = s.slice(j,j+wordLen);
			if(chunk in dict){
				if(dict[chunk]>0){
					dict[chunk]--;
					cnt++;
					j+=wordLen;
				}
				else{
					while(dict[chunk]==0){
						if(dictOld[s.slice(i,i+wordLen)])
								dict[s.slice(i,i+wordLen)]++;
						i+=wordLen;
						cnt--;
					}
				}
			}
			else{
				j+=wordLen;
				while(i<j){
					if(dictOld[s.slice(i,i+wordLen)])
							dict[s.slice(i,i+wordLen)]++;
					i+=wordLen;
				}
				cnt = 0;
			}
			if(cnt===wordsNum){
				res.push(i);
			}
		}
	}
	
	return res;
};

console.log(findSubstring("abababab", ["ab","ab","ab"]));
console.log(findSubstring("aaaaaaaaa", ["aa","aa","aa"]));
console.log(findSubstring("barfoothefoobarman", ["foo","bar"]));
//console.log(findSubstring("a", ["a"]));
//console.log(findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", ["fooo","barr","wing","ding","wing"]));