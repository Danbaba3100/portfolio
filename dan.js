function multiply(a,b){
    return a*b ;
}
console.log(multiply(4,3))

function sum(a,b){
    return a+b ;
}
console.log(sum(4,3))

function subtract(a,b){
    return a-b ;
}
console.log(subtract(4,3))

function fullname(firstname, lastname){
    return firstname+ " " + lastname
}
console.log(fullname("Daniel", "jimoh"))

function myFunction (x,y=10){
    return x+y ;
}
myFunction(5) ;
myFunction(5,17) ;

function toCelsius(fahrenheit){
    return(5/9) * (fahrenheit - 32) ;
}
let temp = toCelsius(77); 
console.log(temp)