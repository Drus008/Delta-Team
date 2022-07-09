/*Amplia la imagen cuando haces scroll*/

const zoomElement = document.querySelector("#contenedor-logo");

document.addEventListener("scroll", function () {

	let yOffset = window.pageYOffset
	if (yOffset <1500) {
	  zoomElement.style.transform = `matrix( ${(1+(yOffset)/50)}, 0, 0, ${(1+(yOffset)/50)}, 0, ${(-yOffset/10)} )`
	}
  
	else {
		zoomElement.style.transform = `matrix( 31, 0, 0, 31, 0, -150 )`
	};

	console.log(window.pageYOffset);
  
});


/*Acerca la flecha cuando posicionas el ratón en el título*/

window.onload = function(){
	document.getElementById("pregunta1").onmouseover = function() { document.getElementById("deltaHorizontal1").style.marginRight = "0%"}
	document.getElementById("pregunta1").onmouseout = function() { document.getElementById("deltaHorizontal1").style.marginRight = "10%"}

  document.getElementById("pregunta1").onmouseover = function() { document.getElementById("deltaHorizontal1").style.marginRight = "0%"}
  document.getElementById("pregunta1").onmouseout = function() { document.getElementById("deltaHorizontal1").style.marginRight = "10%"}

  document.getElementById("pregunta2").onmouseover = function() { document.getElementById("deltaHorizontal2").style.marginRight = "0%"}
  document.getElementById("pregunta2").onmouseout = function() { document.getElementById("deltaHorizontal2").style.marginRight = "10%"}

  document.getElementById("pregunta3").onmouseover = function() { document.getElementById("deltaHorizontal3").style.marginRight = "0%"}
  document.getElementById("pregunta3").onmouseout = function() { document.getElementById("deltaHorizontal3").style.marginRight = "10%"}

  document.getElementById("pregunta4").onmouseover = function() { document.getElementById("deltaHorizontal4").style.marginRight = "0%"}
  document.getElementById("pregunta4").onmouseout = function() { document.getElementById("deltaHorizontal4").style.marginRight = "10%"}
}