// JavaScript Document

function searchKeyPress(e){
		e = e || window.event;
		if (e.keyCode == 13){
			document.getElementById('btn').click();
		}
}
function command() {
	var srchVar = document.getElementById("srch");
	var srch = srchVar.value;
	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);
	var t = srch;
	
	if(srch == '') { alert('Please do not leave the field empty!'); }
	
	else if(srch.indexOf('about') != -1) { alert('The function of this project is to complete simple tasks and sometimes answer simple questions. \n\nMade by Omar Latreche. \n\n(c) Copyright Omar Latreche 2015'); }
	
	else if(srch.indexOf('commands') != -1) { window.location = "commands.html"; }
	
	else if(srch.indexOf('time') != -1) { alert('The current time according to your computer is' + ShowTime(new Date())); }
	
	else if(srch.indexOf('what') != -1) { if (confirm('I can see that is a question. Would you like to search Google for the answer?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
	else { /* Nothing */ }; }
	
	else if(srch.indexOf('when') != -1) { if (confirm('I can see that is a question. Would you like to search Google for the answer?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
	else { /* Nothing */ }; }
	
	else if(srch.indexOf('where') != -1) { if (confirm('I can see that is a question. Would you like to search Google for the answer?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
	else { /* Nothing */ }; }
	
	else if(srch.indexOf('why') != -1) { if (confirm('I can see that is a question. Would you like to search Google for the answer?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
	else { /* Nothing */ }; }
	
	else if(srch.indexOf('how') != -1) { if (confirm('I can see that is a question. Would you like to search Google for the answer?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
	else { /* Nothing */ }; }
	
	else if(srch.indexOf('who') != -1) { if (confirm('I can see that is a question. Would you like to search Google for the answer?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
	else { /* Nothing */ }; }
	
	else if(srch.indexOf('?') != -1) { if (confirm('I can see that is a question. Would you like to search Google for the answer?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
	else { /* Nothing */ }; }
	
	else if(srch === 'okay assistant') { alert('Hello! How can I help you?'); }
	
	else if(srch.indexOf('weather') != -1) { window.open('https://www.google.com/#q=weather', '_blank'); }
	
	else if(t.match(regex)) { window.open(srch, '_blank'); }
	
	else { if (confirm('I am sorry but I do not understand that command. Would you like to search Google for that command?') == true) { window.open('https://www.google.com/#q=' + srch, '_blank'); }
		else { /* Nothing */ }
	}
}
//Show time in 12hour format
var ShowTime = (function () {
    function addZero(num) {
        return (num >= 0 && num < 10) ? "0" + num : num + "";
    }

    return function (dt) {
        var formatted = '';

        if (dt) {
            var hours24 = dt.getHours();
            var hours = ((hours24 + 11) % 12) + 1;
            formatted = [formatted, [addZero(hours), addZero(dt.getMinutes())].join(":"), hours24 > 11 ? "PM" : "AM"].join(" ");            
        }
        return formatted;
    };
})();
// Auto Complete
  $(function() {
    var availableTags = [
      "What is the time",
      "What is the weather like",
      "What",
      "How does",
      "Why do",
      "Why have",
      "Okay Assistant",
      "When is",
      "When does",
      "Who does",
      "Why does",
      "When can",
      "When",
      "Where is",
      "Where",
      "What is",
      "Show me commands",
      "Show",
      "About",
      "http://",
      "https://",
      "How is",
	  "Show me the weather",
	  "Show me the time"
    ];
    $( "#srch" ).autocomplete({
      source: availableTags
    });
  });