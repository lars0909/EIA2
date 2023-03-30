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
});
function setInfoBox(_event) {
}
function logInfo(_event) {
}
;
//# sourceMappingURL=script.js.map