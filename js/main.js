(function($) {
	
	var numLetters = 1;

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

	function ArabicLetters() {
		this.letters = [ this.ALIF, this.BAA, this.TAA, this.THAA, this.JEEM, this.HAA, this.KHAA, this.DAAL,this.ZHAAL,   
				            this.RAA, this.ZAA, this.SEEN, this.SHEEN, this.SAAD, this.DHAAD, this.TOY, this.DHOY, 
				            this.AYN, this.GHAYN, this.FAA, this.QAAF, this.KAAF, this.LAAM, this.MIM, this.NOON, this.HA, 
				            this.WOW, this.TAA_MARBOOTHAH, this.ALIF_MAKSOOR, this.YA];
		this.vowels = [this.FATHATAAN, this.KASRATAAN, this.DAMMATAAN, this.FATHA, this.KASRA, this.DAMMA, this.SHADDAH, this.SUKOON];
	}

	$.extend(ArabicLetters.prototype, {
		ALIF : '\u0627',
		BAA : '\u0628',
		TAA_MARBOOTHAH : '\u0629',
		TAA : '\u062A',
		THAA : '\u062B',
		JEEM : '\u062C',
		HAA : '\u062D',
		KHAA : '\u062E',
		DAAL : '\u062F',
		ZHAAL : '\u0630',
		RAA : '\u0631',
		ZAA : '\u0632',
		SEEN : '\u0633',
		SHEEN : '\u0634',
		SAAD : '\u0635',
		DHAAD : '\u0636',
		TOY : '\u0637',
		DHOY : '\u0638',
		AYN : '\u0639',
		GHAYN : '\u063A',
		FAA : '\u0641',
		QAAF : '\u0642',
		KAAF : '\u0643',
		LAAM : '\u0644',
		MIM : '\u0645',
		NOON : '\u0646',
		HA : '\u0647',
		WOW : '\u0648',
		ALIF_MAKSOOR : '\u0649',
		YA : '\u064A',

		FATHATAAN : '\u064B',
		KASRATAAN : '\u064C',
		DAMMATAAN : '\u064D',
		FATHA : '\u064E',
		KASRA : '\u064F',
		DAMMA : '\u0650',
		SHADDAH : '\u0651',
		SUKOON : '\u0652',

		setOptions: function(options) {
			
		},
		
		getTranscription : function(arabic) {
			return "[answer goes here]";
		},

		generateVowel : function(isFirst, isLast, letter) {
			var approVowels;
			if (isFirst) {
				approVowels = [this.FATHA, this.KASRA, this.DAMMA];
			} else if (isLast) {
				approVowels = removeFrom(this.vowels, this.SUKOON);
			} else {
				approVowels = removeFrom(this.vowels, [this.FATHATAAN, this.KASRATAAN, this.DAMMATAAN]);
			}
			var vowel = randomOneFrom(approVowels);
			if (vowel == this.SHADDAH) {
				vowel += randomOneFrom(removeFrom(approVowels, [this.SHADDAH, this.SUKOON]));
			}
			return vowel;
		},
		
		generateLetter : function(isFirst, isLast) {
			var approLetters;
			if (isLast) {
				approLetters = this.letters;
			} else {
				approLetters = removeFrom(this.letters, [this.TAA_MARBOOTHAH, this.ALIF_MAKSOOR]);
			}
			return randomOneFrom(approLetters);
		}, 
		
		getNewArabic : function() {
			var text = "";
			for (var i = 0; i < numLetters; i++) {
				var isFirst = i == 0;
				var isLast = i+1 == numLetters;
				var letter = this.generateLetter(isFirst, isLast);
				text += letter + this.generateVowel( isFirst, isLast, letter );
			}
			return text;
		},

		getQuestionAnswer : function() {
			var arabic = this.getNewArabic();
			return { "question":arabic, "answer":this.getTranscription(arabic) };
		}
	});

	
	var cardSet = new ArabicLetters();
	
	$("#workarea .nextBtn").click( function() { 
		$("#workarea").addClass("testing");
		var card = cardSet.getQuestionAnswer();
		$("#workarea .question").html(card.question);
		$("#workarea .answer").html(card.answer);
	});
	
	$("#workarea .answerBtn").click( function() {
		$("#workarea").removeClass("testing");
	});
	
	$("#options #numLetters").change(function(e) {
		numLetters = $("#options #numLetters option:selected").val();
	});
}(jQuery));
