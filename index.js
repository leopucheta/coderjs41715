//DESAFIO COMPLEMENTARIO______________________________________________________________________________________________________

const familia = [];
let veces = parseInt(prompt('cuantas personas queres agregar?'));

class Persona {
  constructor(nombre,apellido, edad, estudioSecundario,saludo){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.estudioSecundario = estudioSecundario,
    this.saludo = saludo
  }

  saludar(){
    console.log(`${this.saludo} Mi nombre es ${this.nombre}`)
  }

}

function agregarPersona(){
  let nombre = prompt('decime tu nombre');
  let apellido = prompt('decime tu apellido');
  let edad = parseInt(prompt('decime tu edad'));
  let saludo = prompt('dame un saludo');
  let estudios = confirm('tenes estudios secundarios?');
  let nuevaPersona = new Persona(nombre,apellido,edad,estudios,saludo);
  familia.push(nuevaPersona);
}

const saludoFamiliar = () => {
    for (const persona of familia){
      persona.saludar()
    }
  }

while(isNaN(veces)){
  alert('Si no queres agregar personas, pone 0!')
  veces = parseInt(prompt('cuantas personas queres agregar?'));
}

if(!isNaN(veces)){
  for(let i = 1; i <= veces; i++){
    agregarPersona();
    console.log(`Se agrego Persona numero ${i}`)
  }
} 

console.log(familia)




















