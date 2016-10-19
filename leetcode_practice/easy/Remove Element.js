var removeElement = function(nums, val) {
  if(nums.length == 0) {return nums.length};
  if(nums.indexOf(val) < 0) {return nums.length};  //array.indexOf(item,start[optioal])  會印出指定元素(val)在陣列中的位址

  var count = 0;

  for(var i = 0; i < nums.length ; i++){
    if( nums[i] != val){

      nums[count] = nums[i]; //為使陣列位址相同，所以此為count值先比完後加＋1，和 Remove Duplicates from Sorted Array 的做法不同
                             //也可偷懶寫成 nums[count++] = nums[i]
      count += 1;
    }
  }
  return count;
};

var nums = [1, 2, 3 ,4];
var val = 4;

const result = removeElement(nums, val);

console.log(`${result}`);


/*給一個陣列跟一個數字，移除陣列中所有跟數字相同的元素。
 不可以使用另外的陣列來處理，全部的操作都要在同一個陣列中。
 陣列中的元素可以隨意排序。
 範例：
 nums = [3, 1, 2, 3, 2]， val = 3
 應該要return 陣列的長度3，因為裡面的3被移除後剩[1,2,2].*/