// JavaScript Document

/*
	Elementos del lenguage JavaScript
*/

// 1. Objetos ya creados del lenguaje
console.log(document);
// 2. Variables
var cadenaDeTexto = 'me llamo pepito';
var numero = 123456;
var coleccion = ['azul', 'rojo', 'verde', 345, 'marron'];// empiezan por cero y van en orden
console.log(cadenaDeTexto, numero, coleccion);
var objetoGato = {
	raza: 'siames',
	edad: 3,
	peso: '15kg'
};
console.log(objetoGato);
console.log(objetoGato.raza);

// 3. Funciones
function miFuncionGuapa (parametro1, parametro2) {
	console.log(parametro1, parametro2);
	console.log(arguments);
};

miFuncionGuapa('hola', 36, 'adios');

var miOtraFuncion = function (parametro1) {
	console.log(parametro1);
};

var objetoQueSaluda = {
	holaQueTal: miOtraFuncion
};

objetoQueSaluda.holaQueTal('Pepe');

// 4. Estructuras de control

function comprobarPregunta (valorDeRespuesta, valorDeRespuestaTexto) {
	if (valorDeRespuesta > 10) {
		console.log('Es mayor que 10');
	} else if (valorDeRespuesta == 10 ) {
		console.log('Es igual que 10');
	} else {
		console.log('Es menor que 10');
	}

	if (valorDeRespuestaTexto == null) {
		console.log('No has enviado texto.');
	} else {
		console.log('Tu valor de respuesta es: ' + valorDeRespuestaTexto);
	}
};

function bucles (inicio, fin) {
	var numero2 = 1000;
	numero2++;// suma 1
	numero2--;// resta 1
	var inicio2 = inicio;// copia el valor antes de que se modifique
	
	for (inicio; inicio < fin; inicio++) {
		console.log('inicio: ' + inicio, 'fin: ' + fin);
	}
	
	while (inicio2 < fin) {
		console.log('inicio2: ' + inicio2, 'fin: ' + fin);
		inicio2++;
		inicio2++;
	}
};

// Miercoles 18 de Junio
// Trabajar con el formulario
var formulario = document.getElementById("formulario");
var campoNombre = document.getElementById("nombre"), campoTexto = document.getElementById("texto"), campoEdad = document.getElementById("edad");

function validarFormulario (event) {
	event.preventDefault();
	
	var estaOk = true;
	
	if (campoNombre.value == "") {
		campoNombre.className = campoNombre.className + " error";
		estaOk = false;
	}
	
	if (campoTexto.value == "") {
		campoTexto.className = "error";
		estaOk = false;
	}
	
	if (Number(campoEdad.value) < 18) {
		campoEdad.className = "error";
		estaOk = false;
	}
	
	if (estaOk == true) {
		formulario.submit();
	}
	
};

// Controlar el evento submit del formulario
formulario.addEventListener("submit", validarFormulario);

function quitarError (event) {
	if ((this.tagName == "SELECT" && Number(this.value) > 17) || (this.value != "")) {
		this.className = this.className.replace("error", "");
	}
}

campoNombre.addEventListener("keyup", quitarError);
campoTexto.addEventListener("keyup", quitarError);
campoEdad.addEventListener("change", quitarError);

var menuDesplegable = document.getElementById('menuDesplegable');

function desplegarMenu (event) {
	event.preventDefault();
	
	if (event.srcElement.className == "conSubMenu") {
		if (event.srcElement.parentNode.children[1].className == "visible") {
			event.srcElement.parentNode.children[1].className = "";
		} else {
			event.srcElement.parentNode.children[1].className = "visible";
		}
	}
}

menuDesplegable.addEventListener('click', desplegarMenu);

