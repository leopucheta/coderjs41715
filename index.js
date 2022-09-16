//1ra Entrega de Proyecto Final__________________________________________________________________________________________


const favoritos = [];
const baseDeDatos = [];

class Link {
  constructor (nombre, categoria){
  this.nombre = nombre
  this.categoria = categoria
  }
}



function agregarLink (nombre, categoria){
  let agregarLink = new Link (nombre, categoria)
  baseDeDatos.push (agregarLink)
}

function agregarFavorito (nombreFavorito){
  favoritos.push (baseDeDatos.find(element => element.nombre == nombreFavorito))
  alert ('Favoritos agregados exitosamente')
}


//Dbase
//streaming
agregarLink('Disney Plus', 'streaming')
agregarLink('Netflix', 'streaming' )
agregarLink('Prime Video', 'streaming')

//social
agregarLink('Instagram', 'social')
agregarLink('Twitter', 'social')
agregarLink('Facebook', 'social')


let nombreUsuario = prompt ('Como te llamas?')
alert ('Bienvenido a My Social Tree ' + nombreUsuario)
let confirmFavorito = confirm ('Deseas agregar favoritos?')

while (confirmFavorito){
let eleccionCategoria =  parseInt(prompt( nombreUsuario + ' Elige una categoria \n 1- Streaming \n 2- Social '));



if (eleccionCategoria == 1){

  let eleccionFavorito =  parseInt(prompt('Elige cual de los servicios de streaming quieres agregar a favoritos \n 1-Netflix \n 2-Disney Plus \n 3-Prime Video'))
  if (eleccionFavorito == 1){
    agregarFavorito('Netflix')
  } else if(eleccionFavorito ==2){
    agregarFavorito('Disney Plus')
  } else if(eleccionFavorito ==3){
    agregarFavorito('Prime Video')
  } else{
      alert ('No elegiste una opcion valida')
  }

}

else if(eleccionCategoria == 2){

  let eleccionFavorito = parseInt(prompt('Elige que redes sociales quieres agregar a favoritos  \n 1-Instagram \n 2-Twitter \n 3-Facebook'))  
  if (eleccionFavorito ==1){
      agregarFavorito('Instagram')
    }  else if(eleccionFavorito ==2){
      agregarFavorito('Twitter')
    }  else if(eleccionFavorito ==3){
      agregarFavorito('Facebook')    
    }  else{
        alert ('No elegiste una opcion valida')
    }
  
  }

else{
  alert ('Elige alguna de las 2 opciones anteriores')
}

confirmFavorito = confirm ('Deseas seguir agregando favoritos?')

}

console.log (favoritos)


























































































// const familia = [];
// let veces = parseInt(prompt('cuantas personas queres agregar?'));

// class Persona {
//   constructor(nombre,apellido, edad, estudioSecundario,saludo){
//     this.nombre = nombre,
//     this.apellido = apellido,
//     this.edad = edad,
//     this.estudioSecundario = estudioSecundario,
//     this.saludo = saludo
//   }

//   saludar(){
//     console.log(`${this.saludo} Mi nombre es ${this.nombre}`)
//   }

// }

// function agregarPersona(){
//   let nombre = prompt('decime tu nombre');
//   let apellido = prompt('decime tu apellido');
//   let edad = parseInt(prompt('decime tu edad'));
//   let saludo = prompt('dame un saludo');    
//   let estudios = confirm('tenes estudios secundarios?');
//   let nuevaPersona = new Persona(nombre,apellido,edad,estudios,saludo);
//   familia.push(nuevaPersona);
// }

// const saludoFamiliar = () => {
//     for (const persona of familia){
//       persona.saludar()
//     }
//   }

// while(isNaN(veces)){
//   alert('Si no queres agregar personas, pone 0!')
//   veces = parseInt(prompt('cuantas personas queres agregar?'));
// }

// if(!isNaN(veces)){
//   for(let i = 1; i <= veces; i++){
//     agregarPersona();
//     console.log(`Se agrego Persona numero ${i}`)
//   }
// } 

// console.log(familia)




















