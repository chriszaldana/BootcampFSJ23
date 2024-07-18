//Ejercicio 1
function sumaPares(arre){
    let suma = 0;
        for (let i = 0; i <= arre.length; i++){
            if(arre[i] % 2 == 0){
                suma += arre[i];
            }
        }
        return suma;
    }
    arre = [1,2,3,4,5,6,7,15,18,21];
    console.log(sumaPares(arre));

//Ex 2
let arr3 = [1,5,2,3,85,6,32,5]

function arrayNumeroMayorConMetodo(array,x){
    return array.filter(numero => numero < x)
}

function arrayNumeroMayor(array,x){
    let contador = 0
    let resp = []

    while (contador<array.length) {

        if (array[contador]>x) {
            resp.push(array[contador])
        }

        contador++
    }
    return resp
}

console.log(arrayNumeroMayor(arr3,5));

//Ex 3

let arr = [1,5,2,3,85,6,32,5]
function numeroMax(arr){
    return Math.max(...arr)
}

console.log(numeroMax(arr));

//Ex 4

let ramdon = [1,2,3,4,5,6,7,8,9,10]

function multiplicadorDeArray(arr, x){

    let arr1 = []

    for (let i = 0; i < arr.length; i++) {
            let multi = arr[i] * x
            arr1.push(multi)
        
    }

    return arr1

}

console.log(multiplicadorDeArray(ramdon, 10));

let ramdon2 = [1,2,3,4,5,6,7,8,9,10]

function multiplicadorDeArray2(arr, x){
    let arr1 = []
    let i = 0

    while(i < arr.length){
        let multi = arr[i] * x
        arr1.push(multi)
        i++
    }

    return arr1
}

console.log(multiplicadorDeArray2(ramdon2, 2));

//EX 5

let arr4 = [10,20,35,20,63,35,10,95,25,10]

function eliminarDuplicados(arr) {
    let sinDuplicados = [];

    for (let i = 0; i < arr.length; i++) {
        if (!sinDuplicados.includes(arr[i])) {
            sinDuplicados.push(arr[i]);
        }
    }

    return sinDuplicados;
}

console.log(eliminarDuplicados(arr4));

//EX 6

let arr5 = [10,20,35,20,63,35,10,95,25,10]

function contarRepeteciones(arr, x){

    let contador = 0

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === x){
            contador++
        }
        
    }

    return contador
}

console.log(contarRepeteciones(arr5, 10));

//Ex 7

let palabras = ["gato", "perro", "elefante", "tigre", "jirafa", "rinoceronte", "serpiente", "murciélago", "hipopótamo", "cocodrilo"]

function longitudPalabras(arr, x){

    let result = arr.filter((palabra) => palabra.length >= x)

    return result
}

console.log(longitudPalabras(palabras, 10));