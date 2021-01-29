const game = function () {

   var round = 0;
   var comHand;
   var personHand;

   //display user choices
   var choiceDisplay = () => {
      var imageLocation = document.getElementById("img");
      var rockButton = document.getElementById("rockUser");
      var paperButton = document.getElementById("paperUser");
      var scissorButton = document.getElementById("scissorUser")
      
      rockButton.addEventListener('click', () => {
         imageLocation.src = `./images/games2.png`;
         personHand = "images/games2.png";
         console.log(personHand);
      });

      paperButton.addEventListener('click', () => {
         imageLocation.src = `./images/games1.png`;
         personHand = `images/games1.png`;
      });

      scissorButton.addEventListener('click', () => {
         imageLocation.src = `./images/games3.png`;
         personHand = `images/games3.png`;
      });

      
   }

   //random pick choices display
   var getRandomImages = function () {
      var randomClick = document.querySelectorAll("#randomPick");
      var imageLocation = document.getElementById("img-opponent");
      

      randomClick.forEach(option => {
         option.addEventListener("click", () => {
           var state = document.readyState;
            if (state == 'complete') {
               imageLocation.style.visibility = "hidden";
               setTimeout(function () {
                  imageLocation.style.visibility = "visible";
                  var num = Math.floor((Math.random() * 3) + 1);
                  imageLocation.src = `images/games${num}.png`;
                  comHand = `images/games${num}.png`;
                  console.log(comHand);
                  console.log(getTheWinner(personHand, comHand));
               }, 2000);
            }
         });
      }) 
   }

   var updateScore = () => {
      var playerPoint = document.querySelector("point-user");
      var comPoint = document.querySelector("point-com");
   }

   //check who is the winner 
   var getTheWinner = function (player, computer) {
      var output = document.querySelector(".output");
      var roundDisplay= document.querySelector(".round");

      //tie game
      if(player === computer){
         output.textContent = "It is a tie";
         round++;
         roundDisplay.textContent ="Round " + round; 
         return;
      }

      //Check for Rock
    if (player === "images/games2.png") {
      if (computer === "images/games3.png") {
        output.textContent = "Player Wins";
        round++;
        roundDisplay.textContent ="Round " + round; 
        updateScore();
        return;
      } else {
        output.textContent = "Computer Wins";
        round++;
        roundDisplay.textContent ="Round " + round; 
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (player === "images/games1.png") {
      if (computer === "images/games3.png") {
        output.textContent = "Computer Wins";
        round++;
        roundDisplay.textContent ="Round " + round; 
        updateScore();
        return;
      } else {
        output.textContent = "Player Wins";
        round++;
        roundDisplay.textContent ="Round " + round; 
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (player === "images/games3.png") {
      if (computer === "images/games2.png") {
        output.textContent = "Computer Wins";
        round++;
        roundDisplay.textContent ="Round " + round; 
        updateScore();
        return;
      } else {
        output.textContent = "Player Wins";
        round++;
        roundDisplay.textContent ="Round " + round;
        updateScore();
        return;
      }
    }
  };

   //call the inner function
   choiceDisplay();
   getRandomImages();

}

//call the whole function
game();




