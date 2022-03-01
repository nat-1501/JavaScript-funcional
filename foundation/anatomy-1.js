// Function Declaration

function sayHello() {
  console.log("Hello!");
}

sayHello();

function sayHelloTo(name) {
  console.log(`Hello ${name}!`)
}

sayHelloTo('Mike')

function returnHi() {
    return 'Hi!'
}

let greeting = returnHi()
console.log(returnHi())

function returnHito(name) {
    return `Hi ${name}!`
}

console.log(returnHito('John'))