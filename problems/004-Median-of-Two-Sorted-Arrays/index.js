/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = module.exports = function(nums1, nums2) {
    var i = 0;
    var j = 0;
    var m = nums1.length;
    var n = nums2.length;
    var target1;
    var target2;
    var mergedArray = [];
    if ((m+n)%2==0){
        target2 = (m+n)/2;
        target1 = target2 - 1;
    }
    else{
        target1 = target2 = Math.floor((m+n)/2);
    }
    while(i<m && j<n){
        if (nums1[i]<nums2[j]){
            mergedArray.push(nums1[i]);
            i++;
        }
        else{
            mergedArray.push(nums2[j]);
            j++;
        }
    }
    if (i==m){
        mergedArray = mergedArray.concat(nums2.slice(mergedArray.length-m,n));
    }
    else if(j==n){
        mergedArray = mergedArray.concat(nums1.slice(mergedArray.length-n,m));
    }
    var result = (mergedArray[target1]+mergedArray[target2])/2;
    return result;
};