/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    var i;
    var j=0;
    var pos=0;
    if(m!==0){
        for(i=m-1;i>=0;i--){
            nums1[i+n] = nums1[i];
        }
        i=n;
        while(i<m+n && j<n){
            if(nums1[i]<=nums2[j]){
                nums1[pos] = nums1[i];
                i++;
            }
            else{
                nums1[pos] = nums2[j];
                j++;
            }
            pos++;
        }
    }
    while(j<n){
        nums1[pos]=nums2[j];
        j++;
        pos++;
    }
};