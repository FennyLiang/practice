var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var filtered = numbers.filter( (number) => {
          return (number % 2) === 0  //filter特性印出的是已過濾的陣列數值
  }
);

console.log(filtered)