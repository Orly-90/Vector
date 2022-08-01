/*
Consigna: Seleccionar precios, sumarlos, sacar el IVA, y mostrar el mayor precio.
*/
let listaDePrecio,precioMayor;
var sumaDePrecios = 0;
var Mayor = 0;

function parsearPrecio(precio) {
        precioParseado = parseInt(prompt(precio));
        return precioParseado
    }

function obtenerMayor(lista1, lista2) {
    let elMayor = 0;
    if (lista1 > lista2) {
        elMayor = lista1;
        return elMayor
    }
}

do {
    listaDePrecio = parsearPrecio("Ingrese precio");
    sumaDePrecios = sumaDePrecios + listaDePrecio;
    if (listaDePrecio>Mayor) {
        Mayor = listaDePrecio
    }
} while (listaDePrecio>0);
alert("La suma de los precios es de " + sumaDePrecios);
alert("El mayor de los precios es " + Mayor);