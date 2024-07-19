//Agarrar los elementos que nos interesan del DOM
// const contenedor = document.querySelector('div')
// console.log(contenedor);

// //Obtenemos el primer hijo del contenedor
// console.log(contenedor.firstElementChild);
// let primerH1 = contenedor.firstElementChild
// console.log(primerH1.innerText);

// //Cambiamos el texto de un elemento HTML
// primerH1.innerText = "hola"

const titulo = document.getElementById('titulo')
titulo.innerText = "que pex hoola"

const botoncito = document.getElementById('btn')
const fondo = document.querySelector('body')

// function apretar(){
//     alert("Me apretaste")
// }

// //Ingresar datos a traves del DOM
// let dato = prompt("Ingresa tu numbre")
// console.log(dato);

//Manipulamos eventos del DOM
// botoncito.addEventListener('click', apretar)
botoncito.addEventListener('click', () =>{
    fondo.style.backgroundColor = "black"
})