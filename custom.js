//display photos

let rockCom = document.getElementById("randomPick");

function showIt(){
 document.getElementById("rockCom").style.visibility = "visible";
}

//user side
let rockUser = document.getElementById("rockUser");
let paperUser = document.getElementById("paperUser");
let scissorUser = document.getElementById("scissorUser");


function choiceDisplay(imgSrc){
   var imageLocation = document.getElementById("img");
   imageLocation.src = imgSrc;
}

