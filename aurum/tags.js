// JavaScript Document

$(function() {
    var tags = [
        "who are you",
        "what is the time",
        "what is the weather like",
        "http://",
        "https://",
        "tell me a joke"
    ];
    $( "#srch" ).autocomplete({
        minLength:3,
        delay:0,
        source: tags
    });
});