function loading() {
    document.getElementById("info_one").style.transform = "scale(0)";
    document.getElementById("info_one").style.height = "0px";
    document.getElementById("info_two").style.transform = "scale(0)";
    document.getElementById("info_two").style.height = "0px";
    document.getElementById("info_three").style.transform = "scale(0)";
    document.getElementById("info_three").style.height = "0px";
    document.getElementsByClassName("show_p").style.transform = "rotate(0deg)";
}
window.onload = loading;

function open_one() {
    var text = document.getElementById("info_one");
    var arrow = document.getElementById("show_p_1");
    
    if (text.style.transform == "scale(0)") {
        text.style.transform = "scale(1)";
        text.style.height = "auto";
        arrow.style.transform ="rotate(180deg)";
            
    } else if (text.style.transform == "scale(1)") {
        text.style.transform = "scale(0)";
        text.style.height = "0px";
        arrow.style.transform ="rotate(0deg)";
    }
}
function open_two() {
    var text = document.getElementById("info_two");
    var arrow = document.getElementById("show_p_2");
    
    if (text.style.transform == "scale(0)") {
        text.style.transform = "scale(1)";
        text.style.height = "auto";
        arrow.style.transform ="rotate(180deg)";
    } else if (text.style.transform == "scale(1)") {
        text.style.transform = "scale(0)";
        text.style.height = "0px";
        arrow.style.transform ="rotate(0deg)";
    }
}
function open_three() {
    var text = document.getElementById("info_three");
    var arrow = document.getElementById("show_p_3");
    
    if (text.style.transform == "scale(0)") {
        text.style.transform = "scale(1)";
        text.style.height = "auto";
        arrow.style.transform ="rotate(180deg)";
    } else if (text.style.transform == "scale(1)") {
        text.style.transform = "scale(0)";
        text.style.height = "0px";
        arrow.style.transform ="rotate(0deg)";
    }
}