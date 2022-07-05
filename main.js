const zoomElement = document.querySelector("#contenedor-logo");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoom += ZOOM_SPEED
    zoomElement.style.transform = `scale(${(zoom)})`;
    console.log(e.deltaY);
  } else if (zoom > 0.2) {
    zoom -= ZOOM_SPEED
    zoomElement.style.transform = `scale(${(zoom)})`;
    console.log(e.deltaY)
  }
});