//Ejercicio #1

const btn = document.getElementById('btn')

function mayoriaEdad(edad){
    return edad >= 18 ? "Eres mayor de edad, puedes pasar" : "Lo siento, pero eres menor de edad" 
}

btn.addEventListener('click', () =>{
    const edad = document.getElementById('edad').value
    const mensaje = mayoriaEdad(edad)
    document.getElementById('resultado').innerText = mensaje
})


