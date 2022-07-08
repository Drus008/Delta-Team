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
