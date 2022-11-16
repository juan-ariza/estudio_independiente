// Types of data in JavaScript

//Type Of
//type Of is used for knowes the data type of the variable
console.log(typeof nombre)

//String data
var nombre = "Juan";
console.log(nombre)

//Number data
var number = 23;
console.log(number);

//Object data
var objeto = {
    nombre : "andres",  //Las propiedades del objeto se asignan con : no con =
    apellido : "ramirez",
    telefono : 3234575012
};
console.log(objeto);

//Data boolean
var caminar = true;
console.log(caminar);

//Data function
function miFuncion(){};
console.log(miFuncion);

//Symbol data (is used when you define a unique valuer in a variable)
var simbolo = Symbol("mi simbolo unico");
console.log(simbolo);

//Class type (In JavaScript Class is equal to function)
class Personas{
    constructor(nombre, apellido){
        this.nombre = nombre;
    this.apellido = apellido;
    }
}
console.log(Personas);

//Undefined data
var x;
console.log(x);

//Null data (null is ausencia de valor)
vary = null;
console.log(null);

//Array data (in JavaScript the arrays is type data object)
var car = ["BMW", "Audi", "Volvo"];
console.log(car);