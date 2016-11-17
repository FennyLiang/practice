var result = 0

for(var i = 2; i < process.argv.length ; i++){

   result += Number( process.argv[i] )
}

console.log(result)
console.log(process.argv)


//透過 global 的 process 物件，您可以存取到來自命令列的參數。 process 物件會把完整的命令列放到底下的 argv 屬性中，如 process.argv 。

// 請先撰寫一個單純包含底下命令的程式：
//
// console.log(process.argv)
// 在命令列中輸入 node program.js ，然後再後面多輸入幾個數字作為參數，如：
//
// $ node program.js 1 2 3
// 在這個範例中，程式的輸出會像底下一樣，是一個 Array （數列）：
//
// [ '/usr/local/Cellar/node/7.0.0/bin/node', '/Users/FennyLiang/Desktop/javascript/practice/learn_node/progress.js', '1', '2', '3' ]
// 為了輸出這些參數的總和，您需要思考如何以迴圈的方式輪流存取這幾個參數。process.argv Array 的第一個元素永遠是「node」，
// 而第二個元素也永遠是被執行的程式 program.js 的完整路徑，所以您需要從第三個元素（index 2）開始，依序加入來自命令列的參數，
// 直到這個 Array 結束。
//
// 要注意的是， process.argv 的所有元素都是字串（String），而您需要把它們 轉換 成數字（Number）。
// 您可以在 process.argv 前加上 + 或是把這個屬性傳給函式 Number() 。如 +process.argv[2] 或 Number(process.argv[2]) 。