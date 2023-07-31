/*const myElement = document.getElementById('contactame');

myModal.addEventListener('shown.bs.modal', () => {
  myElement.focus()
}); */


let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
}); 

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Maria del Carmen Cortez')
  .pauseFor(300)
  .deleteChars(23)
  .typeString('Desarrolladora Web')
  .start();


