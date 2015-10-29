var Translator = (function(translator){



	var germanLexicon = {
		"merry": "fröhlich",
		"christmas": "weihnachten",
		"and": "und",
		"happy": "glucklich",
		"new": "neu",
		"year": "jahr",
		"we": "wir",
		"wish": "wunsch",
		"you": "sie",
		"a": "ein",
		"joy": "freude",
		"joyful": "freudige",
		"happy": "glucklich",
		"holidays": "ferien",
		"let": "lassen",
		"it": "es",
		"snow": "schnee",
		"cheer": "jubeln",
		"love": "liebe",
		"peace": "peace",
		"joy": "freude",
		"from": "von",
		"warmest": "warmsten",
		"wishes": "wunshcen",

	}

translator.toGerman = function(text) {
        var text = text.toLowerCase();    
        for (key in germanLexicon) {
            var  word = new RegExp(key,"g");
            text = text.replace(word, germanLexicon[key]);
        }
        return text;
    };
    // PUBLIC
    return translator;
})(Translator);



		

