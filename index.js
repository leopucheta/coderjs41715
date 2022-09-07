
// //__________________________________________________________________________________SIMULADOR INTERACTIVO CODER 
let servicios = Number (prompt("Ingrese una cantidad de servicios para sumar"));
let resultado = 0;

function sumaServicios (numero){
    resultado = resultado + numero;
}

if (servicios > 0){
    for   (let i=0; i<servicios; i++){
        let valorServicio = Number (prompt("Ingrese el valor del servicio"));
        sumaServicios (valorServicio);
    }
}else {
    alert ("Por favor, ingresa alguna cantidad de servicios para sumar")
}
    

    alert("El valor total de los servicios es " + resultado)



















