/**
 * @param {number[]} nums
 * @return {number}
 *
 * Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 Do not allocate extra space for another array, you must do this in place with constant memory.
 For example, Given input array nums = [1,1,2],
 Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.

 *翻譯
   給一個排序過的陣列，移除重複的值，每個元素只能留下一個。
   不能使用其他的陣列空間，必需在本來的陣列中操作。
   範例： [1,1,2] 去除重複的1之後，剩下[1,2]，回傳陣列的長度2。

 *思路
   這跟 LeetCode 283. Move Zeroes 很像，差別在於283移除的是0，這題移除的是重複的數字。
   使用一個count來紀錄有多少不重複的元素。
   當陣列中下一個元素與當前的元素重複，就跳過當前的元素，不重複就放在陣列中。

 *
 */



var removeDuplicates = function(nums) {

  if(nums.length == 0){
    return 0;
  }

  var countNumber = 0;

  for(var i = 1; i < nums.length; i++){
    if(nums[countNumber] != nums[i]){
      nums[++countNumber] = nums[i];
    }
  }

  const result = countNumber + 1;

  return result;
};

var nums = [1,2,3,4,5,5,5,6];
var countResult = removeDuplicates(nums);

console.log(`countResult ::::: ${countResult}`);