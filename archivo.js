/*
Consigna: Seleccionar una opcion de reparacion y devolver presupuesto.
*/
let listaDePrecio, respuesta;

// var sumaDePrecios = 0;
// var Mayor = 0;

// function parsearPrecio(precio) {
//         precioParseado = parseInt(prompt(precio));
//         return precioParseado
//     }

// function obtenerMayor(lista1, lista2) {
//     let elMayor = 0;
//     if (lista1 > lista2) {
//         elMayor = lista1;
//         return elMayor
//     }
// }
function pasarPrecio(opcionesDePrecio) {
    switch (opcionesDePrecio) {
        case "1":
            alert("El cambio de modulo sale 3500"); 
            break;
        case "2": 
        
            alert("El cambio de pin de carga sale 2000");
            break;
        case "3": 
            
            alert("El cambio de bateria sale 1300");
            break;
        default:
            alert("Ninguna de las opciones ingresadas es correcta")
            break;
    }
}

    alert("Puede buscar precio de reparaciones, 1: Cambio de Modulo, 2: Pin de Carga, 3: Cambio de Bateria.");
    let pregunta = prompt("Desea consultar algun presupuesto?? Presione cualquier letra, caso contrario (n)");
    if (pregunta != "n"){   
        do{
            listaDePrecio = pasarPrecio(prompt("Ingrese una opcion para saber el presupuesto"));
            respuesta = prompt("Desea seguir consultando?? ingrese cualquier letra, caso contrario (n)");
        } while (respuesta != "n" && pregunta != "n")   
    }
    //Reservar turnos, no pude terminar, no puedo hacer que me genere Listas de Turnos reservados

    var arrayDeReservas = [] //preparo el array
    function capturar (){
    
        let entradaNombre = document.getElementById("Nombre").value;
        let entradaApellido = document.getElementById("Apellido").value;
        let entradaCelu= document.getElementById("Numero").value;
        let entradaMail = document.getElementById("Mail").value;
        
    }
    let nuevaReserva = new Reservacion(nombre, apellido, nroCel, mail);
    arrayDeReservas.push(nuevaReserva); //genero los arrays
    mostrarListado();

    function mostrarListado()
    {
        let listaLi = document.getElementById('listaReservados');
        listaLi.innerHTML = "";
        for (guardados of arrayDeReservas)
        {
            let nodo = document.createElement('li');
            nodo.innerText = `${guardados.nombreUsuario}`
            listaLi.appendChild(nodo);
        }
    }
    class Reservacion
    {
        constructor(nombre, apellido, nroCel, mail){
            this.nombreUsuario = nombre;
            this.apellidoUsuario = apellido;
            this.nroCelUsuario = nroCel;
            this.mailUsuario = mail;

        }
    }
