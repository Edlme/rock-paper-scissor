 // Configure variables that are needed to access the DOM elements
 (function(){
    var user = document.querySelector('.userchoice'),
        computer = document.querySelector('.computerchoice'),
        startBtn = document.querySelector('.startBtn'),
        result = document.querySelector('.result'),
        userchoice,
        winStates = {Rock: 'Scissors', Paper:'Rock', Scissors: 'Paper'};
    //This listens for clicks on the 'Play' button to start the game
    startBtn.addEventListener('click',function(){
        this.disabled = true;
        result.innerHTML = '';
        user.className = "userchoice Rock count-in";
        computer.className = "computerchoice Rock count-in";
    });
    //This listens out for keydown strokes from the user on the keyboard
    document.addEventListener( 'keydown', function(event){
        if(event.KeyCode === 82){
            userchoice = 'Rock';
        }else if (event.KeyCode === 80){
            userchoice = 'Paper';
        }else{
            userchoice = 'Scissors';
        }
    })
    //The main end point when the animation has completed, pick random values for the computer
    document.addEventListener('animationend', function(){
        if(!userchoice){ userchoice = getRandomChoice();}
        startBtn.disabled = false;
        var computerchoice = getRandomChoice();           
        user.className = "userchoice " + userchoice;
        computer.className = "computerchoice " + computerchoice;
        result.innerHTML = getWinner(userchoice, computerchoice);
        userchoice = '';
    });
    /*
    Gets a random string from the winning states Object
    @return string
    */
    function getRandomChoice(){
        return Object.keys(winStates)[Math.floor(Math.random()*3)];
    }
    /*
    Compares the user and computer choice and determines who won
    @param userchoice String
    @param computerchoice String
    @return String
    */
    function getWinner(userchoice, computerchoice){
        if(userchoice ===computerchoice){
            return "A tie.";
        } else if (userchoice === winStates[computerchoice]){
            return "Computer Wins! " + computerchoice + " beats " + userchoice;
        }
        return "You Win! " +  userchoice + " beats " + computerchoice;
    }
})();    