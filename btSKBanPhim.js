function upArrowPressed() {
    var element = document.getElementById('nobita');
    element.style.top = parseInt(element.style.top) - 20 + 'px';
}
function downArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.top = parseInt(element.style.top) + 20 + 'px';
}
function leftArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) - 20 + 'px';
}
function rightArrowPressed() {
    var element = document.getElementById("nobita");
    element.style.left = parseInt(element.style.left) + 20 + 'px';

}
function moveSelection(ev) {
    switch (ev.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}
function doReady() {
    window.addEventListener('keydown', moveSelection);
}