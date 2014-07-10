var menuDesplegable = document.getElementById('menuDesplegable');

function desplegarMenu (event) {
	
	
	if (event.srcElement.className == "subMenu") {
		event.preventDefault();
		if (event.srcElement.parentNode.children[1].className == "visible") {
			event.srcElement.parentNode.children[1].className = "";
		} else {
			event.srcElement.parentNode.children[1].className = "visible";
		}
	}
}

menuDesplegable.addEventListener('click', desplegarMenu);





window.addEventListener('load', slideShow, false);

function slideShow() {
	var globals = {
    	slideDelay: 1500,
        fadeDelay: 35,
        wrapperID: "slideShowImages",
        buttonID: "slideShowButton",
        buttonStartText: "Start Slide Show",
        buttonStopText: "Stop Slide Show",
        wrapperObject: null,
        buttonObject: null,
        slideImages: [],
        slideShowID: null,
        slideShowRunning: true,
        slideIndex: 0
	}
    // Initialize globals
    initializeGlobalsData();
    if ( insufficientSlideShowMarkupData() ) {
    	return;
	}
    
    if (globals.slideImages.length == 1) {
    	return;
	}
    initializeSlideShowMarkupData();
    globals.wrapperObject.addEventListener('click', toggleSlideShowData, false);
    if (globals.buttonObject) {
    	globals.buttonObject.addEventListener('click', toggleSlideShowData, false);
    }
    startSlideShow();
    function initializeGlobalsData() {
    	globals.wrapperObject = (document.getElementById(globals.wrapperID) ? document.getElementById(globals.wrapperID) : null);
        globals.buttonObject = (document.getElementById(globals.buttonID) ? document.getElementById(globals.buttonID) : null);
        if (globals.wrapperObject) {
        globals.slideImages = (globals.wrapperObject.querySelectorAll('img') ? globals.wrapperObject.querySelectorAll('img') : []);
	}
   }
   function insufficientSlideShowMarkupData() {
   if (!globals.wrapperObject) {
   	if (globals.buttonObject) {
    	globals.buttonObject.style.display = "none";
    }
    return true;
   }
   if (!globals.slideImages.length) {
   	if (globals.wrapperObject) {
    	globals.wrapperObject.style.display = "none";
    }
		if (globals.buttonObject) {
			globals.buttonObject.style.display = "none";
        }
		return true;
   		}
   		return false;
	}
	function initializeSlideShowMarkupData() {
    var slideWidthMax = maxSlideWidthData();
    var slideHeightMax = maxSlideHeightData();
    globals.wrapperObject.style.position = "relative";
    globals.wrapperObject.style.overflow = "hidden";
    globals.wrapperObject.style.width = slideWidthMax + "px";
    globals.wrapperObject.style.height = slideHeightMax + "px";
    var slideCount = globals.slideImages.length;
    for (var i = 0; i < slideCount; i++) {
    	globals.slideImages[i].style.opacity = 0;
        globals.slideImages[i].style.position = "absolute";
        globals.slideImages[i].style.top = (slideHeightMax - globals.slideImages[i].getBoundingClientRect().height) / 2 + "px";
        globals.slideImages[i].style.left = (slideWidthMax - globals.slideImages[i].getBoundingClientRect().width) / 2 + "px"; 
        }
        globals.slideImages[0].style.opacity = 1; if (globals.buttonObject) { globals.buttonObject.textContent = globals.buttonStopText;
        }
    }
    function maxSlideWidthData() {
    var maxWidth = 0;
    var maxSlideIndex = 0;
    var slideCount = globals.slideImages.length;
    for (var i = 0; i < slideCount; i++) {
        if (globals.slideImages[i].width > maxWidth) {
        maxWidth = globals.slideImages[i].width;
        maxSlideIndex = i;
        }
    }
    return globals.slideImages[maxSlideIndex].getBoundingClientRect().width;
    }
    function maxSlideHeightData() {
    var maxHeight = 0;
    var maxSlideIndex = 0;
    var slideCount = globals.slideImages.length;
    	for (var i = 0; i < slideCount; i++) {
        if (globals.slideImages[i].height > maxHeight) {
        maxHeight = globals.slideImages[i].height; maxSlideIndex = i;
        }
    }
    return globals.slideImages[maxSlideIndex].getBoundingClientRect().height;
    }
    function startSlideShow() {
    globals.slideShowID = setInterval(transitionSlidesData, globals.slideDelay);
    }
    function haltSlideShow() {
    clearInterval(globals.slideShowID);
    }
    function toggleSlideShowData() {
    if (globals.slideShowRunning) {
    haltSlideShow();
    if (globals.buttonObject) {
    globals.buttonObject.textContent = globals.buttonStartText;
    }
    }
    else { startSlideShow();
    if (globals.buttonObject) {
    globals.buttonObject.textContent = globals.buttonStopText;
    }
    }
    globals.slideShowRunning = !(globals.slideShowRunning);
    }
	function transitionSlidesData() {
    var currentSlide = globals.slideImages[globals.slideIndex];
    ++(globals.slideIndex);
    	if (globals.slideIndex >= globals.slideImages.length) {
        globals.slideIndex = 0;
        }
    var nextSlide = globals.slideImages[globals.slideIndex];
    var currentSlideOpacity = 1;
    var nextSlideOpacity = 0;
    var opacityLevelIncrement = 1 / globals.fadeDelay;
    var fadeActiveSlidesID = setInterval(fadeActiveSlidesData, globals.fadeDelay);
    function fadeActiveSlidesData() {
    currentSlideOpacity -= opacityLevelIncrement;
    nextSlideOpacity += opacityLevelIncrement;
    if (currentSlideOpacity >= 0 && nextSlideOpacity <= 1) {
    currentSlide.style.opacity = currentSlideOpacity;
    nextSlide.style.opacity = nextSlideOpacity;
    }
    else {
    currentSlide.style.opacity = 0;
    nextSlide.style.opacity = 1;
    clearInterval(fadeActiveSlidesID);
    }
  }
  }
}// JavaScript Document