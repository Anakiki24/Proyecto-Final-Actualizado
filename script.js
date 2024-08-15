// CRUD
// Crear Leer Actualizar Borrar 

//alert("Hola Mundo! <3");

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

// Usa el punto es para llamar a una accion del objeto 
//Acciones se distinguen pr los parentesis()
typewriter
  .pauseFor(2500)
  .typeString('Ana Lilia Serrano Barrera')
  .pauseFor(300)
  .deleteAll()
  .typeString('Analist')
  .pauseFor(1000)
  .start();


  
