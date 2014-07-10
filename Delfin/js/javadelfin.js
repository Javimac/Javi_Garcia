$(document).ready(function () {
	var alturaDocumento = $(document).height() - $('footer').height();
	
	$('html').height(alturaDocumento + 'px');
	
	// cambiar imagenes segun el ancho del documento
	
	if ($(document).width() < 768) {
		$('.carousel-inner img').each(function(){
			var nuevaImagen = $(this).attr('src').replace('.jpg', '.small.jpg');
			
			$(this).attr('src', nuevaImagen);
		});
	}
	
$('#animated').mouseover(function(event){
	$(this).addClass('animated bounce');
}).mouseout(function(event){
	$(this).removeClass('animated bounce');
});	
    
$('#animated1').mouseover(function(event){
	$(this).addClass('animated bounce');
}).mouseout(function(event){
	$(this).removeClass('animated bounce');
});	    

$('#animated2').mouseover(function(event){
	$(this).addClass('animated bounce');
}).mouseout(function(event){
	$(this).removeClass('animated bounce');
});	    
    
	// mapa de google
	
	if ($('#map-canvas').length > 0) {
		//mapa

		var map;
		var TILE_SIZE = 256;
		var TrasnportesDelfin = new google.maps.LatLng(37.611008, -1.035689);
		
		function bound(value, opt_min, opt_max) {
		  if (opt_min != null) value = Math.max(value, opt_min);
		  if (opt_max != null) value = Math.min(value, opt_max);
		  return value;
		}
		
		function degreesToRadians(deg) {
		  return deg * (Math.PI / 180);
		}
		
		function radiansToDegrees(rad) {
		  return rad / (Math.PI / 180);
		}
		
		/** @constructor */
		function MercatorProjection() {
		  this.pixelOrigin_ = new google.maps.Point(TILE_SIZE / 2,
			  TILE_SIZE / 2);
		  this.pixelsPerLonDegree_ = TILE_SIZE / 360;
		  this.pixelsPerLonRadian_ = TILE_SIZE / (2 * Math.PI);
		}
		
		MercatorProjection.prototype.fromLatLngToPoint = function(latLng,
			opt_point) {
		  var me = this;
		  var point = opt_point || new google.maps.Point(0, 0);
		  var origin = me.pixelOrigin_;
		
		  point.x = origin.x + latLng.lng() * me.pixelsPerLonDegree_;
		
		  // Truncating to 0.9999 effectively limits latitude to 89.189. This is
		  // about a third of a tile past the edge of the world tile.
		  var siny = bound(Math.sin(degreesToRadians(latLng.lat())), -0.9999,
			  0.9999);
		  point.y = origin.y + 0.5 * Math.log((1 + siny) / (1 - siny)) *
			  -me.pixelsPerLonRadian_;
		  return point;
		};
		
		MercatorProjection.prototype.fromPointToLatLng = function(point) {
		  var me = this;
		  var origin = me.pixelOrigin_;
		  var lng = (point.x - origin.x) / me.pixelsPerLonDegree_;
		  var latRadians = (point.y - origin.y) / -me.pixelsPerLonRadian_;
		  var lat = radiansToDegrees(2 * Math.atan(Math.exp(latRadians)) -
			  Math.PI / 2);
		  return new google.maps.LatLng(lat, lng);
		};
		
		function createInfoWindowContent() {
		  var numTiles = 1 << map.getZoom();
		  var projection = new MercatorProjection();
		  var worldCoordinate = projection.fromLatLngToPoint(TrasnportesDelfin);
		  var pixelCoordinate = new google.maps.Point(
			  worldCoordinate.x * numTiles,
			  worldCoordinate.y * numTiles);
		  var tileCoordinate = new google.maps.Point(
			  Math.floor(pixelCoordinate.x / TILE_SIZE),
			  Math.floor(pixelCoordinate.y / TILE_SIZE));
		
		  return [
			'Transportes Delfin González S.L.',
			'Dirección: Av Jose Luis Meseguer ',
            '30394 Cartagena, Murcia',
			'Teléfono: +34 968162400',
			/**
			'LatLng: ' + TrasnportesDelfin.lat() + ' , ' + TrasnportesDelfin.lng(),
			'World Coordinate: ' + worldCoordinate.x + ' , ' +
			  worldCoordinate.y,
			'Pixel Coordinate: ' + Math.floor(pixelCoordinate.x) + ' , ' +
			  Math.floor(pixelCoordinate.y),
			'Tile Coordinate: ' + tileCoordinate.x + ' , ' +
			  tileCoordinate.y + ' at Zoom Level: ' + map.getZoom()
			  */
		  ].join('<br>');
		}
		
		function initialize() {
		  var mapOptions = {
			zoom: 15,
			center: TrasnportesDelfin
		  };
		
		  map = new google.maps.Map(document.getElementById('map-canvas'),
			  mapOptions);
		
		  var coordInfoWindow = new google.maps.InfoWindow();
		  coordInfoWindow.setContent(createInfoWindowContent());
		  coordInfoWindow.setPosition(TrasnportesDelfin);
		  coordInfoWindow.open(map);
		
		  google.maps.event.addListener(map, 'zoom_changed', function() {
			coordInfoWindow.setContent(createInfoWindowContent());
			coordInfoWindow.open(map);
		  });
		}
		
		google.maps.event.addDomListener(window, 'load', initialize);
	} 
	
});