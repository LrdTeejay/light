var lighton = document.getElementById("switch_on");
var lightoff = document.getElementById("switch_off");
var image = document.getElementById("bulb");

function switchOn(){
    image.setAttribute("src", "light_on1.png");
}
function switchOff(){
    image.setAttribute("src", "light_off.png")
}