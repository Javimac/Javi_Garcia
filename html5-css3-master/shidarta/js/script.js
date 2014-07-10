// JavaScript Document

/*var menuDesplegable = document.getElementById('menuDesplegable');

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

*/

var contacta = document.getElementById("contacta");
var campnombre = document.getElementById("firstname"), campapellido = document.getElementById("lastname"),campofechanacimiento = document.getElementById("fechanac"), email = document.getElementById("correo"),
campexplicanos = document.getElementById("texto"); 


function contacta (event) {
	event.preventDefault();
	
	var estaOk = true;
	
	if (campNombre.value == "") {
		campNombre.className = "error";
		estaOk = false;
	}
	
	if (campapellido.value == "") {
		campapellido.className = "error";
		estaOk = false;
	}
	
	if (campofechanacimiento.value == "") {
		campofechanacimiento.className = "error";
		estaOk = false;
	}

	if (email.value == "") {
		email.className = "error";
		estaOk = false;
	}
	
	if (campexplicanos.value == "") {
		campexplicanos.className = "error";
		estaOk = false;
	}
	
	if (estaOk == true) {
		formulario.submit();
	}
	
};
