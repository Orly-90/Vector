/*
Consigna: Seleccionar una opcion de reparacion y devolver presupuesto.
*/

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

    const arrayDeReservas = [];//preparo el array
    const copiaArrayDeReservas = [...arrayDeReservas,'Bahia Blanca', '8000']; //copia el array original
    console.log(copiaArrayDeReservas);
            

    let form = document.getElementById("form")
    let parrafo = document.getElementById("advertencia");
        
    form.addEventListener("submit", e => {
        e.preventDefault(); //freno el valor por defecto del formulario que es Enviar
        let entradaNombre = document.getElementById("Nombre").value;
        let entradaApellido = document.getElementById("Apellido").value;
        let entradaCelu= document.getElementById("Numero").value;
        let entradaMail = document.getElementById("Mail");
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //expresion Regular
        let advertencia = ""
        let entrar = false; 
        if (entradaNombre.length <6) {
            advertencia += `Nombre demasiado corto <br>`;
            entrar = true
        }
        if (!regexEmail.test(entradaMail.value)) {
            advertencia += `El email no es valido <br>`;
            entrar = true
        }
        if (entrar) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Oops...algo anda mal',
                showConfirmButton: false,
                timer: 1500
            })
            parrafo.innerHTML = advertencia;

        }
        else {
            parrafo.innerHTML = "";             //creo los objetos con los datos capturados
            let nuevaReserva = new Reservacion(entradaNombre, entradaApellido, entradaCelu, entradaMail);
            arrayDeReservas.push(nuevaReserva); //genero los arrays
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu reserva fue exitosa',
                showConfirmButton: false,
                timer: 1500
            })
            form.reset(); //reseteo formulario
        }
                
    })
//Boton ver Rerservas    
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
// Consultar Presupuesto de Reparaciones 

class Consulta 
    {
        constructor (tipoReparacion){
            this.tipoReparacion = tipoReparacion;
        }
    }
    
let botonPresupuesto = document.getElementById("btnPresupuesto")
botonPresupuesto.onclick = () => {
    let entradaPresupuesto = document.getElementById("Presupuestos").value;

    let respuestaPrecio = new Consulta(entradaPresupuesto);
    mostarOpciones(respuestaPrecio);
}

const mostarOpciones = (opcionSeleccionada) => {
    
        if (opcionSeleccionada = "Modulo") {
            
            alert("El cambio de modulo sale 3500"); 
            
        } if (opcionSeleccionada = "Cambio de Pin"){

                alert("El cambio de pin de carga sale 2000");
        }if (opcionSeleccionada = "Cambio de Bateria"){

                alert("El cambio de bateria sale 1300");
        }
        
}