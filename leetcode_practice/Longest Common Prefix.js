/**
 * @param {string[]} strs
 * @return {string}
 * Write a function to find the longest common prefix string amongst an array of strings.
 */

strs = ['11222', '111223', '111122233'];

var longestCommonPrefix = function(strs) {
  if(strs.length === 0 || strs === null){
    return "";
  }

  var firstString = strs[0]; //以第一個字串做為主軸比對其他字串

  for (var i = 1 ; i< strs.length ; i++){
    var compareString = strs[i]; // 下幾個字串

    for(var j=0 ; j < firstString.length ; j++ ){
      if(firstString[j] != compareString.charAt(j)) // charAt[x] 位置 x 的字元
        break;
    }

    firstString = firstString.slice(0,j); // slice[0, j] 切割字串但不包含j
  }
  return firstString;

};