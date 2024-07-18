/**
 * Primitivos
 * String, float, number, Bolean
 */

//Array
// Inicializacion de arrays

let array1 = new Array();
let array2 = [1,2] //Este es el que se usa mas

//METODOS DE ARRAYS
//Agregar datos al final de un array
array2.push(3)
array2.push(4)

//Eliminar datos de un array
array2.pop()

//Insertar elementos al inicio del array
array2.unshift(10)

//Eliminar dato del inicio de un array
array2.shift()

//Recorrer un array y hace algo con el valor de cada posicion - No recomendado
// foreach(array2 as valor){

// }

// console.log(array2);

// array2.map((num) => {
//     console.log(num);
// })

/**
 * Programacion orientada a objetos
 * Se basa en crear un modelo del problema de destino en su programa
 * Es un paradigma que se basa en el concepto de clases y objetos
 * Es una forma de programar la cual intenta resolver los problemas a traves de moldes
 * 
 * Clases y Objetos
 * Clase -> Es un molde (genera una forma) para que todos los objetos salgan iguales
 * Objeto -> Es lo que creamos en base a un molde
 */

// // Creamos una clase
// class Persona {
    
//     // Constructor -> Metodo reservado para la creacion de objetos de esta clase
//     constructor(nombre, edad){
//         // Atributos -> Caracteristica propias de ese tipo de objeto
//         this.nombre = nombre;
//         this.edad = edad
//     }

//     // Metodos -> Acciones propias de ese tipo de objeto
//     correr(){
//         console.log("Soy " + this.nombre + " y estoy corriendo");
//     }
// }

// //INSTANCIAR UN OBJETO -> Crear un objeto

// let marcial = new Persona("Marcial Ordoñez", 20);

// // Acceder a un atributo(propiedad) de un objeto
// marcial.nombre = "Marcial Guzman"
// marcial.correr()

//Objetos literales
// let marcela ={
//     // Clave valor
//     nombre: "Marcela Orellana",
//     edad: 20,
//     correr: ()=> {
//         console.log("Estoy corriendo");
//     }
// }

// console.log(marcela.edad);
// marcela.correr()


let array3 =[
    {nombre: "Marcela Orellana",
    edad: 20
    },
    {nombre: "Jorge Diaz",
    edad: 20
    }
]

console.log(array3[1]);