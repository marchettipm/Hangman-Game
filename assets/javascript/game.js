var  enterCount;
var  wordChosen;
var  wins;
var  losses;
var  guesses;
var  wrongspot = "";
var  blankspot = "";
var  blanky = "<li>__&nbsp;</li>";
var  removeCorrectGuesses = "";

function playReset(){
	hangman.wordChoice
}


hangman = {
	startText : "Let's do this thing! Guess a letter!",
	wordBank : ["blackjack", "poker", "bellagio", "palms", 
		"slots,", "elvis", "caesers", "luxor", "roulette", "baccarat"],
	wordChoice: function (){
		var random = Math.floor(Math.random() * 10);
		return this.wordBank[random];

	}

}

document.onkeyup = function(event){
	if (event.key === "Enter"){
		document.getElementById("begin").textContent = hangman.startText;

		wins = 0;
		losses = 0;
		guesses = 8;


		wordChosen = hangman.wordChoice();
		removeCorrectGuesses = wordChosen;
		// alert(wordChosen);

		for (var i = 0; i < wordChosen.length; i++){
				blankspot += blanky;
	 }	
		document.getElementById("blanks").innerHTML = blankspot;
	
}



	document.onkeyup = function(event){
		if (wordChosen.indexOf(event.key) !== -1){
		document.getElementById("blanks").children[wordChosen.indexOf(event.key)].innerHTML = event.key;
			for (var j = 0; j < wordChosen.length; j++){
				if (event.key === wordChosen[j]){
					document.getElementById("blanks").children[j].innerHTML = event.key;	
				}
			}
			 while (removeCorrectGuesses.indexOf(event.key) !== -1) {
		    	removeCorrectGuesses = removeCorrectGuesses.replace(event.key, "");
		    }
		    if (removeCorrectGuesses.length === 0){
		    	wins += 1;
		    	document.getElementById("winner").innerHTML = "Wins: " + wins;
		    	wrongspot = "";
		    	guesses = 8;
		    	document.getElementById("wrong").innerHTML = "";
		    	wordChosen = hangman.wordChoice();
		    	removeCorrectGuesses = wordChosen;
		    	blankspot = "";
		    	for (var i = 0; i < wordChosen.length; i++){
					blankspot += blanky;
	 			}	
				document.getElementById("blanks").innerHTML = blankspot;
		    	// alert(wordChosen);
		    }
		} else {
			wrongspot += "<li>" + event.key + ", </li>";
			document.getElementById("wrong").innerHTML = wrongspot;
			guesses -= 1;
		    if (guesses === 0){
		    	losses += 1;
		    	document.getElementById("loser").innerHTML = "Losses: " + losses;
		    	wrongspot = "";
		    	guesses = 8;
		    	document.getElementById("wrong").innerHTML = "";
		    	wordChosen = hangman.wordChoice();
		    	removeCorrectGuesses = wordChosen;
		    	blankspot = "";
		    	for (var i = 0; i < wordChosen.length; i++){
					blankspot += blanky;
	 			}	
				document.getElementById("blanks").innerHTML = blankspot;
		    }
		   
		    		
		}
	}

}

