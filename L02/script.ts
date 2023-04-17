/*
Aufgabe: L02_EventInspector
Name: Lars Riehle
Matrikel: 272305
Datum: 02.04.2023
Quellen: 
*/
const TheCustomEvent = new CustomEvent(`TheCustomEvent`, { bubbles: true });
window.addEventListener(`load`, function handleLoad() {
    document.addEventListener(`mousemove`, setInfoBox)

    document.addEventListener(`click`, logInfo);
    document.addEventListener(`keyfup`, logInfo);
    document.addEventListener(`TheCustomEvent`, function logEvent() {
        console.log(TheCustomEvent);
    });

    document.body.addEventListener(`click`, logInfo);
    document.body.addEventListener(`keyup`, logInfo);

    const divs = document.querySelectorAll("div");
    divs.forEach(function addingListener(div) {
        div.addEventListener(`click`, logInfo);
        div.addEventListener(`keyup`, logInfo);
    })
    document.getElementById("btn").addEventListener(`click`, function customEvent() {
        document.getElementById("btn").dispatchEvent(TheCustomEvent);
    });
    // console.log("listeners added");

});
function setInfoBox(_event: MouseEvent) {
    const mouseX: number = _event.clientX;
    const mouseY: number = _event.clientY;
    // console.log(mouseX);
    // console.log(mouseY);
    let x: string = String(mouseX + 20);
    let y: string = String(mouseY + 20);
    const infobox = document.getElementById("InfoBox");
    infobox.innerHTML = "Mouse x: " + x + " Mouse y: " + y + "Event-Target: " + _event.target;
    // console.log("content wird angezeigt");
    infobox.style.position = "fixed";
    infobox.style.top = y + "px";
    infobox.style.left = x + "px";
    // console.log("infoBox wird an Mouse geheftet");
};
function logInfo(_event: Event) {
    console.log(_event.type + _event.target + _event.currentTarget + _event);
};