//Declaraciones de variables y constantes//
/**
 * comentarios largos
 */

/**
 * declarar una variable: let, var
 * ambito de la variable
 */

/**
 * declarar, llamar variable
 */

let edad = 18; //int
edad = 23;

var saludo = "Hola!"; //string
var saludo = "Adios!";

//Var es mas global

let decimal = 34.5; //float o double
let boolean = true; //false
let nul = null; //tipo de dato nulo
//declarando un objeto
let persona = {
    nombre: "Judith",
    edad: 20,
    telefono: 6542153,
    completado: false
}

//declarando un arreglo(coleccion de datos)
let frutas = ["manzanas", "uvas", "naranja"];
console.log(frutas);

let resultado = 23.455555555555555;

console.log(Math.round(resultado));
console.log(resultado.toFixed(3));

function votar (){
    /**
     * Las variables let trabajan a nivel de bloque
     */
    let mensaje = "Puedes votar!"
    console.log(mensaje);
}

votar()

function calcularAreaTriangulo() {
    let altura = 80.5;
    let base = 20;
    let resultado = base * altura / 2;
    //concatenamos la variable con el signo (+)
    console.log("El area del triagulo es: " + resultado);
}

calcularAreaTriangulo()

//funciones con parametros
function calcularAreaTrianguloParametros(altura, base){
    let resultado = (base *altura) / 2;
    console.log("El area del triangulo es: " + resultado);
}

//pasando los argumentos(altura, base)
calcularAreaTrianguloParametros(50.10, 25)
calcularAreaTrianguloParametros(36.88, 50)

