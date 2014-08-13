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

		/*=============================
		DEAL FUNCTION
		=============================*/
		Deck.prototype.dealInitialTwoCards = function(p) {
			//var twoCards= [];
			var card1 = this.cards.pop();
			var card2 = this.cards.pop();
			p.playersHand.push(card1);
			p.playersHand.push(card2);	

		};

		/*=============================
		HIT FUNCTION
		=============================*/
		Deck.prototype.hitMe = function (p) {
			var cardHit = this.cards.pop();
			p.playersHand.push(cardHit);
		};


	
    
    /*====================================================
	PLAYER CLASS
	====================================================*/
	function Player () {
		this.playersHand = [];
		this.bankRoll = 1000;
		this.bet = 0;
		this.total= 0; 
		var player = this;
		
		/*=============================
		MAKE BET FUNCTION
		=============================*/
		var getBetValue = function() {
			
		 	player.bet = $("#betAmount").val();
		 	player.bankRoll = player.bankRoll - player.bet;
		 	console.log("myBet = " + player.bet);
		 	console.log("bankRoll= " + player.bankRoll);
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
		CALCULATE VALUE FUNCTIONS
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
    var player = new Player();
    var dealer = new Player();
	var deck = new Deck();

	
	/*=============================
	INITIAL DEAL FUNCTION
	=============================*/
	var giveTwoCards = function() {
		deck.shuffle();
		deck.dealInitialTwoCards(player);
		deck.dealInitialTwoCards(dealer);
		console.log(deck);
		console.log(player.playersHand);
		console.log(dealer.playersHand);
	};

	$("#deal").click(giveTwoCards);


	/*=============================
	HIT FUNCTION
	=============================*/
	var hit = function() {
		deck.hitMe(player);
		player.calculateTotalValueOfHandPlayer(player.playersHand);
		console.log(player.playersHand);
		console.log(playerTotal);
	};
	$("#hit").click(hit);

	/*=============================
	STAND FUNCTION
	=============================*/
	var stand = function() {
		deck.hitMe(dealer);
		dealer.calculateTotalValueOfHandDealer(dealer.playersHand);
		console.log(dealer.playersHand);
		console.log(dealerTotal);
	};

	$("#stand").click(stand);

	/*=============================
	PLAY AGAIN FUNCTION
	=============================*/
	var playAgain = function(z) {

		for(var r=0; r<=player.playersHand.length; r++) {
			var hand = player.playersHand[r].pop();
			deck.cards.push(hand);
		}

		for(var s=0; s<=dealer.playersHand.length; s++) {
			var hand2 = dealer.playersHand[r].pop();
			deck.cards.push(hand2);
		}

		console.log(player.playersHand);
		console.log(dealer.playersHand);
		console.log(deck);
	};

	$("#playAgain").click(playAgain);

	/*=============================
	CHANGE CARD PIC FUNCTION
	=============================*/
	//player deal card 0
	$("#deal").click(function() {
		$("#playerCard0").attr("src","playingcards/" + player.playersHand[0].suit + player.playersHand[0].rank + ".gif");
	});

	//player deal card 1
	$("#deal").click(function() {
		$("#playerCard1").attr("src","playingcards/" + player.playersHand[1].suit + player.playersHand[1].rank + ".gif");
	});

	//dealer card 0 face up
	$("#deal").click(function() {
		$("#dealerCard0").attr("src","playingcards/" + player.playersHand[0].suit + player.playersHand[0].rank + ".gif");
	});

	//dealer card 1 face down
	$("#deal").click(function() {
		$("#dealerCard1").attr("src","playingcards/b2fv.gif");
	});

	//player hit card 2
	$("#hit").click(function() {
		$("#playerCard2").attr("src","playingcards/" + player.playersHand[2].suit + player.playersHand[2].rank + ".gif");
	});

	//player stand
	$("#stand").click(function() {
		$("#dealerCard1").attr("src","playingcards/" + dealer.playersHand[1].suit + dealer.playersHand[1].rank + ".gif");
	});

	$("#stand").click(function() {
		$("#dealerCard2").attr("src","playingcards/" + dealer.playersHand[2].suit + dealer.playersHand[2].rank + ".gif");
	});














});  // ready