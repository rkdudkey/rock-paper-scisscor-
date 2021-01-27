//display user choices
function choiceDisplay(imgSrc){
   var imageLocation = document.getElementById("img");
   imageLocation.src = imgSrc;
}


function getRandomImages(){
   //random pick choices display
   var num = Math.floor(( Math.random() * 3) + 1);
   var imageLocation = document.getElementById("img-opponent");
   imageLocation.src = `images/games${num}.png`;
   console.log(imageLocation); 
}