const rootElement = document.querySelector(":root");

const modeSwitch = document.getElementById("mode");

window.addEventListener("load", function(){
    this.document.body.classList.add("geladen");
});


// begint darkmode (for your eyes sake.) 
modeSwitch.checked=  false;

modeSwitch.onchange = function(){
    if(modeSwitch.checked === true){
        rootElement.style.setProperty("--background-color", "white");
        rootElement.style.setProperty("--font-color", "black");
        rootElement.style.setProperty("--product-border", "0.3rem dashed black");
        return;
    }
    rootElement.style.setProperty("--background-color", "#1c272a");
    rootElement.style.setProperty("--font-color", "#d4d4d4");
    rootElement.style.setProperty("--product-border", "0.3rem dashed rgba(212,212,212,0.4)");

}