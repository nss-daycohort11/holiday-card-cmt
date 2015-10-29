var Translator = (function(translator) {
	// PRIVATE
	var italianLexicon = {
	"merry": "allegro",
        "christmas": "natale",
        "and": "e",
        "happy": "contento",
        "new": "nuovo",
        "year": "anno",
        "we": "noi",
        "wish": "desuderare",
        "you": "tu",
        "a": "un",
        "joy": "gioia",
        "joyful": "gioioso",
        "happy": "contento",
        "holidays": "vacanze",
        "let": "lasciare",
        "it": "esso",
        "snow": "neve",
        "cheer": "rallegrare",
        "love": "amare",
        "peace": "pace",
        "joy": "gioia",
        "from": "da",
        "warmest": "piu caldo",
        "wishes": "auguri"
	};

	translator.toItalian = function(text) {
		var text = text.toLowerCase();	
		for (key in italianLexicon) {
			var  word = new RegExp(key,"g");
			text = text.replace(word, italianLexicon[key]);
		}
		return text;
	};
 	// PUBLIC
	return translator;
})(Translator);