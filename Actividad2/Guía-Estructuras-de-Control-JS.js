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

document.addEventListener('DOMContentLoaded', () =>{
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
})

document.addEventListener('DOMContentLoaded', () =>{
//Ejercicio #3

    const btn2 = document.getElementById('btn2')

    btn2.addEventListener('click', () =>{
        let nombre = document.getElementById('nombre1').value
        let salario = parseFloat(document.getElementById('salario').value)
        let categoria = document.querySelector('select[name="categoria"] option:checked').value

        //Calcular el aumento
        let porcentajeAumento = 0

        switch (categoria) {
            case "A":
                porcentajeAumento = 0.15
                break;
            case "B":
                porcentajeAumento = 0.30
                break;
            case "C":
                porcentajeAumento = 0.10
                break;
            case "D":
                porcentajeAumento = 0.20 
            default:
                break;
        }

        let calculoAumento = salario * porcentajeAumento
        let salarioConAumento = calculoAumento + salario



        //Mostrar los datos

        document.getElementById('nombreText1').innerText = nombre
        document.getElementById('categoriaText').innerText = categoria
        document.getElementById('sueldoAumentoText').innerText = "$" + salarioConAumento.toFixed(2)
    })
})


//Ejercicio 4

document.addEventListener('DOMContentLoaded', () =>{

    const btn3 = document.getElementById('btn3')

    btn3.addEventListener('click', () =>{
        let num1 = parseFloat(document.getElementById('numero1').value)
        let num2 = parseFloat(document.getElementById('numero2').value)

        //Verificar que numero es mayor
        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('mensajeNumeroMayor').innerText = "Por favor, ingresa números válidos."
        }else if(num1 === num2){
            document.getElementById('mensajeNumeroMayor').innerText = "Los numeros son iguales, ingresa otros numeros"
        }else if(num1 > num2){
            document.getElementById('mensajeNumeroMayor').innerText = `${num1} es mayor a ${num2}`
        }else{
            document.getElementById('mensajeNumeroMayor').innerText = `${num2} es mayor a ${num1}`
        }
    })
})

//Ejercicio 5

document.addEventListener('DOMContentLoaded', () =>{

    const btn4 = document.getElementById('btn4')

    btn4.addEventListener('click', () =>{
        let nombre = document.getElementById('nombre2').value
        let numTelefono = document.getElementById('telnum').value
        let fordModelo = document.querySelector('select[name="fordmodelo"] option:checked').value
        let descuento
        let desuentoMostrar
        let precio = 0
        let precioDescuento
    
        const imagenFfiesta = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1721711147/ffiesta_uatdov.webp"
        const imagenFescape = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1721713576/fescape_zah11b.avif"
        const imagenFexplorer = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1721713586/fexplorer_zk2otp.jpg"
        const imagenFfocus = "https://res.cloudinary.com/dbl4ugndy/image/upload/v1721713598/ffocus_jjunpe.jpg"
        const contenedor = document.getElementById('imgContainer')
        switch (fordModelo) {
            case "Ford Fiesta":
                contenedor.insertAdjacentHTML(
                    "beforeend",
                    `<img class="imgcoti" src="${imagenFfiesta}" alt"${imagenFfiesta}">`
                )
                descuento = 0.05
                desuentoMostrar = "5%"
                precio = 25000
                precioDescuento = precio - (precio * descuento)
                break;
            case "Ford Focus":
                contenedor.insertAdjacentHTML(
                    "beforeend",
                    `<img class="imgcoti" src="${imagenFfocus}" alt"${imagenFfocus}">`
                )
                descuento = 0.10
                desuentoMostrar = "10%"
                precio = 35000
                precioDescuento = precio - (precio * descuento)
                break;
            case "Ford Explorer":
                contenedor.insertAdjacentHTML(
                    "beforeend",
                    `<img class="imgcoti" src="${imagenFexplorer}" alt"${imagenFexplorer}">`
                )
                descuento = 0.25
                desuentoMostrar = "25%"
                precio = 60000
                precioDescuento = precio - (precio * descuento)
                break;
            case "Ford Escape":
                contenedor.insertAdjacentHTML(
                    "beforeend",
                    `<img class="imgcoti" src="${imagenFescape}" alt"${imagenFescape}">`
                )
                descuento = 0.20
                desuentoMostrar = "20%"
                precio = 45000
                precioDescuento = precio - (precio * descuento)
                break
            default:
                break;
        }
        const infoCoti = document.getElementById('infoCoti')
        infoCoti.insertAdjacentHTML(
            "beforeend",
            `<table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre de cliente</th>
              <td>${nombre}</td></tr>
              <tr>
              <th scope="col">Numero de telefono</th>
              <td>${numTelefono}</td></tr>
              <tr>
              <th scope="col">Modelo escogido</th>
              <td>${fordModelo}</td></tr>
              <tr>
              <th scope="col">Precio</th>
              <td>$${precio}</td></tr>
              <th scope="col">Tarifa de descuento</th>
              <td>${desuentoMostrar}</td></tr>
              <th scope="col">Precio con descuento</th>
              <td>$${precioDescuento}</td></tr>
          </thead>
        </table>`
        )
    })
})

//Ejercicio 6

document.addEventListener('DOMContentLoaded',() =>{
    const btn5 = document.getElementById('btn5')

    btn5.addEventListener('click', () =>{
        //Obteniendo los dato
        let nombre = document.getElementById('nombre3').value
        let numTele = document.getElementById('telnum1').value
        let destino = document.querySelector('select[name="destino"] option:checked').value
        let descuentoDestino
        let precioRegular
        let precioDeDescuento
        let tarifaDescuento

        //Logica para aplicar el descuento dependiendo del destino

        switch(destino){
            case "La Costa del Sol":
                descuentoDestino = 0.05
                precioRegular = 250
                precioDeDescuento = precioRegular - (precioRegular * descuentoDestino)
                tarifaDescuento = "5%"
                break;
            case "Panchimalco":
                descuentoDestino = 0.10
                precioRegular = 300
                precioDeDescuento = precioRegular - (precioRegular * descuentoDestino)
                tarifaDescuento = "10%"
                break;
            case "Puerto el Triunfo":
                descuentoDestino = 0.15
                precioRegular = 700
                precioDeDescuento = precioRegular - (precioRegular * descuentoDestino)
                tarifaDescuento = "15%"
                break;
            case "Playa las Flores":
                descuentoDestino = 0.20
                precioRegular = 1025
                precioDeDescuento = precioRegular - (precioRegular * descuentoDestino)
                tarifaDescuento = "20%"
            default:
                break;
        }

        const infoDesti = document.getElementById('infoDesti')
        infoDesti.insertAdjacentHTML(
            "beforeend",
            `<table class="table">
          <thead>
            <tr>
              <th scope="col">Nombre de cliente</th>
              <td>${nombre}</td></tr>
              <tr>
              <th scope="col">Numero de telefono</th>
              <td>${numTele}</td></tr>
              <tr>
              <th scope="col">Modelo escogido</th>
              <td>${destino}</td></tr>
              <tr>
              <th scope="col">Precio</th>
              <td>$${precioRegular}</td></tr>
              <th scope="col">Tarifa de descuento</th>
              <td>${tarifaDescuento}</td></tr>
              <th scope="col">Precio con descuento</th>
              <td>$${precioDeDescuento}</td></tr>
          </thead>
        </table>`
        )
    })
})

//Ejercicio 7

document.addEventListener('DOMContentLoaded', () =>{
    const btn6 = document.getElementById('btn6')

    btn6.addEventListener('click', () =>{
        let numIngresadosArr = []

        for (let i = 1; i <=10; i++) {
            let nume = parseFloat(document.getElementById('num' + i).value)
            numIngresadosArr.push(nume)
        }

        //asignando valores
        let valNegativos = 0
        let valPositivos = 0
        let mult15 = 0
        let sumPares = 0

        //Logica para encontrar valores
        for (let numeros of numIngresadosArr) {
            
            if(numeros < 0){
                valNegativos += 1
            }else if(numeros > 0){
                valPositivos += 1
            }

            if(numeros % 15 === 0){
                mult15 += 1
            }

            if(numeros % 2 === 0 && numeros > 0){
                sumPares += numeros
            }
        }

        const infoNumeros = document.getElementById('infoNumeros')
        infoNumeros.insertAdjacentHTML(
            "beforeend",
            `<table class="table">
          <thead>
            <tr>
              <th scope="col">Valores Negativos</th>
              <td>${valNegativos}</td></tr>
              <tr>
              <th scope="col">Valores Positivos</th>
              <td>${valPositivos}</td></tr>
              <tr>
              <th scope="col">Multiplos de 15</th>
              <td>${mult15}</td></tr>
              <tr>
              <th scope="col">Suma de Pares</th>
              <td>${sumPares}</td></tr>
          </thead>
        </table>`
        )
    })
})

//Ejercicio 8

document.addEventListener('DOMContentLoaded', () =>{

    const btn7 = document.getElementById('btn7')

    btn7.addEventListener('click', () =>{
        let tabla = document.getElementById('tabla').value
        let resultado = ""

        for (let i = 1; i <= 10; i++) {
            let multi = tabla * i;
            resultado += `${tabla} * ${i} = ${multi}<br>`
        }
        document.getElementById('infoTabla').innerHTML = resultado
        
    })
})

//Ejercicio 9

document.addEventListener('DOMContentLoaded', () =>{
    const btn8 = document.getElementById('btn8')

    btn8.addEventListener('click', () =>{
        let celcius = parseFloat(document.getElementById('grados').value)

        //Convertir celcius a Fahrenheit
        let celAFahren = (celcius * 9/5) + 32

        //Mostrar datos en DOM
        

        if(celAFahren >= 14 && celAFahren < 32){
            document.getElementById('infoGrados').innerText = "Temperatura baja"
        }else if(celAFahren >= 32 && celAFahren <= 68){
            document.getElementById('infoGrados').innerText = "Temperatura adecuada"
        }else if(celAFahren >= 68 && celAFahren <= 96){
            document.getElementById('infoGrados').innerText = "Temperatura alta"
        }else{
            document.getElementById('infoGrados').innerText = "Temperatura desconocida"
        }

        document.getElementById('gradosFha').innerText = `Grados Fahrenheit = ${celAFahren}°`
    })
})




    


