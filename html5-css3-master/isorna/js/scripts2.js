// JavaScript Document

$(document).ready(function() {
 
    console.log("welcome 2");
	
	
	$( "a.conSubMenu" ).click(function( event ) {
 
        alert( "As you can see, the link no longer took you to jquery.com" );
 
        event.preventDefault();
 
    });
	
 
});


// Geolocalizacion con google maps
function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
};

var map;
var latitud;
var longitud;

$(document).ready(function() {
	localizame(); /*Cuando cargue la página, cargamos nuestra posición*/   
});

function localizame() {
	if (navigator.geolocation) { /* Si el navegador tiene geolocalizacion */
		navigator.geolocation.getCurrentPosition(coordenadas, errores);
	}else{
		alert('Oops! Tu navegador no soporta geolocalización. Bájate Chrome, que es gratis!');
	}
}

function coordenadas(position) {
	latitud = position.coords.latitude; /*Guardamos nuestra latitud*/
	longitud = position.coords.longitude; /*Guardamos nuestra longitud*/
	cargarMapa();
}

function errores(err) {
	/*Controlamos los posibles errores */
	if (err.code == 0) {
	  alert("Oops! Algo ha salido mal");
	}
	if (err.code == 1) {
	  alert("Oops! No has aceptado compartir tu posición");
	}
	if (err.code == 2) {
	  alert("Oops! No se puede obtener la posición actual");
	}
	if (err.code == 3) {
	  alert("Oops! Hemos superado el tiempo de espera");
	}
}
 
function cargarMapa() {
	var latlon = new google.maps.LatLng(latitud,longitud); /* Creamos un punto con nuestras coordenadas */
	var myOptions = {
		zoom: 17,
		center: latlon, /* Definimos la posicion del mapa con el punto */
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};/*Configuramos una serie de opciones como el zoom del mapa y el tipo.*/
	map = new google.maps.Map($("#map_canvas").get(0), myOptions); /*Creamos el mapa y lo situamos en su capa */
	
	var coorMarcador = new google.maps.LatLng(latitud,longitud); /Un nuevo punto con nuestras coordenadas para el marcador (flecha) */
		
	var marcador = new google.maps.Marker({
/*Creamos un marcador*/
		position: coorMarcador, /*Lo situamos en nuestro punto */
		map: map, /* Lo vinculamos a nuestro mapa */
		title: "Dónde estoy?" 
	});
}