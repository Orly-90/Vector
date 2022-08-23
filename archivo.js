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
    var baseDeDatos = []
    function capturar() {
        var elemento = document.createElement("li");
        var texto = document.createTextNode("Elemento de prueba");
        elemento.appendChild(texto);
    
        var lista = document.getElementById("lista").innerHTML;
        lista.appendChild(elemento);
    
        var nuevoElemento = "<li>Texto de prueba</li><br>";
        lista.innerHTML = lista.innerHTML + nuevoElemento;
    }
