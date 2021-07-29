let preguntas = [
  {
    pregunta: "1. La franquicia nació de la mano de Capcom y del desarrollador Shinji Mikami, quien bautizó a la saga en el territorio nipón como Biohazard. Por temas de derechos, en occidente fue rebautizada como Resident Evil. ¿Cómo se escogió el nombre?",
    opcion: ["A.Fue idea de Shinji Mikami y el equipo de desarrollo", "B.La filial de Capcom en Estados Unidos sugirió el nombre", "C.Se decidió mediante un concurso en las oficias de Capcom", "D.Era una de las opciones para nombrar a la franquicia en lugar de Biohazard"],
    respuesta: 1,
    tip:"No lo se viejo me estoy llamando llama despues"
  },
  {
    pregunta: "prueba",
    opcion: ["AAA", "bbb", "cc", "dd"],
    respuesta: 2,
  },
  {
    pregunta: "prueba",
    opcion: ["AAA", "bbb", "cc", "dd"],
    respuesta: 2,
  },
];

let repetir3 = true;
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
let cajadinero = document.getElementById("cajadinero");
let llamada = document.getElementById("llamada");
let display = document.getElementById("preguntaScreen");
let display2 = document.getElementById("respuestaScreen");
let finalizar = document.getElementById("finalizar");
let preguntastotales = document.getElementById("preguntastotales");
let acumulado = document.getElementById("dinero");
let correctiyo = document.getElementById("correctiyo");
let correcto = document.getElementById("right ");
let wrong = document.getElementById("mal");
console.log(correcto);
let dinero = 0;

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
  siguiente(opcion);
  
  
}

function siguiente(opcion){
  if(index>=(preguntas.length-1 )){
    mostrarResultado();
  }
  while(index==0){
    alert("debe seleccionar una respuesta valida");
    break;
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
    

  op1 = opcion.dataset.opt;

  
 

 while (repetir) {
  
    if (op1 == preguntas[index].respuesta) {
        alert("esa es la respuesta correcta");
        puntaje++;
        dinero = dinero + 10000 ; 
        opcion.classList.add('correcto');
        puntos.innerHTML = puntaje;
        cajadinero.innerHTML = dinero;
        repetir = false;
        intento ++;
        
        console.log(op1);
        break;
      }
      else if(op1 != preguntas[index].respuesta){
        mal ++;
          opcion.classList.add('incorrecto');
          repetir = false;
          intento ++;
          
          alert(`lo sentimos ha seleccionado una respuesta erronea su dinero ganado es de ${dinero} y su puntaje es de ${puntaje}`);
          mostrarResultado();
        break;
      }
          
  
      }
      span1.style.display = 'block';
      span2.style.display = 'block';
      span3.style.display = 'block';
      span4.style.display = 'block';
      
      
      
 

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

  if(contador==tiempo)clearInterval(timer),mostrarResultado();;
  

}

temporizador();

cincuenta.addEventListener('click',()=>{
botoncincuenta();

 
});


function botoncincuenta(opcion){
 while(repetir2){
  span1.dataset.opt;
 span2.dataset.opt;
 span3.dataset.opt;
 span4.dataset.opt;
 
 
 
 
 

 if (span1.dataset.opt==preguntas[index].respuesta) {
   span2.style.display = 'none';
   span3.style.display = 'none';
   repetir2 = false;
   break;
 }
 if (span2.dataset.opt==preguntas[index].respuesta) {
  span1.style.display = 'none';
  span4.style.display = 'none';
  repetir2 = false;
  break;
  
}
if (span3.dataset.opt==preguntas[index].respuesta) {
  span1.style.display = 'none';
  span2.style.display = 'none';
  repetir2 = false;
  break;
}
if (span4.dataset.opt==preguntas[index].respuesta) {
  span2.style.display = 'none';
  span3.style.display = 'none';
  repetir2 = false;
  break;
}



 }
 alert("Ha usado su comodin mi amigo , ya no podra utilizarlo nuevamente");

 
}

llamada.addEventListener('click',() => {

  while(repetir3)repetir3=false,alert(preguntas[index].tip);

});


finalizar.addEventListener('click',() => {

  let seguro = prompt("Esta seguro que desea retirarse?");
  seguro.toLocaleLowerCase();

  while(seguro=="si"){
    mostrarResultado();
  }

  return;

});




function mostrarResultado(){

  display.style.display = 'none';
  display2.style.display = 'block';

  preguntastotales.innerHTML = intento;
  acumulado.innerHTML = `Felicidades Obtuviste $${dinero}`;
  correctiyo.innerHTML = `lo lograste en ${puntaje} intentos sigue asi!`;
  correcto.innerHTML = `Tuviste un total de ${puntaje} respuestas correctas`;
  

}