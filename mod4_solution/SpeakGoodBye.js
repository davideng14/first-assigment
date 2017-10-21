
(function(w){
	var speakWord = "Good Bye";

	var byeSpeaker ={
		speak: function(name) {
		  console.log(speakWord + " " + name);
		}	
	}

	w.byeSpeaker = byeSpeaker;

})(window)

