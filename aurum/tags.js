// JavaScript Document

$(function() {
			var tags = [
			  "are you male or female",
			  "who made you",
			  "who are you",
			  "who is your creator",
			  "what is the time",
			  "what is your age",
			  "what is your name",
			  "what gender are you",
			  "what is the weather like",
			  "okay assistant",
			  "about me",
			  "http://",
			  "https://",
			  "how are you",
			  "how old are you",
			  "show me the time",
			  "show me commands",
			  "show me the weather",
			  "tell me a joke"
			];
			$( "#srch" ).autocomplete({
			   minLength:2,   
			   delay:0,   
			   source: tags
			});
		 });