//Agarrar los elementos que nos interesan del DOM
// const contenedor = document.querySelector('div')
// console.log(contenedor);

// //Obtenemos el primer hijo del contenedor
// console.log(contenedor.firstElementChild);
// let primerH1 = contenedor.firstElementChild
// console.log(primerH1.innerText);

// //Cambiamos el texto de un elemento HTML
// primerH1.innerText = "hola"

// const titulo = document.getElementById('titulo')
// titulo.innerText = "que pex hoola"

// const botoncito = document.getElementById('btn')
// const fondo = document.querySelector('body')

// function apretar(){
//     alert("Me apretaste")
// }

// //Ingresar datos a traves del DOM
// let dato = prompt("Ingresa tu numbre")
// console.log(dato);

//Manipulamos eventos del DOM
// botoncito.addEventListener('click', apretar)
// botoncito.addEventListener('click', () =>{
//     fondo.style.backgroundColor = "black"
// })

//Agregar una etiqueta

// const p = document.createElement('p')
// p.textContent = 'Hola como estas?'
// document.body.appendChild(p)

// const showMessage = () => {
//     let fullname = document.getElementById('fullname').value
//     document.createElement('h1');
//     h1.textContent = 'Hola como has estado?'+ fullname;
//     document.body.appendChild(h1);
// }


// const showMessage = () => {
//     let age = document.getElementById('age').value
 
//     if (age >= 18){
//         const h1 = document.createElement('h1')
//         h1.textContent = 'Eres mayor de edad, puedes votar'
//         h1.style.color = 'green'
//         document.body.appendChild(h1)
//     }else{
//         const h1 = document.createElement('h1')
//         h1.textContent = 'Eres menor de edad, no puedes votar'
//         h1.style.color = 'red'
//         document.body.appendChild(h1)
 
//     }
// }

const getValueSelected = () => {
    const valueSelected = document.querySelector('input[name="radioGroup"]:checked').value
    console.log(valueSelected)
 }

 const validateForm = (event) => {

    event.preventDefault()

    const fullname = document.getElementById('fullname').value
    const genero = document.getElementById('genero').value
    const email = document.getElementById('email').value
    // console.log('Nombre:'+ fullname);
    // console.log('Genero:'+ genero);
    // console.log('Email:'+ email);

    if(fullname != ""){
        const p = document.createElement('p')
        p.textContent = 'Escribe un nombre'
        document.body.appendChild(p)
    }
 }

 //validar nombre
 //Validar email con expresion regular