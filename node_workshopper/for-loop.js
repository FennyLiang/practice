var count = 0 ;
var limit = 10 ;

var fn = (count, limit) => {

  for(var i = 0 ; i <= limit ; i++){

    count += i ;

  }


  return count;

}


var result = fn(count, limit)
console.log(result)