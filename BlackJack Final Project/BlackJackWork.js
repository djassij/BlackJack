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
			cards.push(card);
		}
		cards.push(new Card("Hearts","Jack", 10));
		cards.push(new Card("Hearts","Queen", 10));
		cards.push(new Card("Hearts","King", 10));
		cards.push(new Card("Hearts","Ace", 11));

	

		/*=============================
		CLUBS
		=============================*/
		var cardClubs;
		for (var c = 13; c<=21; c++) {
			cardClubs = new Card("Clubs", (c-11), (c-11));
			cards.push(cardClubs);
		}
		cards.push(new Card("Clubs","Jack", 10));
		cards.push(new Card("Clubs","Queen", 10));
		cards.push(new Card("Clubs","King", 10));
		cards.push(new Card("Clubs","Ace", 11));

		/*=============================
		DIAMONDS
		=============================*/
		var cardDiamonds;
		for (var d = 24; d<=32; d++) {
			cardDiamonds = new Card("Diamonds", (d-22), (d-22));
			cards.push(cardDiamonds);
		}
		cards.push(new Card("Diamonds","Jack", 10));
		cards.push(new Card("Diamonds","Queen", 10));
		cards.push(new Card("Diamonds","King", 10));
		cards.push(new Card("Diamonds","Ace", 11));

		/*=============================
		SPADES
		=============================*/
		var cardSpades;
		for (var s = 35; s<=43; s++) {
			cardSpades = new Card("Spades", (s-33), (s-33));
			cards.push(cardSpades);
		}
		cards.push(new Card("Spades","Jack", 10));
		cards.push(new Card("Spades","Queen", 10));
		cards.push(new Card("Spades","King", 10));
		cards.push(new Card("Spades","Ace", 11));


	    // for (var i=0; i<deck.length; i++) {
	    // 	console.log(deck[i].suit + ", " + deck[i].rank + ", " + deck[i].val);
	    // }

	    /*=============================
		SHUFFLE FUNCTION
		=============================*/
	    Deck.prototype.shuffle = function(array) 
	    {
	        var r1, r2, temp; 
	    	for(i=0; i<=100; i++) {
	    		
	    		r1 = Math.floor(Math.random() * cards.length);
	    		r2 = Math.floor(Math.random() * cards.length);   		
	    		temp = cards[r1];
	    		cards[r1] = cards[r2];
	    		cards[r2] = temp;
	    	}
		};

		Deck.prototype.deal = function() {
			shuffle(cards);
			
			console.log(playersHand);
			console.log(dealersHand);
		};

	$("#deal").click(deal);

	}
    
    /*====================================================
	PLAYER CLASS
	====================================================*/
	function Player () {
		this.hand = [];
		this.total = 0;
		this.bankRoll = 1000;
		this.bet = 0;
		var player = this;
		

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
		MAKE BET FUNCTION
		=============================*/
		Player.prototype.getBet = function()
		{ 
			/* when place bet is clicked, take whatever value is in "Enter bet here" box and save it as this.bet
			*/
		};

	
    /*====================================================
	MAIN IS THE BRAIN!!!!!!!
	====================================================*/
    var player = new Player();
    var dealer = new Player();
	var deck = new Deck();
	var original2CardsDealt;

	original2CardsDealt = deck.dealInitialTwocards(); // Returns an array of cards
	player.addCards(original2CardsDealt); // Pass original 2 cards to player
	original2CardsDealt = deck.dealInitialTwocards(); // Returns an array of cards
	dealer.addCards(original2CardsDealt); // Pass original 2 cards to player
    


    	// p.myBet = $("#submitBet").click(function() {
			 	// bet = $("#betAmount").val();
			 	// console.log("bet = " + bet);
			 	// return bet;
	    //   });


    


	/*=============================
	DEAL FUNCTION
	=============================*/
	// var deal = function() {
	// 	shuffle(cards);
	// 	playersHand = [cards[0], cards[1]];
	// 	dealersHand = [cards[2]];
		
	// 	console.log(playersHand);
	// 	console.log(dealersHand);
	// };

	// $("#deal").click(deal);

	/*=============================
	HIT FUNCTION
	=============================*/
	var hit = function() {

		playersHand = [cards[0], cards[1], cards[4]];
		dealersHand = [cards[2], cards[3]];

		console.log(playersHand);
		console.log(dealersHand);

		//console.log("You Win!");
	};

	$("#hit").click(hit);

	/*=============================
	STAND FUNCTION
	=============================*/
	var stand = function() {

		playersHand = [cards[0], cards[1]];
		dealersHand = [cards[2], cards[3]];

		console.log(playersHand);
		console.log(dealersHand);

		//console.log("You Lose!");
	};

	$("#stand").click(stand);

	/*=============================
	PLAY AGAIN FUNCTION
	=============================*/
	var playAgain = function() {

		playersHand = [];
		dealersHand = [];
		yourBet = 0;

		console.log(playersHand);
		console.log(dealersHand);
	};

	$("#playAgain").click(playAgain);


});  // ready