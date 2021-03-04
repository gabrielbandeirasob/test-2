// function expression
// function anonymous
/*const sum = function(){
sum(number11,number22) // arguments
}
*/

// parâmetros (parameters)
const sum = function (number1, number2) {
 let total = number1 + number2 // não esquecer de colocar o tipo da variável
  return total
}



let number11 = 34
let number22 = 25


console.log(`o número 1 é ${number11}`)
console.log(`o numero 2 é ${number22}`)
console.log(`a soma é ${sum(number11, number22)}`)

