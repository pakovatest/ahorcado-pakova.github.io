// ### VARIABLES ###


var palabras = [["Api", "Iterfasz entre usuario y servidor"],
 ["Desarollo", "Diseñador de paginas mobili"],
 ["github", "Herramienta para crear una branch"],
  ["Facebook", "Red Social mas conocida"], 
 ["html", "Esqueleto de una pagina web"], 
 ["Algoritmos", "Series de pasos que se ejecutan para resolver un tipo de problema"], 
 ["petanca", "Un juego"], ["higuera", "Un árbol"],
  ["Notepac", "Editor de texto y código libri"], 
 ["Servidor", "Un programa informático que procesa una aplicación  "],
  ["jirafa", "Un animal"], 
 ["luxemburgo", "Un país"], ["uruguay", "Un país"], 
 ["ilustracion", "Representación gráfica"],
  ["excursion", "Actividad en la naturaleza"], 
 ["empanadilla", "De la panadería"], 
 ["pastel", "De la pastelería"],
  ["colegio", "Lugar para estudiar"],
   ["carrera", "Competición"], 
  ["pitbull", "Insectos"]];

var palabra = "";


var rand;

var oculta = [];

var hueco = document.getElementById("palabra");

var cont = 6;

var buttons = document.getElementsByClassName('letra');

var btnInicio = document.getElementById("reset");



function generaPalabra() {
  rand = (Math.random() * 19).toFixed(0);
  palabra = palabras[rand][0].toUpperCase();
  console.log(palabra);
  pintarGuiones(palabra.length)
}

// Funcion para pintar los guiones de la palabra 639 taneman estengrafia
function pintarGuiones(num) {
  oculta.length=0;
  
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
   
  hueco.innerHTML = oculta.join("");
  
}

//Generar abecedario
function generaABC (a,z) {
  document.getElementById("abcdario").innerHTML = "";
  var i = a.charCodeAt(0), j = z.charCodeAt(0);
  var letra = "";
  for( ; i<=j; i++) {
    letra = String.fromCharCode(i).toUpperCase();
    document.getElementById("abcdario").innerHTML += "<button value='" + letra + "' onclick='intento(\"" + letra + "\")' class='letra' id='"+letra+"'>" + letra + "</button>";
    if(i==110) {
      document.getElementById("abcdario").innerHTML += "<button value='�' onclick='intento(\"�\")' class='letra' id='"+letra+"'>�</button>";
    }
  }
}

// Chequear intento
function intento(letra) {
  document.getElementById(letra).disabled = true;
  if(palabra.indexOf(letra) != -1) {
    for(var i=0; i<palabra.length; i++) {
      if(palabra[i]==letra) oculta[i] = letra;
    }
    hueco.innerHTML = oculta.join("");
    document.getElementById("acierto").innerHTML = "Palabra Correcta!";
    document.getElementById("acierto").className += "acierto verde";
  }else{
    cont--;
    document.getElementById("intentos").innerHTML = cont;
    document.getElementById("acierto").innerHTML = "Palabra Incorrecta!";
    document.getElementById("acierto").className += "acierto rojo";
    document.getElementById("image"+cont).className += "fade-in";
  }
  compruebaFin();
  setTimeout(function () { 
    document.getElementById("acierto").className = ""; 
  }, 800);
}

// Obtener pista
function pista() {
  document.getElementById("hueco-pista").innerHTML = palabras[rand][1];
}

// Comprueba si ha finalizado document.getElementById("msg-final").innerHTML = palabras[rand][0].toUpperCase();
function compruebaFin() {
  if( oculta.indexOf("_") == -1 ) {
    document.getElementById("msg-final").innerHTML = "Felicidades";
    document.getElementById("msg-final").className += "zoom-in";
    document.getElementById("palabra").className += " encuadre";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("reset").innerHTML = "Iniciar";
    btnInicio.onclick = function() { location.reload() };
  }else if( cont == 0 ) {
    document.getElementById("msg-final").innerHTML = "Perdiste";
    hueco.innerHTML = oculta[i] = (palabras[rand][0].toUpperCase());
    
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    /**/
    document.getElementById("msg-final").className += "zoom-in";
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    
    document.getElementById("reset").innerHTML = "Empezar";
    btnInicio.onclick = function () { location.reload() };
  }
}

// Restablecer juego
function inicio() {
  generaPalabra();
  pintarGuiones(palabra.length);
  generaABC("a","z");
  cont = 6;
  document.getElementById("intentos").innerHTML=cont;
}

window.onload = inicio();