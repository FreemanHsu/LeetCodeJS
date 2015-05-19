/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    var groups = [];
    var subgroup = [];
    var sublength = 0;
    var i=0;
    var res;
    while(i<words.length){
        if(sublength === 0){
            subgroup.push(words[i]);
            sublength += words[i].length;
            i++;
        }
        else{
            if(sublength + words[i].length + 1 > maxWidth){
                sublength = 0;
                groups.push(subgroup.slice(0));
                subgroup.length=0;
            }
            else{
                subgroup.push(words[i]);
                sublength = sublength + words[i].length + 1;
                i++;
            }
        }
    }
    if(sublength !== 0 || subgroup[0]===''){
        groups.push(subgroup.slice(0));
    }
    res = groups.map(function(item,index){
        var line = '';
        var i;
        var blanks;
        var basic;
        var left;
        if(index===groups.length-1){
            for(i=0;i<item.length;i++){
                if(i!==0) line+=' ';
                line+=item[i];
            }
            line += blankProducer(maxWidth-line.length);
        }
        else{
            if(item.length===1){
                line = line + item[0] + blankProducer(maxWidth-item[0].length);
            }
            else{
                var holes = [];
                blanks = 0;
                for(i=0; i<item.length; i++){
                    blanks += item[i].length;
                }
                blanks = maxWidth - blanks;
                basic = Math.floor(blanks/(item.length-1));
                left = blanks%(item.length-1);
                for(i=0;i<item.length-1;i++){
                    holes[i] = basic;
                    if(i<left) holes[i]++;
                }
                for(i=0;i<item.length;i++){
                    line += item[i];
                    if(i!==item.length-1){
                        line += blankProducer(holes[i]);   
                    }
                }
            }
        }
        return line;
    });
    return res;
};

var blankProducer = function(n){
    var i;
    var blanks = '';
    for(i=0;i<n;i++) blanks+=' ';
    return blanks;
};

console.log(fullJustify([""],0));
console.log(fullJustify([""],2));
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));