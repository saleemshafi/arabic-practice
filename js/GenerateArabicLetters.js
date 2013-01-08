var fs = require('fs');
var a = require('./ArabicLetters.js');

var LOG_ERROR_ONLY = function(err) { if(err) console.log(err); };


function getArabicLetterCards() {
	var output =  "(function(window, $) {\n"+
				  "	window.FlashCards.registerCardSet('arabicLetters', new StaticCards({\n";
		for (var i = 0; i < a.letters.length; i++) {
			if (i == 0 || i == 29 || i == 30 || i == 31) continue; // skip alif, alif maksoor, and both hamzas
			for (var j = 0; j < 6; j++) {
				var letter = a.letters[i];
				var vowel = a.vowels[j];
				var question = letter + vowel;
				var answer = a.letter_translit[i]+a.vowel_translit[j];
				output += "		\""+question+"\" : \""+answer+"\",\n";
			}
		}
		output += "		\"أً\" : \"`an\",\n";	// hamza fatha
		output += "		\"أٌ\" : \"`un\",\n";  // hamza damma
		output += "		\"إٍ\" : \"`in\",\n";  // hamza kasra
		output += "		\"أَ\" : \"`a\",\n";	// hamza fatha
		output += "		\"أُ\" : \"`u\",\n";  // hamza damma
		output += "		\"إِ\" : \"`i\",\n";  // hamza kasra
		output += "	}));\n"+
				  "}(window, jQuery));";
	
	return output;
}

fs.writeFile("./cards.arabicLetters.js", getArabicLetterCards(), "utf-8", LOG_ERROR_ONLY);