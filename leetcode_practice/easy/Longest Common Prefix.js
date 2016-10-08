/**
 * @param {string[]} strs
 * @return {string}
 * Write a function to find the longest common prefix string amongst an array of strings.
 * 一個陣列中有許多個字串，寫一個function找出這些字串最長的共同字首。
 範例：
 ['abcd','abccc','abdec'] --> 共同字首為 'ab' 。

 *思路
 *比對前兩個字串，從頭開始取出相同的部分為共同字首
 *後面的字串只要與目前的共同字首比對即可
 *['abcd','abccc','abdec'] ，一開始'abcd','abccc'共同字首前3碼'abc'
 *接下來只要將'abc','abdec'做比對，發現剩下'ab'，也就是最長的共同字首
 */

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