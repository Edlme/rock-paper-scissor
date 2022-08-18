const options = document.querySelectorAll(".options");
    let pScore = 0;
    let cScore = 0;
    var user = document.querySelector('.userchoice');
    var computer = document.querySelector('.computerchoice');
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pInput = this.value;


        const cOptions = ["Rock", "Paper", "Scissor"];
        const cInput = cOptions[Math.floor(Math.random() * 3)]; 
        user.className = "userchoice  count-in";
        computer.className = "computerchoice count-in";
        
        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if(checkWinner()){
          pScore = cScore= 0;
          updateScore();
        }
      });
    });

    function updateMoves(pInput, cInput){
      document.getElementById("p-move").src = `${pInput}.png`;
      document.getElementById("c-move").src = `${cInput}.png`;    
    }
  


    function compareInputs(pInput, cInput) {
      const currentMatch = `${pInput} vs ${cInput}`;
      if (pInput === cInput) {
        document.getElementById("result").innerHTML = `${currentMatch} is a Tie`;
        return;
      }

      if (pInput === "Rock") {
        if (cInput === "Scissor") {
          document.getElementById("result").innerHTML =`${currentMatch} = You Win`;
          pScore++;
        } else {
          document.getElementById("result").innerHTML = `${currentMatch} = Computer Wins`;
          cScore++;
        }
      }
      //Check for Paper
      else if (pInput === "Paper") {
        if (cInput === "Rock") {
          document.getElementById("result").innerHTML =`${currentMatch} = You Win`;
          pScore++;
        } else {
          document.getElementById("result").innerHTML =`${currentMatch} = Computer Wins`;
          cScore++;
        }
      }
      //Check for Scissor
      else {
        if (cInput === "Paper") {
          document.getElementById("result").innerHTML =`${currentMatch} = You Win`;
          pScore++;
        } else {
          document.getElementById("result").innerHTML =`${currentMatch} = Computer Wins`;
          cScore++;
        }
      }
    }

    function updateScore() {
      document.getElementById("p-score").textContent = pScore;
      document.getElementById("c-score").textContent = cScore;
    }

    function checkWinner() {
      if (pScore === 5 || cScore === 5) {
        const winner =
          pScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
            document.getElementById("result").innerHTML = winner;
        return true;
      }
      return false;
    }
