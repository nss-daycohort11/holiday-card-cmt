$(document).ready(function() {
	// create a global variable to hold selected radio button value when click
	var translateToLanguage;

	// when radio button clicked, assign radio button value to 'translateToLanguage'
	$("input[type=radio]").click(function (event) {
		translateToLanguage = $(event.target).val();
	})
	
	// assign click handler to translate button
	$("button[name=translate").click(function() {
		console.log("You had a click on the translate me button");
		var cardText;

		// grab user input from textarea input element
			cardText = $(".cardText").val();
			console.log("translating to..."+translateToLanguage);
		// call corresponding Translator method (ie. toItalian, toGerman, etc.) and pass user text from text area
		if (translateToLanguage === "italian") {
			console.log(Translator.toItalian(cardText));
			// output translated text to DOM
			$(".translated-text").html(Translator.toItalian(cardText));
		}
		else if (translateToLanguage === "german") {
			console.log(Translator.toGerman(cardText));
			// output translated text to DOM
			$(".translated-text").html(Translator.toGerman(cardText));
		}
		if (translateToLanguage === "norwegian") {
			console.log(Translator.toNorwegian(cardText));
			// output translated text to DOM
			$(".translated-text").html(Translator.toNorwegian(cardText));
		}


	// store translated string in new variable
		
	});

	// grab translated text DOM element
	// output string to DOM element


}); 