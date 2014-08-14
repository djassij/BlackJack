$(document).ready(function()
 {
	/*====================================================
	CARD CLASS
	====================================================*/
	function Card (s, r, v) 
	{
		this.suit = s;
		this.rank = r;
		this.val = v;
	}

 
    /*====================================================
	DECK CLASS
	====================================================*/
	function Deck () 
	{
		this.cards = [];
	
		/*=============================
		HEARTS
		=============================*/
		var card;
		for (var h = 2; h<=10; h++) {
			card = new Card("h", h, h);
			this.cards.push(card);
		}
		this.cards.push(new Card("h","Jack", 10));
		this.cards.push(new Card("h","Queen", 10));
		this.cards.push(new Card("h","King", 10));
		this.cards.push(new Card("h","Ace", 11));

	

		/*=============================
		CLUBS
		=============================*/
		var cardClubs;
		for (var c = 13; c<=21; c++) {
			cardClubs = new Card("c", (c-11), (c-11));
			this.cards.push(cardClubs);
		}
		this.cards.push(new Card("c","Jack", 10));
		this.cards.push(new Card("c","Queen", 10));
		this.cards.push(new Card("c","King", 10));
		this.cards.push(new Card("c","Ace", 11));

		/*=============================
		DIAMONDS
		=============================*/
		var cardDiamonds;
		for (var d = 24; d<=32; d++) {
			cardDiamonds = new Card("d", (d-22), (d-22));
			this.cards.push(cardDiamonds);
		}
		this.cards.push(new Card("d","Jack", 10));
		this.cards.push(new Card("d","Queen", 10));
		this.cards.push(new Card("d","King", 10));
		this.cards.push(new Card("d","Ace", 11));

		/*=============================
		SPADES
		=============================*/
		var cardSpades;
		for (var s = 35; s<=43; s++) {
			cardSpades = new Card("s", (s-33), (s-33));
			this.cards.push(cardSpades);
		}
		this.cards.push(new Card("s","Jack", 10));
		this.cards.push(new Card("s","Queen", 10));
		this.cards.push(new Card("s","King", 10));
		this.cards.push(new Card("s","Ace", 11));


	    // for (var i=0; i<deck.length; i++) {
	    // 	console.log(deck[i].suit + ", " + deck[i].rank + ", " + deck[i].val);
	 
	 }  //  --------------- Deck ----------------------------


	    /*=============================
		SHUFFLE FUNCTION
		=============================*/
	    Deck.prototype.shuffle = function() 
	    {
	        var r1, r2, temp; 
	    	for(i=0; i<=100; i++) {
	    		r1 = Math.floor(Math.random() * this.cards.length);
	    		r2 = Math.floor(Math.random() * this.cards.length);   		
	    		temp = this.cards[r1];
	    		this.cards[r1] = this.cards[r2];
	    		this.cards[r2] = temp;
	    	}
		};

		Deck.prototype.dealInitialTwoCards = function(p) {
			//var twoCards= [];
			var card1 = this.cards.pop();
			var card2 = this.cards.pop();
			p.playersHand.push(card1);
			p.playersHand.push(card2);	

		};

		Deck.prototype.hitMe = function (p) {
			var cardHit = this.cards.pop();
			p.playersHand.push(cardHit);
		};

		Deck.prototype.playAgainPlayer = function(a) {
			for(var e=0; e<=a.playersHand.length +1; e++) {
				var playerCard = a.playersHand.pop();
				this.cards.push(playerCard);
			}
		};

		Deck.prototype.playAgainDealer = function(d) {
			for(var q=0; q<=d.playersHand.length +1; q++) {
				var dealerCard = d.playersHand.pop();
				this.cards.push(dealerCard);
			}
		};


	
    
    /*====================================================
	PLAYER CLASS
	====================================================*/
	function Player (name) {
		this.playersHand = [];
		this.bankRoll = 1000;
		this.bet = 0;
		this.total= 0;
		this.name = name; 
		this.hasAnAce = false;
		var player = this;
		
		/*=============================
		MAKE BET FUNCTION
		=============================*/
		var getBetValue = function() {
			
		 	player.bet = $("#betAmount").val();
		 	player.bankRoll = player.bankRoll - player.bet;
		 	if(player.name!=="dealer") {
		 		$('#bankRoll').append("<p>" + player.bankRoll + "</p>");
		 		$('#bet').append("<p>" + player.bet + "</p>");
		 	}
		};

		$("#submitBet").click(getBetValue);		

	}
		/*=============================
		DISPLAY HAND FUNCTION
		=============================*/
		Player.prototype.displayHand = function() {
			console.log(this.hand);
		};

		/*=============================
		CALCULATE TOTAL FUNCTION
		=============================*/

		Player.prototype.calculateTotalValueOfHandPlayer = function(array) {
			playerTotal = 0;
			for (var t= 0; t<player.playersHand.length; t++) {
				playerTotal += player.playersHand[t].val;
			}
		};

		Player.prototype.calculateTotalValueOfHandDealer = function(array) {
			dealerTotal = 0;
			for (var z= 0; z<dealer.playersHand.length; z++) {
				dealerTotal += dealer.playersHand[z].val;
			}
		};

	
    /*====================================================
	MAIN IS THE BRAIN!!!!!!!
	====================================================*/
    var player = new Player("jonathan");
    var dealer = new Player("dealer");
	var deck = new Deck();

	
	/*===================================================
	DEAL!!!
	===================================================*/
	var giveTwoCards = function() {
		deck.shuffle();
		deck.dealInitialTwoCards(player);
		deck.dealInitialTwoCards(dealer);
		player.calculateTotalValueOfHandPlayer(player.playersHand);
		dealer.calculateTotalValueOfHandDealer(dealer.playersHand);

		if (playerTotal ===  21 && dealerTotal <21) {
			console.log(player.playersHand);
			console.log(dealer.playersHand);
			$("#dealerCard1").attr("src","playingcards/" + dealer.playersHand[1].suit + dealer.playersHand[1].rank + ".gif");
			$('#winOrLose').append("<p>YOU WIN!!!</p>");
			// console.log("BLACKJACK!!");
			// player.bankRoll+= (player.bet * 2);
			// console.log(player.bankRoll);

			for (var y=0; y<dealer.playersHand.length; y++); {
				deck.hitMe(dealer);
				dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
			
				if (dealerTotal<21) {
					deck.hitMe(dealer);
					dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
				} 
				if (dealerTotal===21) {
					console.log("You Lose!");
					$('#winOrLose').append("<p>YOU LOSE!!!</p>");
				}
				// if (dealerTotal>21) {
				// 	console.log("You Win!");
				// 	$('#winOrLose').append("<p>YOU WIN!!!</p>");
				// }
				if (dealerTotal>21 && dealer.hasAnAce===true) {
					dealerTotal=dealerTotal-10;
				}
			}
		}
		if (playerTotal === 21 && dealerTotal ===21) {
			console.log(player.playersHand);
			console.log(dealer.playersHand);
			console.log("You Lose!");
			$('#winOrLose').append("<p>YOU LOSE!!!</p>");
		}
		if (playerTotal<21 && dealerTotal<=21) {
			console.log(player.playersHand);
			console.log(dealer.playersHand);
			console.log("Do you want to hit or stand?");
		}

			console.log(playerTotal);
			console.log(dealerTotal);
		if (playerTotal>21 && player.hasAnAce===true) {
			playerTotal=playerTotal-10;
		}


		// console.log(deck);
	};
	$("#deal").click(giveTwoCards);





	/*=============================
	HIT FUNCTION
	=============================*/
	var hit = function() {
		deck.hitMe(player);
		player.calculateTotalValueOfHandPlayer(player.playersHand);
		dealer.calculateTotalValueOfHandDealer(dealer.playersHand);

		if (playerTotal === 21 && dealerTotal=== 21) {
			console.log(player.playersHand);
			console.log(playerTotal);
			console.log("You Lose!");
			$('#winOrLose').append("<p>YOU LOSE!!!</p>");
		}
		if (playerTotal === 21 && dealerTotal<21) {
			for (var y=0; y<dealer.playersHand.length; y++); {
				deck.hitMe(dealer);
				dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
				
				if (dealerTotal<21) {
					deck.hitMe(dealer);
					dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
				} 
				if (dealerTotal>21) {
					console.log("You Win!");
					player.bankRoll+=(player.bet *2);
					console.log(player.bankRoll);
					$('#winOrLose').append("<p>YOU WIN!!!</p>");
				}
				if (dealerTotal>21 && dealer.hasAnAce===true) {
					dealerTotal=dealerTotal-10;
				}
				if (dealerTotal===21) {
					console.log("You Lose!");
					$('#winOrLose').append("<p>YOU LOSE!!!</p>");
				}
			}
			console.log(player.playersHand);
			console.log(playerTotal);
			// deck.hitMe(dealer);
			// dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
			console.log(dealerTotal);
		}
		if (playerTotal<21 && dealerTotal<=21) {
			console.log(player.playersHand);
			console.log(playerTotal);
			console.log("Do you want to hit or stand?");
		}
		if (playerTotal>21 && dealerTotal<=21) {
			if(playerTotal>21 && player.hasAnAce===true) {
				playerTotal=playerTotal-10;
				//$("#playerCard3").attr("src","playingcards/" + player.playersHand[3].suit + player.playersHand[3].rank + ".gif");
			}
		}
		if(playerTotal>21 && player.hasAnAce===true) {
				playerTotal=playerTotal-10;
				//$("#playerCard3").attr("src","playingcards/" + player.playersHand[3].suit + player.playersHand[3].rank + ".gif");
		}
		if (playerTotal>21 && dealerTotal<=21) {
			$('#winOrLose').append("<p>YOU LOSE!!!</p>");
			$("#dealerCard1").attr("src","playingcards/" + dealer.playersHand[1].suit + dealer.playersHand[1].rank + ".gif");
		}




		// console.log(player.playersHand);
		// console.log(playerTotal);
	};
	$("#hit").click(hit);

	/*=============================
	STAND FUNCTION
	=============================*/
	var stand = function() {
		// deck.hitMe(dealer);
		// dealer.calculateTotalValueOfHandDealer(dealer.playersHand);

		if (playerTotal<21 && (dealerTotal>=playerTotal && dealerTotal<=21)) {
			console.log("You Lose!");
			$('#winOrLose').append("<p>YOU LOSE!!!</p>");
		}
		if (playerTotal<=21 && dealerTotal<playerTotal) {
			for (var y=0; y<=dealer.playersHand.length; y++); {
				deck.hitMe(dealer);
				dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
			
				if (dealerTotal === playerTotal) {
					console.log("You Lose!");
					$('#winOrLose').append("<p>YOU LOSE!!!</p>");
				}
				if (dealerTotal<21 && dealerTotal<playerTotal) {
					deck.hitMe(dealer);
					dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
				} 
				if (dealerTotal===21 || (dealerTotal>playerTotal && dealerTotal<21)) {
					console.log("You Lose!");
					$('#winOrLose').append("<p>YOU LOSE!!!</p>");
				}
			}
		}
		if (playerTotal<=21 && dealerTotal>21) {
			if(playerTotal<=21 && (dealerTotal>21 && dealer.hasAnAce===true)) {
				dealerTotal=dealerTotal-10;
			}
			else
				console.log("You Win!");
				$('#winOrLose').append("<p>YOU WIN!!!</p>");
				player.bankRoll+= (player.bet * 2);
				console.log(player.bankRoll);
		}
		if (playerTotal=== 21 && dealerTotal=== 21) {
			console.log("You Lose!");
			$('#winOrLose').append("<p>YOU LOSE!!!</p>");
			player.bankRoll+= (player.bet * 2);
			console.log(player.bankRoll);
		}


		console.log(dealer.playersHand);
		console.log(dealerTotal);
	};

	$("#stand").click(stand);

	/*=============================
	PLAY AGAIN FUNCTION
	=============================*/
	var playAgain = function() {
		deck.playAgainPlayer(player);
		deck.playAgainDealer(dealer);
		deck.shuffle();
		player.bet = 0;

		console.log(player.playersHand);
		console.log(dealer.playersHand);
		console.log(deck);
	};

	$("#playAgain").click(playAgain);

	/*=============================
	CHANGE CARD PIC FUNCTION
	=============================*/
	//show player and dealer cards when deal is clicked
	var showDealtCards = function() {
		$("#playerCard0").attr("src","playingcards/" + player.playersHand[0].suit + player.playersHand[0].rank + ".gif");
		$("#playerCard1").attr("src","playingcards/" + player.playersHand[1].suit + player.playersHand[1].rank + ".gif");
		$("#dealerCard0").attr("src","playingcards/" + dealer.playersHand[0].suit + dealer.playersHand[0].rank + ".gif");
		$("#dealerCard1").attr("src","playingcards/b2fv.gif");
	};

	$("#deal").click(showDealtCards);
//==============================================================================================================================
	//player hit card 2
	var hitClickedOnce = 0;

	var hitAgain = function() {
	$("#playerCard3").attr("src","playingcards/" + player.playersHand[3].suit + player.playersHand[3].rank + ".gif");
	};

	var hitAgainAgain = function() {
	$("#playerCard4").attr("src","playingcards/" + player.playersHand[4].suit + player.playersHand[4].rank + ".gif");
	};

	$("#hit").click(function() {
		$("#playerCard2").attr("src","playingcards/" + player.playersHand[2].suit + player.playersHand[2].rank + ".gif");
		hitClickedOnce = hitClickedOnce + 1;
		
		if (hitClickedOnce === 1) {
			$("#hit").click(hitAgain);
			hitClickedOnce = hitClickedOnce + 1;
		}
		
		if(hitClickedOnce === 2) {
			$("hit").click(hitAgainAgain);
		}

		/*if (hitClickedOnce === 2) {
			$("hit").click(hitAgainAgain);
		}*/
	});

//==============================================================================================================================
	//player stand
	var showStandCards = function() {
		$("#dealerCard1").attr("src","playingcards/" + dealer.playersHand[1].suit + dealer.playersHand[1].rank + ".gif");

		$("#dealerCard2").attr("src","playingcards/" + dealer.playersHand[2].suit + dealer.playersHand[2].rank + ".gif");

		$("#dealerCard3").attr("src","playingcards/" + dealer.playersHand[3].suit + dealer.playersHand[3].rank + ".gif");

	};

	$("#stand").click(showStandCards);

});  // ready