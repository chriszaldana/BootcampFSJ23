document.addEventListener('DOMContentLoaded', () =>{
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
})


//Ejercicio #2


const btn1 = document.getElementById('btn1')

btn1.addEventListener('click', () =>{
    //Variables para obetener los datos
    let nombre = document.getElementById('nombre').value
    const carnet = document.getElementById('carnet').value
    let notaExamen = document.getElementById('examen').value
    let notaTareas = document.getElementById('tareas').value
    let notaAsistencia = document.getElementById('asistencia').value
    let notaInvestigacion = document.getElementById('investigacion').value

    //Calcular promedio
    let notaExamen20 = notaExamen * 0.20 
    let notaTareas40 = notaTareas * 0.40
    let notaAsistencia10 = notaAsistencia * 0.10
    let notaInvestigacion30 = notaInvestigacion * 0.30

    let resultadoPromedio = (notaExamen20 + notaTareas40 + notaAsistencia10 + notaInvestigacion30)
    
    if(resultadoPromedio >= 7){
        document.getElementById('mensajePromedio').innerText = "Has aprobado el semestre."
    }else{
        document.getElementById('mensajePromedio').innerText = "Estas reprobado."
    }


    //Mostrar los datos
    document.getElementById('nombreText').innerText = nombre
    document.getElementById('carnetText').innerText = carnet
    document.getElementById('promedioText').innerText = Number(resultadoPromedio.toFixed(2))

})

//Ejercicio #3




