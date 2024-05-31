
//funcion para hacer la union de sonidos a las teclas
function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//bucle para asignar los sonidos en las teclas
/*
Esta condicional "while" puede ser sustituida por "for"
while (contador < 9){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(instrumento)

    const idAudio = `#sonido_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function(){
        playSonido(idAudio);
   };
  
   contador = contador + 1;
}
*/

//optimización del codigo de condicional "while" utilizando "for"
//for(inicializacion; condicion; incremento del bucle)

for(let contador = 0; contador < listaDeTeclas.length; contador ++){
    //expresion resumida de contador = contador + 1 seria (contador ++)
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //console.log(contador);
    //console.log(instrumento);

    const idAudio = `#sonido_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function(){
        playSonido(idAudio);
   };

   //seccion de codigo donde tecla 'Enter' y 'Space' se le complementa la accesibilidad
   tecla.onkeydown = function(evento){

       if ( evento.code == 'Space' || evento.code === 'Enter'){
           tecla.classList.add('activa');
        }
        console.log(evento.code == 'Space' || evento.code === 'Enter')
        // uso de operador logico con (||) barras rectas

   }
   tecla.onkeyup =function(){
    tecla.classList.remove('activa');
   }

}
