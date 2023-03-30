/*
Aufgabe: L02_EventInspector
Name: Lars Riehle
Matrikel: 272305
Datum: 30.03.2023
Quellen:
*/
window.addEventListener(`load`, function handleLoad() {
    document.addEventListener(`mousemove`, setInfoBox);
    document.addEventListener(`click`, logInfo);
    document.addEventListener(`key up`, logInfo);
    document.body.addEventListener(`click`, logInfo);
    document.body.addEventListener(`key up`, logInfo);
    const divs = document.querySelectorAll("div");
    divs.forEach(function addingListener(div) {
        div.addEventListener(`click`, logInfo);
        div.addEventListener(`key up`, logInfo);
    });
    // console.log("listeners added");
});
function setInfoBox(_event) {
    const mouseX = _event.clientX;
    const mouseY = _event.clientY;
    // console.log(mouseX);
    // console.log(mouseY);
    let x = String(mouseX + 20);
    let y = String(mouseY + 20);
    const infobox = document.getElementById("infobox");
    infobox.innerHTML = "Mouse x: " + x + " Mouse y: " + y + "Event-Target: " + _event.target;
    // console.log("content wird angezeigt");
    infobox.style.position = "fixed";
    infobox.style.top = y + "px";
    infobox.style.left = x + "px";
    // console.log("infoBox wird an Mouse geheftet");
}
;
function logInfo(_event) {
    console.log(_event.type + _event.target + _event.currentTarget + _event);
}
;
//# sourceMappingURL=script.js.map