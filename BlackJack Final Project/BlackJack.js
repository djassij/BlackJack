$(document).ready(function() {
	
	// global
	var yourBet = 0;

	function Card (s, r, v) {
		this.suit = s;
		this.rank = r;
		this.val = v;
	}

	var vals = [0, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

	var deck = [];
	
	// Hearts
	var card;
	for (var h = 2; h<=10; h++) {
		card = new Card("Hearts", h, h);
		deck.push(card);
	}
	deck.push(new Card("Hearts","Jack", 10));
	deck.push(new Card("Hearts","Queen", 10));
	deck.push(new Card("Hearts","King", 10));
	deck.push(new Card("Hearts","Ace", 11));

	

	// Clubs
	var cardClubs;
	for (var c = 13; c<=21; c++) {
		cardClubs = new Card("Clubs", (c-11), (c-11));
		deck.push(cardClubs);
	}
	deck.push(new Card("Clubs","Jack", 10));
	deck.push(new Card("Clubs","Queen", 10));
	deck.push(new Card("Clubs","King", 10));
	deck.push(new Card("Clubs","Ace", 11));

	// Diamonds
	var cardDiamonds;
	for (var d = 24; d<=32; d++) {
		cardDiamonds = new Card("Diamonds", (d-22), (d-22));
		deck.push(cardDiamonds);
	}
	deck.push(new Card("Diamonds","Jack", 10));
	deck.push(new Card("Diamonds","Queen", 10));
	deck.push(new Card("Diamonds","King", 10));
	deck.push(new Card("Diamonds","Ace", 11));

	// Spades
	var cardSpades;
	for (var s = 35; s<=43; s++) {
		cardSpades = new Card("Spades", (s-33), (s-33));
		deck.push(cardSpades);
	}
	deck.push(new Card("Spades","Jack", 10));
	deck.push(new Card("Spades","Queen", 10));
	deck.push(new Card("Spades","King", 10));
	deck.push(new Card("Spades","Ace", 11));


    // for (var i=0; i<deck.length; i++) {
    // 	console.log(deck[i].suit + ", " + deck[i].rank + ", " + deck[i].val);
    // }


    var shuffle = function(array) {

        var r1, r2, temp; 
    	for(i=0; i<=100; i++) {
    		
    		r1 = Math.floor(Math.random() * deck.length);
    		r2 = Math.floor(Math.random() * deck.length);   		
    		temp = deck[r1];
    		deck[r1] = deck[r2];
    		deck[r2] = temp;
    	}
	};

	//for (i=0; i<deck.length; i++) {
    		//console.log(i + ": " + deck[i].suit + ", " + deck[i].rank + ", " + deck[i].val);
    	//}

	//shuffle(deck);

	// var card = deck[random(0, 51)]

	// var card1 = Math.floor(Math.random(10 * 11)); 
	// var card2 = Math.floor(Math.random(10 * 11));
	// var card3 = Math.floor(Math.random(10 * 11));

	


	var makeBet = function() {
		
		yourBet = $("#betAmount").val();
		console.log(yourBet);
	};

	$("#submitBet").click(makeBet);

	var playersHand = [];
	// var dealersHand = [];

	var deal = function() {

		shuffle(deck);
		playersHand = [deck[0], deck[1]];
		dealersHand = [deck[2]];
		
		console.log(playersHand);
		console.log(dealersHand);
	};

	$("#deal").click(deal);

	var hit = function() {

		playersHand = [deck[0], deck[1], deck[3]];
		dealersHand = [deck[2], deck[4]];

		console.log(playersHand);
		console.log(dealersHand);

		//console.log("You Win!");
	};

	$("#hit").click(hit);

	var stand = function() {

		playersHand = [deck[0], deck[1]];
		dealersHand = [deck[2], deck[3]];

		console.log(playersHand);
		console.log(dealersHand);

		//console.log("You Lose!");
	};

	$("#stand").click(stand);

	var playAgain = function() {

		playersHand = [];
		dealersHand = [];
		yourBet = 0;

		console.log(playersHand);
		console.log(dealersHand);
	};

	$("#playAgain").click(playAgain);


});