let preguntas = [
  {
    pregunta: "1. La franquicia nació de la mano de Capcom y del desarrollador Shinji Mikami, quien bautizó a la saga en el territorio nipón como Biohazard. Por temas de derechos, en occidente fue rebautizada como Resident Evil. ¿Cómo se escogió el nombre?",
    opcion: ["A.Fue idea de Shinji Mikami y el equipo de desarrollo", "B.La filial de Capcom en Estados Unidos sugirió el nombre", "C.Se decidió mediante un concurso en las oficias de Capcom", "D.Era una de las opciones para nombrar a la franquicia en lugar de Biohazard"],
    respuesta: 1,
  },
  {
    pregunta: "prueba",
    opcion: ["AAA", "bbb", "cc", "dd"],
    respuesta: 2,
  },
];

let repetir2=true;
let index = 0;
let puntaje = 0;
let intento = 0;
let mal = 0;
let repetir = true;
let puntos = document.getElementById("cajapuntos");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let span3 = document.getElementById("span3");
let span4 = document.getElementById("span4");
let cajatiempo = document.getElementById("cajatiempo");
let titulopreg = document.getElementById("titulo");
let opcion = document.querySelectorAll(".opcion");
let boton = document.getElementById("siguiente");
let cincuenta = document.getElementById("cincuenta");

function imprimirpreguntas(i) {
  span1.innerHTML = preguntas[i].opcion[0];
  span2.innerHTML = preguntas[i].opcion[1];
  span3.innerHTML = preguntas[i].opcion[2];
  span4.innerHTML = preguntas[i].opcion[3];
  titulopreg.innerHTML = preguntas[i].pregunta;
}

imprimirpreguntas(index);

opcion.forEach(function (opcion) {
  opcion.addEventListener("click", () => {
    validar(opcion);
  });
});

boton.onclick = function(){
  alert("diste clic");
  siguiente(opcion);
}

function siguiente(opcion){
  if(index>=(preguntas.length-1 )){
    alert("acabaste pendeja");
  }
  index ++;
  repetir = true;
  imprimirpreguntas(index);
  opcion.forEach(function(opcion){
    opcion.classList.remove('correcto');
    opcion.classList.remove('incorrecto');
  });
  
}


function validar(opcion) {
    intento ++;

  op1 = opcion.dataset.opt;

 

 while (repetir) {
    if (op1 == preguntas[index].respuesta) {
        alert("esa es la respuesta correcta");
        puntaje++;
        opcion.classList.add('correcto');
        puntos.innerHTML = puntaje;
        repetir = false;
        console.log(op1);
        break;
      }
      else{
          mal ++;
          opcion.classList.add('incorrecto');
          repetir = false;
        break;        
      }
    
      
 }

}

function temporizador(){
  let tiempo = 200;
  let min = 0;
  let seg = 0;
  let contador = 0;
  let timer = setInterval(function(){
    contador ++;
    min = Math.floor((tiempo-contador)/60);
    seg = tiempo - min * 60 - contador;
    cajatiempo.innerHTML = `${min} : ${seg}`
  },1000);

  if(contador==tiempo)clearInterval(timer);
  

}

temporizador();

cincuenta.addEventListener('click',()=>{
botoncincuenta();

 
});


function botoncincuenta(){
 while(repetir2){
  span1.dataset.opt;
 span2.dataset.opt;
 span3.dataset.opt;
 span4.dataset.opt;
 console.log(span1 , span2 , span3 , span4);


 if (span1.dataset.opt==preguntas[index].respuesta) {
   span2.innerHTML = "";
   span3.innerHTML = "";
   repetir2 = false;
 }
 if (span2.dataset.opt==preguntas[index].respuesta) {
  span1.innerHTML = "";
  span4.innerHTML = "";
  repetir2 = false;
  
}
if (span3.dataset.opt==preguntas[index].respuesta) {
  span1.innerHTML = "";
  span2.innerHTML = "";
  repetir2 = false;
}
if (span4.dataset.opt==preguntas[index].respuesta) {
  span2.innerHTML = "";
  span3.innerHTML = "";
  repetir2 = false;
}
 }
}