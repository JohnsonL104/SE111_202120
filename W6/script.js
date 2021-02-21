
var hPay = Number(prompt("What is the hourly pay?"))
var hWorked = Number(prompt("How many hours have been worked?"))
var taxRate = 0.2

var output = `Gross Pay: \$${(hPay*hWorked).toFixed(2)}\nUncle Sam's Share: \$${((hPay*hWorked)*taxRate).toFixed(2)}\nNet Pay: \$${((hPay*hWorked)-((hPay*hWorked)*taxRate)).toFixed(2)}`

alert(output)
console.log(output)