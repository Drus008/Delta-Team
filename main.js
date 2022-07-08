/*Elije que elemento se apmpliará y lo amplia*/
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


window.onload = function(){
	document.getElementById("pregunta1").onmouseover = function() { document.getElementById("deltaHorizontal1").style.marginLeft = "11%"}
  document.getElementById("pregunta1").onmouseout = function() { document.getElementById("deltaHorizontal1").style.marginLeft = "10%"}

  document.getElementById("pregunta2").onmouseover = function() { document.getElementById("deltaHorizontal2").style.marginLeft = "11%"}
  document.getElementById("pregunta2").onmouseout = function() { document.getElementById("deltaHorizontal2").style.marginLeft = "10%"}
}