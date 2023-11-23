let age = 25;
console.log("edad es de tipo " +  typeof(age))

const name = "John";
console.log("nombre es de tipo " +  typeof(name))

var isStudent = true;
console.log("isStudent es de tipo " +  typeof(isStudent))

let salary = 1500.75;
console.log("salary es de tipo " +  typeof(salary))

const fruits = ["apple", "banana", "orange"];
console.log("fruits es de tipo " +  typeof(fruits))

let person = { name: "Alice", age: 30, isEmployed: true };
console.log("person es de tipo " +  typeof(person))


console.log("------------------------------SOY UN SEPARADOR");

let arreglo = [10,"hello",5,true,8];

function sumNumbers(array){
    let acumulador = 0;
    array.forEach(element => {
        if(typeof(element) === "number"){
            acumulador+= element;
        }
    });
    return acumulador;

}



console.log(sumNumbers(arreglo));