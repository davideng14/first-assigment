(function(w){

	var speakWord = "Hello";

	var helloSpeaker = {
		speak: function(name) {
		  console.log(speakWord + " " + name);
		}	
	}

	w.helloSpeaker = helloSpeaker;

})(window)