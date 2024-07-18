/**
 * Repetir un bloque
 * for
 * while
 * do while
 * foreach
 */

//coleccion datos (arreglo de objetos)
let arreglo_empleados = [
    {
        nombre: "Judith",
        categoria: "A",
        sueldo: 750
    },
    {
        nombre: "Xander",
        categoria: "C",
        sueldo: 605
    },
    {
        nombre: "Jorge",
        categoria: "B",
        sueldo: 810
    }
]

//CICLO => (for, while, do while) => contador, condicion (para finalizar el contador), incremento / decremento del contador
/**
 * contador = contador + 1 (contador++)
 */
// for(let contador = 1; contador <= 10; contador++){
//     console.log(contador);
// }

//utilizando for para iterar el arreglo
/**
 * length => devuelve el tamaño de un arreglo o cadena
 * para acceder a una posicion del arreglo se utiliza [numero posicion] = [0]
 * para acceder a una propiedad del objeto se utiliza el punto (.)
 */
let aumento_salario = 0;
for(let posicion = 0; posicion < arreglo_empleados.length; posicion++){
    //accediendo al sueldo de los empleados del arreglo
    let salario = arreglo_empleados[posicion].sueldo 
    
    // switch - if else if else
    switch(arreglo_empleados[posicion].categoria){
        case "A":
            aumento_salario = salario + (salario * 0.15)
        break;
        case "B":
            aumento_salario = salario + (salario * 0.30)
        break;
        case "C":
            aumento_salario = salario + (salario * 0.10)
        break;
        case "D":
            aumento_salario = salario + (salario * 0.20)
        break;
        default:
            aumento_salario = 0
    }

    // accediendo al nombre de los empleados del arreglo
    console.log(arreglo_empleados[posicion].nombre);
    console.log("Sueldo anterior: " + "$"+salario);
    console.log("Sueldo con aumento: " + "$"+aumento_salario);
}

//Imprimir todos los datos de un arrat con un bucla

// let arraycito = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// let longanismo = arraycito.length
// let contador = 0
// //While
// //mientras (se cumpla esto){hace esto}


// while(contador < longanismo){
//     console.log(arraycito[contador]);
//     contador++
// }

//Do While HACER MIENTRAS

// do{
//     console.log(arraycito[contador]);
//     contador++
// }while(contador < longanismo)

/**Primera vuelta
 * Inicializacion -> condicion -> ejecucion -> incremento
 * 
 * Segunda vuelta
 * CONDICION -> EJECUCION -> INCREMENTO
 */
// let auxiliar = 0

// for(let i = 0; i < longanismo; i++){
//     console.log(arraycito[i]);
//     auxiliar++
    
// }

// console.log(auxiliar);

//Imprimir el array de forma descendente

// for (let i = longanismo-1; i >= 0; i--) {
//     console.log(arraycito[i]);
    
// }






