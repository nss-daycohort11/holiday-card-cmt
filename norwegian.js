var Translator = (function(translator) {
	//Private

	var norwegianLexicon = {
		"hello": "hallo",
		"hi": "hei",
		"merry": "lystig",
		"christmas": "jul",
		"love": "elsker",
		"joy": "glede",
		"peace": "fred",
		"happy": "lykkelig",
		"new": "ny",
		"year": "år",
		"we": "vi",
		"wish": "ønsker",
		"you": "du",
		"a": "en",
		"holidays": "ferian",
		"let": "la",
		"it": "det",
		"snow": "snø",
		"cheer": "cheer",
		"from": "fra",
		"warmest": "varmeste",
		"wishes": "ønskene"
	}



translator.toNorwegian = function(text) {
        var text = text.toLowerCase();    
        for (key in norwegianLexicon) {
            var  word = new RegExp(key,"g");
            text = text.replace(word, norwegianLexicon[key]);
        }
        return text;
    };
    // PUBLIC
    return translator;
})(Translator);