
var scroll = window.requestAnimationFrame ||
            function(callback) { window.setTimeout(callback, 1000/60)};

var elementsToShow = document.querySelectorAll(".aparece");

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("is-visible")
        }
    });
    scroll(loop);
}

loop();

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}