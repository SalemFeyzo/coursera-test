(function(window){
	var speakWord = "Good Bye";
	var ByeSpeaker = {};
	ByeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.ByeSpeaker = ByeSpeaker;
})(window);