var firstMissingPositive = function(nums) {
    var len = nums.length;
    if(len===0) return 1;
    var i=0;
    var tmp;
    var swaptmp;
    var missing = len+1;
    var validMax = false;
    while(i<len){
        tmp = nums[i];
        if(tmp===i) i++;
        else{
            if(tmp<=0 || tmp>=len){
                if(tmp===len) validMax=true;
                nums[i]=0;
                if(i!==0) missing = Math.min(missing,i);
                i++;
            }
            else{
                if(nums[i]!==nums[tmp]){
                    swaptmp = nums[i];
                    nums[i] = nums[tmp];
                    nums[tmp] = swaptmp;
                    if(i>tmp && nums[tmp]===tmp && tmp<=missing){
                        missing=len+1;
                        i=tmp+1;
                    }
                }
                else{
                    nums[i]=0;
                }
            }
        }
    }
    if(missing===len+1 && validMax===false){
        missing=len;
    }
    return missing;
};