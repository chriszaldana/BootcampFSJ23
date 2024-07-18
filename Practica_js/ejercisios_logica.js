// Dado un array de enteros, sumar los elementos pares y devolver si esta suma es mayor a 20

let arraycito = [15,40,20,57,25,17,10];
function arrayPares(arraycito){
let sumaPares= 0

for (let numbers = 0; numbers < arraycito.length; numbers++) {
    //Obtener el numero de cada posicion
    //Veamos si es par
    if(arraycito[numbers] %2 == 0){
        sumaPares = sumaPares + arraycito[numbers]
    }
    
    //vemos si es mayor a 20
    if(sumaPares > 20){
        return "Si es mayor"
    }else{
        return "No es mayor"
    }
   
}
}

function shortLongShort(a,b){
    //Averiguamos el largo
    largoA = a.length;
    largoB = b.length;

    if(largoA < largoB){
        return a+b+a;
    }else{
        return b+a+b;
    }
}

console.log(shortLongShort("100","22"));
console.log(shortLongShort("123","55"));

//FizzBuzz
//Escribir un programa que imprima los numeros del 1 al 100
//Si el numero multiplo de 5 imprima Buzz
//Si el numero es multiplo de 3 imprima Fizz
//Si es multiplo de ambos FizzBuzz
//Caso contrario imprima el numero


function FizzBuzz(){
    //Write your code here
    for(let i = 1; i <= 100; i++){
       
        if(i %5 == 0 && i %3 == 0){
            console.log("FizzBuzz");
        }else if(i %3 == 0){
            console.log("Fizz");
        }else if(i %5 == 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}

FizzBuzz()



function FizzBuzz(arr){
    //Forma 1
    let arraycito = []
    for(let i = 0; i < arr.length; i++){
       
        if(arr[i] %5 == 0 && i %3 == 0){
           arraycito.push("FizzBuzz");
        }else if(arr[i] %3 == 0){
            arraycito.push("Fizz");
        }else if(arr[i] %5 == 0){
            arraycito.push("Buzz");
        }else{
            arraycito.push(arr[i]);
        }
    }
    console.log(arraycito);
}

FizzBuzz([2,3,6,5,4,8,5,6,3,2,52,63,98,78,96])

//Crear una funcion que tomando un array de enteros y un numero limite
//Devolver un array que contenga solo numeros mayores a el numero limite.

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


