//2da Entrega de Proyecto Final__________________________________________________________________________________________




const addFavBtn = document.getElementById('addFavBtn')
const login = document.getElementById('login')
const userWelcome = document.getElementById ('userWelcome')
const simText = document.getElementById ('simText')
const container = document.getElementById ('container')


let contenedor = document.getElementById('favoritos');


const favoritos = [];
const baseDeDatos = [];

class Link {
  constructor (nombre, categoria, url, img){
  this.nombre = nombre
  this.categoria = categoria
  this.url = url
  this.img = img
  }
}



function agregarLink (nombre, categoria){
  let agregarLink = new Link (nombre, categoria)
  baseDeDatos.push (agregarLink)
}

function agregarFavorito (nombreFavorito){
  favoritos.push (baseDeDatos.find(element => element.nombre == nombreFavorito))
    
}
 


let  nombreUsuario = '';

function escucharLoginBtn () {
  nombreUsuario = document.getElementById ('nombreUsuario').value
  localStorage.setItem ('username', nombreUsuario)
  userWelcome.innerText = `Bienvenido ${nombreUsuario} `
  simText.innerText = `Comienza a agregar tus favoritos`
  }

  function escucharSocialBtn (){
    
  }

login.addEventListener ("click", escucharLoginBtn)



function tresBotones (){
  const tresBotones = baseDeDatos.filter ( element => element.categoria == 'STREAMING')
  container.innerHTML = ''
  tresBotones.forEach (element => {
  let boton = document.createElement ('button')
  boton.className = ' streaming btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold'
  boton.innerText = `${element.nombre}`  
  let nombre = element.nombre
  boton.addEventListener('click', () =>{
    favoritos.push (baseDeDatos.find(element => element.nombre == nombre))    
    console.log(favoritos)
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
  container.appendChild (boton)
  })
 
}






let variableIf = ''

  let eleccionCategoria = () => {

    userWelcome.innerText = ` ${nombreUsuario} `
    simText.innerText = `Elige en que categoria quieres agregar favoritos`
    addFavBtn.innerText = `STREAMING`
    login.innerText = `SOCIAL`
    login.removeEventListener ('click', escucharLoginBtn)
    login.addEventListener ('click', () => {
      variableIf = 'SOCIAL'
    })
    addFavBtn.removeEventListener ('click', programa)
    addFavBtn.addEventListener ('click', () => {
      tresBotones()

    } )
   }  




//Dbase
//streaming
agregarLink('Disney Plus', 'STREAMING')
agregarLink('Netflix', 'STREAMING')
agregarLink('Prime Video', 'STREAMING')

//social
agregarLink('Instagram', 'SOCIAL')
agregarLink('Twitter', 'SOCIAL')
agregarLink('Linkedin', 'SOCIAL')








const programa = () =>{

  eleccionCategoria();

  favoritos.forEach(element => {
    let parrafo = document.createElement('p')
    parrafo.innerHTML = ` Nombre: ${element.nombre} / Categoria: ${element.categoria}  `   
    contenedor.appendChild(parrafo)
  });
  
}


addFavBtn.addEventListener ("click", programa)


let storage = localStorage.getItem ('username')

if (storage){ 
  userWelcome.innerText = `Bienvenido ${storage} `
  simText.innerText = `Comienza a agregar tus favoritos`
}
