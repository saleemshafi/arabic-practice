(function(window, $) {
	
	var cardsets = [];
	
	function registerCardSet(name, cards) {
		cardsets[name] = cards;
	}
	
	function selectCardSet(name) {
		if (cardsets[name] != undefined) {
			cardSet = cardsets[name];
		} else cardSet = cardsets["sample"];
	}

	function randomOneFrom(list) {
		return list[Math.floor((Math.random()*list.length))];
	}
	
	function removeFrom(list, items) {
		var newList = list.slice();
		if (!$.isArray(items)) { items = [items]; }
		items.forEach( function(item) { 
			var index = newList.indexOf(item);
			if (index != -1) {
				newList.splice(index, 1);
			}
		} );
		return newList;
	}

	
	function StaticCards(cardMap) {
		this.cards = [];
		for (var question in cardMap) {
			this.cards.push({"question":question, "answer":cardMap[question]});
		}
	}
	
	$.extend(StaticCards.prototype, {
		getQuestionAnswer : function() {
			return randomOneFrom(this.cards);
		}
	});

	var sampleCards = {
		"wahid": "one",
		"ithnaan": "two",
		"thalaatha": "three",
		"arba3a": "four"
	};
	
	
	registerCardSet("sample", new StaticCards(sampleCards));
	selectCardSet("sample");
	
	$("#workarea .nextBtn").click( function() { 
		$("#workarea").addClass("testing");
		var card = cardSet.getQuestionAnswer();
		$("#workarea .question").html(card.question);
		$("#workarea .answer").html(card.answer);
	});
	
	$("#workarea .answerBtn").click( function() {
		$("#workarea").removeClass("testing");
	});
	
	window.registerCardSet = registerCardSet;
	window.selectCardSet = selectCardSet;
	window.StaticCards = StaticCards;
}(window, jQuery));
