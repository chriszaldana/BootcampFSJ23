const btnAsync = document.getElementById('btnAsync')

//SetTimeout -> Limitar en base al tiempo, la demora de ejecucion de una funcion
btnAsync.addEventListener('click', () =>{

    setTimeout(() => {
        alert('holis')
    },2000)

})

//Promesas

const funcionAsync = () =>{

    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve("Aca tenes lo que pediste")
        }, 2000);
    })
}

//Then y Catch
funcionAsync().then((mensaje) => {console.log(mensaje);})

//Async y Await

async function ejecutarTareaAsincrona(){
    const resultado = await funcionAsync()
    console.log(resultado);   
}

ejecutarTareaAsincrona()


//Uso de fetch
const peticionFetch = () =>{
    //Enviamos a fetch a buscar los datos a la APi
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(
        (response)=>{
            // console.log(response);
            return response.json()
        }
    )

    .then(data =>{
        console.log(data);
    })
    .catch((error) => {
        console.error('Obtuvimos un error, que grande somos',error)
    })

}

peticionFetch()

async function peticionAwait(){
    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        let data = await response.json()
        console.log(data)
    } catch (error) {
        console.log('Error al obtener el pokemon pa',error);
    }
    
}

peticionAwait()