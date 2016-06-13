function loading() {
    document.getElementById("meny").style.display = "none";
}
window.onload = loading();

function openCloseMenu() {
    
    var stangMeny = document.getElementById("closemeny"),
        openMeny = document.getElementById("openmeny"),
        meny = document.getElementById("meny");
    
    if (meny.style.display == "none") {
        meny.style.display = "block";
        openMeny.style.display = "none";
    } else {
        meny.style.display = "none";
        openMeny.style.display = "block";
    }
}
/*
function randomcolor() {
    var thecolor = '#' + Math.random().toString(16).slice(2, 8);
    document.getElementById("body").style.backgroundColor = thecolor;
}
*/