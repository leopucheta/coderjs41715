// Entrega de Proyecto Final____________________LEONARDO PUCHETA______________________________________________________________

const addFavBtn = document.getElementById('addFavBtn')
const login = document.getElementById('login')
const userWelcome = document.getElementById ('userWelcome')
const simText = document.getElementById ('simText')
const container = document.getElementById ('container')
const favContainer = document.getElementById('favContainer')


let contenedor = document.getElementById('favoritos');


const favoritos = [];
let baseDeDatos = [];

class Link {
  constructor (nombre, categoria, img, url){
  this.nombre = nombre
  this.categoria = categoria
  this.img = img
  this.url = url
  }
}

//Dbase
const traerBaseDeDatos = async () =>{
  try {
   const respuesta = await fetch('baseDeDatos.json')
   const resultado = await respuesta.json()
   baseDeDatos = resultado


  } catch (e) {
    console.log(e)
  }
}


//por cada elemento pusheado en favoritos, tiene que crear una imagen con un link en algun lado del container.
function pintarFavoritos () {
  favContainer.innerHTML = ""
  favoritos.forEach(element => {  
    const favoritoPintado = document.createElement('a') 
    favoritoPintado.setAttribute ('href', `${element.url} `)  
    favoritoPintado.setAttribute ('target', '_blank')      
    favoritoPintado.innerHTML = ` <img src="${element.img}">  `
    favContainer.appendChild(favoritoPintado)
 
    
  });
 
  }
let  nombreUsuario = '';

function escucharLoginBtn () {
  nombreUsuario = document.getElementById ('nombreUsuario').value
  localStorage.setItem ('username', nombreUsuario)
  userWelcome.innerText = `Bienvenido ${nombreUsuario} `
  simText.innerText = `Comienza a agregar tus favoritos`
  traerBaseDeDatos()
  document.querySelector('form').style.display="none"
  
  
  
  }


document.querySelector('form').addEventListener ("submit", escucharLoginBtn)


function tresBotones (categoria){

  document.querySelector ('#volver').style.display="block"
  document.querySelector ('#volver').addEventListener ('click', ()=>{
    programa()
  })


  document.querySelector ('#SOCIAL').style.display='none'
  document.querySelector ('#STREAMING').style.display='none'
  const tresBotonesStreaming = baseDeDatos.filter ( element => element.categoria == categoria)
  simText.innerText = `Selecciona tus favoritos de la categoria`
  document.querySelector ('#botonesCategoria').innerHTML=""
  tresBotonesStreaming.forEach (element => {
  let boton = document.createElement ('button')
  boton.className = ' streaming btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold'
  boton.innerText = `${element.nombre}`
  let nombre = element.nombre
  boton.addEventListener('click', () =>{
    favoritos.push (baseDeDatos.find(element => element.nombre == nombre))
    pintarFavoritos()
    localStorage.setItem('favoritos',  JSON.stringify(favoritos))
    Toastify({
      text: "FAVORITO AGREGADO EXITOSAMENTE",
      className: "success",
      style: {
        background: "rgb(13, 202, 240)",
        color: "black",
        borderRadius: "10000px",
        textAlign: "center",
        fontSize: "10px",
        fontWeight: "bold"
      }
    }).showToast();
  })

  
  document.querySelector ('#botonesCategoria').appendChild (boton)
  })

}

  let eleccionCategoria = () => {
    login.addEventListener ('click', () => {
        tresBotones('SOCIAL')
    })
    addFavBtn.removeEventListener ('click', programa)
    addFavBtn.addEventListener ('click', () => {
      tresBotones('STREAMING')
      localStorage.getItem
    } )
   }


const programa = () =>{  
  userWelcome.innerText = ` ${storage} `
  simText.innerText = `Elige en que categoria quieres agregar favoritos`
  addFavBtn.style.display ='none'

  document.querySelector ('#SOCIAL').style.display='block'
  document.querySelector ("#SOCIAL").addEventListener ('click', ()=>{
    tresBotones('SOCIAL')
  })

  document.querySelector ('#STREAMING').style.display='block'
  document.querySelector ("#STREAMING").addEventListener ('click', ()=>{
    tresBotones('STREAMING')


  })
  document.querySelector ('#volver').style.display='none'
  document.querySelector ('#botonesCategoria').innerHTML=""


}
addFavBtn.addEventListener ("click", programa)



let storage = localStorage.getItem ('username')
let storedFavs = localStorage.getItem ('favoritos')

if (storage){


  userWelcome.innerText = `Bienvenido ${storage} `
  simText.innerText = `Comienza a agregar tus favoritos`
  traerBaseDeDatos()
  document.querySelector('form').style.display="none"
  addFavBtn.style.display="block"
  document.querySelector ('#logoutBtn').style.display="block"
  document.querySelector ('#logoutBtn').addEventListener('click', ()=>{
    localStorage.removeItem ('username')
    localStorage.removeItem ('favoritos')
    window.location.reload()
    
  })  

  if (storedFavs){
    document.write (`${storedFavs}`)
  }
}




//Crear elementos una vez que se pushean al Array de favoritos ✅
// que los favoritos sean clickeables ✅
//Poder usar SOCIAL ✅
// crear un boton de logout que permita sacar del storage al usuario✅
//eliminar el login una vez que se inicia sesion ✅
//agregar boton para volver a categorias ...✅
//esconder boton de agregar favoritos antes de iniciar sesion ✅
//borrar input de login mientras se elije la categoria ✅








