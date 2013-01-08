function ArabicLetters() {
	this.ALIF = '\u0627';
	this.BAA = '\u0628';
	this.TAA = '\u062A';
	this.THAA = '\u062B';
	this.JEEM = '\u062C';
	this.HAA = '\u062D';
	this.KHAA = '\u062E';
	this.DAAL = '\u062F';
	this.ZHAAL = '\u0630';
	this.RAA = '\u0631';
	this.ZAA = '\u0632';
	this.SEEN = '\u0633';
	this.SHEEN = '\u0634';
	this.SAAD = '\u0635';
	this.DHAAD = '\u0636';
	this.TOY = '\u0637';
	this.DHOY = '\u0638';
	this.AYN = '\u0639';
	this.GHAYN = '\u063A';
	this.FAA = '\u0641';
	this.QAAF = '\u0642';
	this.KAAF = '\u0643';
	this.LAAM = '\u0644';
	this.MIM = '\u0645';
	this.NOON = '\u0646';
	this.HA = '\u0647';
	this.WOW = '\u0648';
	this.YA = '\u064A';
	this.TAA_MARBOOTHAH = '\u0629';
	this.ALIF_MAKSOOR = '\u0649';
	this.HAMZA = '\u0623';
	this.HAMZA_DOWN = '\u0625';

	this.FATHATAAN = '\u064B';
	this.DAMMATAAN = '\u064C';
	this.KASRATAAN = '\u064D';
	this.FATHA = '\u064E';
	this.DAMMA = '\u064F';
	this.KASRA = '\u0650';
	this.SHADDAH = '\u0651';
	this.SUKOON = '\u0652';
	
	this.letters = [ this.ALIF, this.BAA, this.TAA, this.THAA, this.JEEM,
			this.HAA, this.KHAA, this.DAAL, this.ZHAAL, this.RAA, this.ZAA,
			this.SEEN, this.SHEEN, this.SAAD, this.DHAAD, this.TOY, this.DHOY,
			this.AYN, this.GHAYN, this.FAA, this.QAAF, this.KAAF, this.LAAM,
			this.MIM, this.NOON, this.HA, this.WOW, this.YA,
			this.TAA_MARBOOTHAH, this.ALIF_MAKSOOR, this.HAMZA, this.HAMZA_DOWN ];
	this.vowels = [ this.FATHATAAN, this.DAMMATAAN, this.KASRATAAN, this.FATHA,
			this.DAMMA, this.KASRA, this.SHADDAH, this.SUKOON ];
	this.letter_translit = [ "a", "b", "t", "th", "j", "H", "KH", "d", "zh",
			"r", "z", "s", "sh", "S", "D", "T", "ZH", "'", "gh", "f", "Q", "K",
			"l", "m", "n", "h", "w", "y", "t", "a", "`", "`" ];
	this.vowel_translit = [ "an", "un", "in", "a", "u", "i", "_", "" ];
	
	return this;
}

module.exports = new ArabicLetters();