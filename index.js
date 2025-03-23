
function myFunction(value) {
    const previewEl = document.getElementById("preview");
    previewEl.innerText += value;
}
function clearPreview() {
    const previewEl = document.getElementById("preview");
    previewEl.innerText = ""; 
}
function calculate() {
    const previewEl = document.getElementById("preview");
    try {
        previewEl.innerText = eval(previewEl.innerText);  
    } catch (error) {
    }
}
