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
			card = new Card("Hearts", h, h);
			this.cards.push(card);
		}
		this.cards.push(new Card("Hearts","Jack", 10));
		this.cards.push(new Card("Hearts","Queen", 10));
		this.cards.push(new Card("Hearts","King", 10));
		this.cards.push(new Card("Hearts","Ace", 11));

	

		/*=============================
		CLUBS
		=============================*/
		var cardClubs;
		for (var c = 13; c<=21; c++) {
			cardClubs = new Card("Clubs", (c-11), (c-11));
			this.cards.push(cardClubs);
		}
		this.cards.push(new Card("Clubs","Jack", 10));
		this.cards.push(new Card("Clubs","Queen", 10));
		this.cards.push(new Card("Clubs","King", 10));
		this.cards.push(new Card("Clubs","Ace", 11));

		/*=============================
		DIAMONDS
		=============================*/
		var cardDiamonds;
		for (var d = 24; d<=32; d++) {
			cardDiamonds = new Card("Diamonds", (d-22), (d-22));
			this.cards.push(cardDiamonds);
		}
		this.cards.push(new Card("Diamonds","Jack", 10));
		this.cards.push(new Card("Diamonds","Queen", 10));
		this.cards.push(new Card("Diamonds","King", 10));
		this.cards.push(new Card("Diamonds","Ace", 11));

		/*=============================
		SPADES
		=============================*/
		var cardSpades;
		for (var s = 35; s<=43; s++) {
			cardSpades = new Card("Spades", (s-33), (s-33));
			this.cards.push(cardSpades);
		}
		this.cards.push(new Card("Spades","Jack", 10));
		this.cards.push(new Card("Spades","Queen", 10));
		this.cards.push(new Card("Spades","King", 10));
		this.cards.push(new Card("Spades","Ace", 11));


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
	var playAgain = function() {

		player.playersHand = [];
		dealer.playersHand = [];

		console.log(player.playersHand);
		console.log(dealer.playersHand);
	};

	$("#playAgain").click(playAgain);


});  // ready
