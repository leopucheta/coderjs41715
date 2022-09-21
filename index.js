//1ra Entrega de Proyecto Final__________________________________________________________________________________________


let contenedor = document.getElementById('favoritos');

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

const programa = () =>{
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
}

contenedor.innerHTML = `<p> Hola ${nombreUsuario}, Comenza a agregar favoritos </p>`

favoritos.forEach(element => {
  let parrafo = document.createElement('p')
  parrafo.innerHTML = ` Nombre: ${element.nombre} / Categoria: ${element.categoria}  `   
  contenedor.appendChild(parrafo)
});