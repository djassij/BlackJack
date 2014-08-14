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

	var showDealtCards = function() {
		$("#playerCard0").attr("src","playingcards/" + player.playersHand[0].suit + player.playersHand[0].rank + ".gif");

		$("#playerCard1").attr("src","playingcards/" + player.playersHand[1].suit + player.playersHand[1].rank + ".gif");

		$("#dealerCard0").attr("src","playingcards/" + player.playersHand[0].suit + player.playersHand[0].rank + ".gif");
	
		$("#dealerCard1").attr("src","playingcards/b2fv.gif");
	};

	$("#deal").click(showDealtCards);
//===========================================================================================================================
//===========================================================================================================================
//===========================================================================================================================
	//player hit card 2
var hitAgain = function() {
	$("#playerCard3").attr("src","playingcards/" + player.playersHand[3].suit + player.playersHand[3].rank + ".gif");
};

	var hitClickedOnce = 0;

	$("#hit").click(function() {
		$("#playerCard2").attr("src","playingcards/" + player.playersHand[2].suit + player.playersHand[2].rank + ".gif");
		hitClickedOnce = hitClickedOnce + 1;
		
		if (hitClickedOnce === 1) {
			$("#hit").click(hitAgain);
		}
	});



	var showHitCards = function() {
		$("#playerCard" + player.playersHand.length).attr("src","playingcards/" + player.playersHand[player.playersHand.length].suit + player.playersHand[player.playersHand.length].rank + ".gif");
	};

	$("#hit").click(showHitCards);
//===========================================================================================================================
//===========================================================================================================================
//===========================================================================================================================
$("#stand").click(function() {
		$("#dealerCard1").attr("src","playingcards/" + dealer.playersHand[1].suit + dealer.playersHand[1].rank + ".gif");
	});

	$("#stand").click(function() {
		$("#dealerCard2").attr("src","playingcards/" + dealer.playersHand[2].suit + dealer.playersHand[2].rank + ".gif");
	});

	var showStandCards = function() {
		$("#dealerCard1").attr("src","playingcards/" + dealer.playersHand[1].suit + dealer.playersHand[1].rank + ".gif");

		$("#dealerCard2").attr("src","playingcards/" + dealer.playersHand[2].suit + dealer.playersHand[2].rank + ".gif");
	};

	$("#stand").click(showStandCards);







Player.prototype.addToHand = function(card) {
			this.playersHand.push(card);
			var n = this.playersHand.length - 1;
			$("#playerCard" + n).attr("src","playingcards/" + card.suit + card.rank + ".gif");

		};


Deck.prototype.dealInitialTwoCards = function(player) {
			//var twoCards= [];
			var card1 = this.cards.pop();
			var card2 = this.cards.pop();
			player.addToHand(card1);
			player.addToHand(card2);	

		};





$("#hit").click(function() {
		$("#playerCard2").attr("src","playingcards/" + player.playersHand[2].suit + player.playersHand[2].rank + ".gif");
	});









