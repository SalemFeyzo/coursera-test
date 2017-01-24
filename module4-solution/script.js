(function(window){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var name in names){
	
		if (names[name][0] == "J" || names[name][0] == "j"){
			helloSpeaker.speak(names[name]);
		}else{
			ByeSpeaker.speak(names[name]);
		}
	}	
})(window);
