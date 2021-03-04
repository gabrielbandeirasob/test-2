/*exercicio 1
 declare uma variável de nome weight

var weight;


*/
/*exercicio 2

console.log(typeof weight) 

undefined / descobri pelo comando acima

*/

/*3. Declare uma variável e atribua valores para cada um dos casos:
   
 *name: String
 *age: Number( integer)
 *stars: Number(float)
 *isSubscribed: boolean

 let name, age, stars, isSubscribed

 name= 'Gabriel'
 age=  24
 stars = 100.5
 isSubscribed = true

console.log(name, age, stars, isSubscribed)
 
*/

/* 4 - A variável abaixo é de que tipo de dado? 
 

let student = {};
console.log(typeof student) //object

*/
/* 4.1 atribua a ela as mesmas propriedas e valores do exercício 3.
 

let student = {
 name: 'Gabriel',
 age: 24,
 stars: 100.5,
 isSubscribed: true
}

console.log(student)
*/

/* Mostre no console a seguinte mensagem:
 <name> de idade <age> pesa <wight kg.

let student = {
 name: 'Gabriel',
 age: 24,
 stars: 100.5,
 isSubscribed: true,
 weight: 76
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight}` )

*/


/* 5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhuma valor, ou seja, somente o Array vazio

let students = []

*/

/* 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.


let student = {
 name: 'Gabriel',
 age: 24,
 stars: 100.5,
 isSubscribed: true,
 weight: 76
}
 let students = [
    student
 ]

 console.log(students)
 console.log(students[0]) / 7. coloque no console o valor da posição zero do array 
*/

/* 8. crie um nov student e coloque na posição 1 do Array students


let student = {
 name: 'Gabriel',
 age: 24,
 stars: 100.5,
 isSubscribed: true,
 weight: 76
}
 let fernando = {
 
  name:'Fernando',
  age:27,
  weight: 80.5
 }

let students = [
 
    student,
    fernando
]

console.log(students)

/ outra forma

students[1] = fernando

*/

