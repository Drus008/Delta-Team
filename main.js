const zoomElement = document.querySelector("#contenedor-logo");
let zoom = 1;
const ZOOM_SPEED = 0.35;

document.addEventListener("wheel", function (e) {
	if (e.deltaY > 0) {
		zoom += ZOOM_SPEED
		zoomElement.style.transform = `matrix( ${(zoom**2)}, 0, 0, ${(zoom**2)}, 0, ${(-(zoom-1)*200)} )`;
		console.log(e.deltaY);
		console.log(zoom);
		}
		else if (zoom > 0.2) {
		zoom -= ZOOM_SPEED
		zoomElement.style.transform = `matrix( ${(zoom**2)}, 0, 0, ${(zoom**2)}, 0, ${(-(zoom-1)*200)} )`;
		console.log(e.deltaY)
	}
	console.log(e.deltaY);
	console.log(zoom);
  });