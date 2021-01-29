const game = function () {

   var round = 0;
   var playerScore = 0;
   var computerScore = 0;
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
                  getTheWinner(personHand, comHand);
               }, 2000);
            }
         });
      }) 
   }

   var updateScoreUser = () => {
      //output to show who the winner
      var output = document.querySelector(".output");

      var point1 = document.getElementById("point-user-1");
      var point2 = document.getElementById("point-user-2");
      var point3 = document.getElementById("point-user-3");
      var pointCom1 = document.getElementById("point-com-1");
      var pointCom2 = document.getElementById("point-com-2");
      var pointCom3 = document.getElementById("point-com-3");

      var modalBg = document.querySelector('.modal-bg');

      
      //counting user scores
      if(playerScore === 1){
         point1.innerHTML = "&#xf005;";
      }  else if (playerScore === 2 ){
         point2.innerHTML = "&#xf005;";
      }else if (playerScore === 3 ){
         point3.innerHTML = "&#xf005;";
         output.textContent = "Player Wins";
         setTimeout(() => {
            modalBg.classList.add('bg-active');
         },2000);
        
      }

      //couting computer score
      if(computerScore === 1){
         pointCom1.innerHTML = "&#xf005;";
      }  else if (computerScore === 2 ){
         pointCom2.innerHTML = "&#xf005;";
      }else if (computerScore === 3 ){
         pointCom3.innerHTML = "&#xf005;";
         output.textContent = "Computer Wins";
         setTimeout(() => {
            modalBg.classList.add('bg-active');
         },2000);
      }
   }


   //check who is the winner 
   var getTheWinner = function (player, computer) {
      var roundDisplay= document.querySelector(".round");

      //tie game
      if(player === computer){
         round++;
         roundDisplay.textContent ="Round " + round; 
         return;
      }

      //Check for Rock
    if (player === "images/games2.png") {
      if (computer === "images/games3.png") {
        round++;
        playerScore++;
        roundDisplay.textContent ="Round " + round; 
        updateScoreUser();
        return;
      } else {
        round++;
        computerScore++;
        roundDisplay.textContent ="Round " + round; 
         updateScoreUser();
        return;
      }
    }
    //Check for Paper
    if (player === "images/games1.png") {
      if (computer === "images/games3.png") {
        round++;
        computerScore++;
        roundDisplay.textContent ="Round " + round; 
        updateScoreUser();
        return;
      } else {
        round++;
        playerScore++;
        roundDisplay.textContent ="Round " + round; 
        updateScoreUser();
        return;
      }
    }
    //Check for Scissors
    if (player === "images/games3.png") {
      if (computer === "images/games2.png") {
        round++;
        computerScore++;
        roundDisplay.textContent ="Round " + round; 
        updateScoreUser();
        return;
      } else {
        round++;
        playerScore++;
        roundDisplay.textContent ="Round " + round;
        updateScoreUser();
        return;
      }
    }
  };

  var rePlay = () => {
     var play = document.querySelector("#play");
     var stopPlay = document.querySelector("#stopPlay");

     play.addEventListener("click", () => {
        window.location.reload();
     });

     stopPlay.addEventListener("click", () => {
        window.close();
     })
  }

   //call the inner function
   choiceDisplay();
   getRandomImages();
   rePlay()

}

//call the whole function
game();




