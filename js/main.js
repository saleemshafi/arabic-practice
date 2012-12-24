(function(window, $) {
	
	var FlashCards = {
		cardsets : [],
		cardSet : null,
		
		randomOneFrom : function(list) {
				return list[Math.floor((Math.random()*list.length))];
			},
			
		removeFrom : function(list, items) {
				var newList = list.slice();
				if (!$.isArray(items)) { items = [items]; }
				items.forEach( function(item) { 
					var index = newList.indexOf(item);
					if (index != -1) {
						newList.splice(index, 1);
					}
				} );
				return newList;
			},

		registerCardSet : function(name, cards) {
				this.cardsets[name] = cards;
				$("#cardset").append($("<option>", { value : name })
						.text(name)); 	
			},
			
		selectCardSet : function (name) {
				if (this.cardsets[name] == undefined) {
					name = "sample";
				}
				this.cardSet = this.cardsets[name];
				$("#cardset option:contains(\""+name+"\")").prop("selected", true);
				this.getNextCard();
			},

		getNextCard : function() {
				var card = this.cardSet.getQuestionAnswer();
				$("#workarea").addClass("testing");
				$("#workarea .question").html(card.question);
				$("#workarea .answer").html(card.answer);
			},
	};
	
	

	function StaticCards(cardMap) {
		this.cards = [];
		for (var question in cardMap) {
			this.cards.push({"question":question, "answer":cardMap[question]});
		}
	}
	
	$.extend(StaticCards.prototype, {
		getQuestionAnswer : function() {
			return FlashCards.randomOneFrom(this.cards);
		}
	});

	
	FlashCards.registerCardSet("sample", new StaticCards({
		"wahid": "one",
		"ithnaan": "two",
		"thalaatha": "three",
		"arba3a": "four"
	}));
	FlashCards.selectCardSet("sample");
	
	$("#workarea .nextBtn").click( FlashCards.getNextCard.bind(FlashCards) );
	
	$("#workarea .answerBtn").click( function() {
		$("#workarea").removeClass("testing");
	});
	
	$("#options #cardset").change( function() {
		FlashCards.selectCardSet( $("#options #cardset option:selected").val() );
	});
	
	window.StaticCards = StaticCards;
	window.FlashCards = FlashCards;

}(window, jQuery));
