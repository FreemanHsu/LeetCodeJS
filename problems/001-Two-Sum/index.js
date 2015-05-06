var twoSum = module.exports = function(nums, target) {
    var myhash = {};
    var i;
    var goal;
    var index2;
    var result=[];
    for (i=0; i<nums.length; i++){
        myhash[nums[i]] = i;
    }
    for (i=0; i<nums.length; i++){
        goal = target - nums[i];
        if (myhash[goal] && myhash[goal]!=i){
            result.push(i+1, myhash[goal]+1);
            break;
        }
    }
    return result;
};