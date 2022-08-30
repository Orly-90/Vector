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
    //Reservar turnos y que me genere Listas de Turnos reservados

    class Reservacion
    {
        constructor(nombre, apellido, nroCel, mail){
            this.nombreUsuario = nombre;
            this.apellidoUsuario = apellido;
            this.nroCelUsuario = nroCel;
            this.mailUsuario = mail;

        }
    }

    var arrayDeReservas = [];//preparo el array
    var copiaArrayDeReservas = [...arrayDeReservas,'Bahia Blanca', '8000']; //copia el array original
    console.log(copiaArrayDeReservas);
    let botonCapturar = document.getElementById("btnCapturar");
    botonCapturar.onclick = () => {

            let entradaNombre = document.getElementById("Nombre").value;
            let entradaApellido = document.getElementById("Apellido").value;
            let entradaCelu= document.getElementById("Numero").value;
            let entradaMail = document.getElementById("Mail").value;
            
            let nuevaReserva = new Reservacion(entradaNombre, entradaApellido, entradaCelu, entradaMail);
            arrayDeReservas.push(nuevaReserva); //genero los arrays
            alert("Su reserva fue hecha");

    }

    //Boton de resetear en proceso!!

    let botonResetear = document.getElementById("btnResetear");
    botonResetear.onclick = () => {
        let miFormulario = document.getElementById("formul");
        miFormulario.reset();
    }
    
let botonVer = document.getElementById("btnVer");
botonVer.onclick = () => {

        let listaLi = document.getElementById('listaReservados');
        listaLi.innerHTML = "";
        for (guardados of arrayDeReservas)
        {
            let nodo = document.createElement('li');
            nodo.innerText = `${guardados.nombreUsuario} ${guardados.apellidoUsuario}`
            listaLi.appendChild(nodo);
        }
    }

    
    