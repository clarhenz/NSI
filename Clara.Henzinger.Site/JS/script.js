//changement couleur div: element
const box = document.getElementById("element");

function changeColorOn() {
  box.style.backgroundColor = "rgb(123, 170, 116)";
}

function changeColorOff() {
  box.style.backgroundColor = "rgb(133, 66, 66)";
}

box.addEventListener("mouseover", changeColorOn);
box.addEventListener("mouseout", changeColorOff);

//changement couleur de la classe inside_boxes
const boxes = document.getElementsByClassName("inside_boxes");

function changeColorOn2() {
  boxes.style.backgroundColor = "rgb(225, 221, 95)";
}

function changeColorOff2() {
  boxes.style.backgroundColor = "white";
}

boxes.addEventListener("mouseover", changeColorOn2);
boxes.addEventListener("mouseout", changeColorOff2);

//alertes
function Dat(){
    alert("Mettez votre Date de naissance");
}

function FN(){
    alert("Mettez votre Prénom");
}

function LN(){
    alert("Mettez votre Nom");
}

//bouton 'submit':



function submit(){
    const bigbox = document.getElementById("element_1");
    bigbox.style.backgroundColor = "rgb(225, 221, 95)";
}





