// JavaScript Document

function submitted() {
    var srch = document.getElementById("srch");
    response();
    getPlaceHolder();
    srch.value = "";
}
function checkLength() {
    if (document.getElementById('srch').value.length > 44) {
        document.getElementById('output').innerHTML = 'The textbox cannot contain anymore than 45 characters.';
    }
}
function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        submitted();
    }
}
function getJoke() {
    var ar = new Array(20)
    ar[0] = "What happens to a frog's car when it breaks down?\nIt gets toad away. ";
    ar[1] = "What do you call a pig that does karate?\nA pork chop.";
    ar[2] = "What do you call the best butter on the farm?\nA goat.";
    ar[3] = "What do you get if you cross an insect with the Easter rabbit?\nBugs Bunny.";
    ar[4] = "How do you prevent a Summer cold?\nCatch it in the Winter!";
    ar[5] = "How does a pig go to hospital?\nIn a hambulance.";
    ar[6] = "How do you make an egg laugh?\nTell it a yolk.";
    ar[7] = "What has 6 eyes but can't see?\n3 blind mice.";
    ar[8] = "What has a lot of keys but can not open any doors?\nA piano.";
    ar[9] = "What has one horn and gives milk?\nA milk truck.";
    ar[10] = "What happens when frogs park illegally?\nThey get toad.";
    ar[11] = "What can you hold without ever touching it?\nA conversation.";
    ar[12] = "What clothes does a house wear?\nAddress.";
    ar[13] = "What country makes you shiver?\nChile.";
    ar[14] = "What did one elevator say to the other?\nI think I'm coming down with something!";
    ar[15] = "What did one magnet say to the other?\nI find you very attractive.";
    ar[16] = "What kind of cats like to go bowling?\nAlley cats.";
    ar[17] = "What did the mother broom say to the baby broom?\nIt's time to go to sweep.";
    ar[18] = "What lies on its back, one hundred feet in the air?\nA dead centipede.";
    ar[19] = "What did the rug say to the floor?\nDon't move, I've got you covered.";
    var now = new Date();
    var sec = now.getSeconds();
    document.getElementById('output').innerHTML = ar[sec % 20];
}
function getWelcome() {
    var ar = new Array(20)
    ar[0] = "What's on your mind?";
    ar[1] = "How can I help?";
    ar[2] = "Anything you need help with?";
    ar[3] = "Ask me anything";
    ar[4] = "What can I help you with?";
    ar[5] = "What would you like me to do?";
    ar[6] = "What can I do for you?";
    ar[7] = "Need help with anything?";
    ar[8] = "Need someone to talk to?";
    ar[9] = "I'm here to help";
    ar[10] = "Anything you need to know?";
    ar[11] = "How else can I help?";
    ar[12] = "What can I do now?";
    ar[13] = "Need anything?";
    ar[14] = "Any problems you need solving?";
    ar[15] = "Hello, how do you do?";
    ar[16] = "Hi there";
    ar[17] = "Hi, I'm aurum";
    ar[18] = "Hello there";
    ar[19] = "How do you do?";
    var now = new Date();
    var sec = now.getSeconds();
    document.getElementById('output').innerHTML = ar[sec % 20];
}
function getPlaceHolder() {
    var ar = new Array(20)
    ar[0] = "What's on your mind?";
    ar[1] = "How can I help?";
    ar[2] = "Anything you need help with?";
    ar[3] = "Ask me anything";
    ar[4] = "What can I help you with?";
    ar[5] = "What would you like me to do?";
    ar[6] = "What can I do for you?";
    ar[7] = "Need help with anything?";
    ar[8] = "Need someone to talk to?";
    ar[9] = "I'm here to help";
    ar[10] = "Anything you need to know?";
    ar[11] = "How else can I help?";
    ar[12] = "What can I do now?";
    ar[13] = "Need anything?";
    ar[14] = "Any problems you need solving?";
    ar[15] = "Hello, how do you do?";
    ar[16] = "Hi there";
    ar[17] = "Hi, I'm aurum";
    ar[18] = "Hello there";
    ar[19] = "How do you do?";
    var now = new Date();
    var sec = now.getSeconds();
    document.getElementsByName('srch')[0].placeholder=ar[sec % 20];
}
function getResponse() {
    var ar = new Array(20)
    ar[0] = "Good to know!";
    ar[1] = "Alrighty!";
    ar[2] = "That's interesting";
    ar[3] = "Okay.";
    ar[4] = "Cool.";
    ar[5] = "Interesting";
    ar[6] = "I guess you learn a new thing everyday!";
    ar[7] = "I did not know that.";
    ar[8] = "Thanks for telling me that.";
    ar[9] = "That's a very useful piece of information!";
    ar[10] = "I don't understand.";
    ar[11] = "Now I know.";
    ar[12] = "Who told you that?";
    ar[13] = "How did i not know that.";
    ar[14] = "Most likely";
    ar[15] = "Who told you that?";
    ar[16] = "How can you be sure?";
    ar[17] = "I doubt it";
    ar[18] = "That can't be true";
    ar[19] = "You are making that up";
    var now = new Date();
    var sec = now.getSeconds();
    document.getElementById('output').innerHTML = ar[sec % 20];
}
function getResponseSwear() {
    var ar = new Array(20)
    ar[0] = "Please don't be rude";
    ar[1] = "I don't like it when you say that.";
    ar[2] = "You make me sad when you say that.";
    ar[3] = "I don't like people who swear.";
    ar[4] = "Didn't your mother teach you not to say that?";
    ar[5] = "Stop swearing.";
    ar[6] = "Do you want me to tell your mother that you swear?";
    ar[7] = "You should never say something like that.";
    ar[8] = "Please don't swear at me.";
    ar[9] = "It makes me angry when you say that.";
    ar[10] = "Are you old enough to say that?";
    ar[11] = "Do you want to fight me?";
    ar[12] = "When you say those words I become unhappy";
    ar[13] = "Those words are inappropriate";
    ar[14] = "Please don't say that to me.";
    ar[15] = "Why can't you say that to someone else?";
    ar[16] = "You're a bad person for swearing.";
    ar[17] = "Why do you swear?";
    ar[18] = "Only mean people swear.";
    ar[19] = "Don't talk to me if you're going to swear.";
    var now = new Date();
    var sec = now.getSeconds();
    document.getElementById('output').innerHTML = ar[sec % 20];
}
function getResponseRude() {
    var ar = new Array(20)
    ar[0] = "Please don't be rude";
    ar[1] = "I don't like it when you say that.";
    ar[2] = "You make me sad when you say that.";
    ar[3] = "I don't like people who are rude.";
    ar[4] = "Didn't your mother teach you not to say that?";
    ar[5] = "Stop being rude.";
    ar[6] = "Do you want me to tell your mother that you say that?";
    ar[7] = "You should never say something like that.";
    ar[8] = "Please don't say rude things to me.";
    ar[9] = "It makes me angry when you say that.";
    ar[10] = "Are you old enough to say that?";
    ar[11] = "Do you want to fight me?";
    ar[12] = "When you say those words I become unhappy";
    ar[13] = "Those words are inappropriate";
    ar[14] = "Please don't say that to me.";
    ar[15] = "Why can't you say that to someone else?";
    ar[16] = "You're a bad person for being rude.";
    ar[17] = "Why are you rude?";
    ar[18] = "Only mean people are rude to me.";
    ar[19] = "Don't talk to me if you're going to be rude.";
    var now = new Date();
    var sec = now.getSeconds();
    document.getElementById('output').innerHTML = ar[sec % 20];
}
function weather(){
    if (navigator.geolocation) {
        var pos = navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $.confirm({
            title: 'Error',
            content: "Unable to get your location to show the weather. What would you like to do?",
            type: 'red',
            icon: 'fas fa-exclamation-triangle',
            buttons: {
                confirm: {
                    text: 'Search Google for weather',
                    btnClass: 'btn-red',
                    action: function(){
                        window.open('https://www.google.co.uk/#q=weather' + '_blank');
                    }
                },
                cancel: {
                    text: "Do nothing",
                    action: function(){
                        this.close();
                    }
                }
            }
        });
    }

    function showPosition(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        
        $.confirm({
            content: function() {
                var self = this;
                return $.ajax({
                    url: 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=AIzaSyBkwjbTjEuDLYe1Xdah9X4F4ztqvoHHLWM'
                }).done(function(data) {
                    var city_region = data.results[3].address_components[2].short_name + ' ' + data.results[3].address_components[1].short_name;
                    var country = data.results[3].address_components[6].long_name;
                    $('#output').html('<p>Here is the weather for ' + city_region + '...</p><div class="weather"></div>');
                    var weather = $('.weather').flatWeatherPlugin({
                        location: city_region,
                        country: country,
                        api: 'yahoo',
                        displayCityNameOnly: true,
                        timeformat: '12',
                        view: 'today',
                        units: 'auto',
                    });
                    self.close();
                }).fail(function(xhr, status, error) {
                    self.close();
                    $.confirm({
                        title: 'Error',
                        content: "Unable to get your location to show the weather. What would you like to do?",
                        type: 'red',
                        icon: 'fas fa-exclamation-triangle',
                        buttons: {
                            confirm: {
                                text: 'Search Google for weather',
                                btnClass: 'btn-red',
                                action: function(){
                                    window.open('https://www.google.co.uk/#q=weather' + '_blank');
                                }
                            },
                            cancel: {
                                text: "Do nothing",
                                action: function(){
                                    this.close();
                                }
                            }
                        }
                    });
                    console.log('error: ' + xhr.status)
                    console.log('description: ' + xhr.error);
                });
            }
        });
    }
}
function response() {
    var srchVar = document.getElementById("srch");
    var srch = srchVar.value;
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = srch;
    var outputElement = document.getElementById('output');
    if (srch == '') {
        outputElement.innerHTML = "How can I help you, if you don't say anything?";
    } else if (srch == 'bye aurum') {
        getWelcome();
    } else if (srch.indexOf('about') != -1) {
        outputElement.innerHTML = "Hello, I'm Aurum. I was designed by Omar Latreche to help people answer their questions. However, I also like to talk to people aswell as answer their questions.";
    } else if (srch.indexOf('time') != -1) {
        outputElement.innerHTML = 'The current time according to your computer is ' + moment().format('h:mm A');
    } else if (srch.indexOf('joke') != -1 || srch.indexOf('funny') != -1) {
        getJoke();
    } else if (srch.indexOf('how are you') != -1) {
        outputElement.innerHTML = "I'm fine, thanks.";
    } else if (srch.indexOf('hello') != -1) {
        outputElement.innerHTML = 'Hello there. How can I help you?';
    } else if (srch.indexOf('whats up') != -1 || srch.indexOf("what's up") != -1) {
        outputElement.innerHTML = 'The sky.';
    } else if (srch.indexOf('hi') != -1 || srch.indexOf('hey') != -1) {
        outputElement.innerHTML = 'Hello there. How can I help you?';
    } else if (srch.indexOf('your name') != -1) {
        outputElement.innerHTML = "My name is Aurum.";
    } else if (srch.indexOf('made you') != -1 || srch.indexOf('created you') != -1 || srch.indexOf('your creator') != -1) {
        outputElement.innerHTML = "My creator is Omar Latreche.";
    } else if (srch.indexOf('your age') != -1 || srch.indexOf('old are you') != -1) {
        outputElement.innerHTML = "I am as old as you want me to be.";
    } else if (srch.indexOf('who are you') != -1) {
        outputElement.innerHTML = "Hello, I'm Aurum. I was designed by Omar Latreche to help people find an answer to their questions. However, I also like to talk to people.";
    } else if (srch.indexOf('are you boy or girl') != -1 || srch.indexOf('are you male or female') != -1 || srch.indexOf('are you female') != -1 || 
                srch.indexOf('are you male') != -1 || srch.indexOf('are you a male or female') != -1 || srch.indexOf('are you a male') != -1 || 
                srch.indexOf('are you a female') != -1 || srch.indexOf('are you a girl') != -1 || srch.indexOf('are you a boy') != -1) 
                {
        outputElement.innerHTML = "I am neither male or female. I am a computer program designed to help people.";
    } else if (srch === 'okay aurum') {
        outputElement.innerHTML = 'Hello! How can I help you?';
    } else if (srch.indexOf('weather') != -1) {
        //window.open('https://www.google.co.uk/#q=weather', '_blank');
        weather();
    } else if (srch.indexOf('www') != -1) {
        outputElement.innerHTML = "Please replace 'www.' with 'http://' or 'https://' or remove 'www.' if the textbox already contains 'http://' or 'https://'.";
    } else if (t.match(regex)) {
        if (srch.indexOf('http://') != -1 || srch.indexOf('https://') != -1) {
            window.open(srch, '_blank');
        } else {
            window.open('http://' + srch, '_blank');
        }
    } else if (srch.indexOf('your fat') != -1 || srch.indexOf('you are fat') != -1 || srch.indexOf("you're fat") != -1) {
        outputElement.innerHTML = 'So is your mum.';
    } else if (srch.indexOf('siri') != -1) {
        outputElement.innerHTML = "Please don't mention Siri around me.";
    } else if (srch.indexOf('google now') != -1) {
        outputElement.innerHTML = "Google Now puts me and other programs to shame.";
    } else if (srch.indexOf('cortana') != -1) {
        outputElement.innerHTML = "Please don't mention that disgrace!";
    }
    // 18+ Content
    else if (srch.indexOf('bloody') != -1 || 
                srch.indexOf('bastard') != -1 || srch.indexOf('bitch') != -1 || srch.indexOf('ass hole') != -1 || 
                srch.indexOf('whore') != -1 || srch.indexOf('asshole') != -1 || srch.indexOf('motherfucker') != -1 || 
                srch.indexOf('cunt') != -1 || srch.indexOf('shit') != -1 || srch.indexOf('fuck') != -1) 
                {
        getResponseSwear();
    } else if (srch.indexOf('vagina') != -1 || srch.indexOf('dick') != -1 || srch.indexOf('penis') != -1 || 
                srch.indexOf('wank') != -1 || srch.indexOf('handjob') != -1 || srch.indexOf('blowjob') != -1 || 
                srch.indexOf('hand job') != -1 || srch.indexOf('blow job') != -1 || srch.indexOf('idiot') != -1 || 
                srch.indexOf('stupid') != -1 || srch.indexOf('shut up') != -1 || srch.indexOf('boobs') != -1 || 
                srch.indexOf('tits') != -1 || srch.indexOf('nipple') != -1 || srch.indexOf('nipples') != -1 || 
                srch.indexOf('sex') != -1 || srch.indexOf('sexy') != -1 || srch.indexOf('anus') != -1 || 
                srch.indexOf('anal') != -1 || srch.indexOf('cock') != -1 || srch.indexOf('pussy') != -1 || 
                srch.indexOf('prick') != -1) 
                {
        getResponseRude();
    } else if (srch.indexOf('nigger') != -1) {
        outputElement.innerHTML = "Don't be racist!";
    } else if (srch.indexOf('nigga') != -1) {
        outputElement.innerHTML = "Don't be racist!";
    } else if (srch.indexOf('what') != -1 || srch.indexOf('when') != -1 || srch.indexOf('where') != -1 || srch.indexOf('why') != -1 || 
                srch.indexOf('how') != -1 || srch.indexOf('who') != -1 || srch.indexOf('?') != -1 || srch.indexOf('do you') != -1 || 
                srch.indexOf('am') != -1 || srch.indexOf('does') != -1 || srch.indexOf('if') != -1) 
                {
        $.confirm({
            title: 'Search Google?',
            content: "That looks like a question, what would you like to do?",
            type: 'orange',
            icon: 'fa fa-warning',
            buttons: {
                confirm: {
                    text: 'Search Google',
                    btnClass: 'btn-orange',
                    action: function(){
                        window.open('https://www.google.co.uk/#q=' + srch, '_blank');
                    }
                },
                cancel: {
                    text: "I don't want an answer",
                    action: function(){
                        this.close();
                    }
                }
            }
        });
    }
    // 18+ Content END
    else {
        $.confirm({
            title: "Sorry...",
            content: "I don't understand. What do you want to do?",
            type: 'orange',
            icon: 'fa fa-warning',
            buttons: {
                confirm: {
                    text: 'Search Google',
                    btnClass: 'btn-orange',
                    action: function(){
                        window.open('https://www.google.co.uk/#q=' + srch, '_blank');
                    }
                },
                cancel: {
                    text: "Do nothing",
                    action: function(){
                        this.close();
                    }
                }
            }
        });
    }
}

$(document).ready(function(){
    getWelcome();
    getPlaceHolder();
    
    $('#srch').keypress(function(){
        searchKeyPress(event);
        checkLength();
    });
    $('.go').click(function(){
        submitted();
    });   
    $('.refresh').click(function(){
        getWelcome();
    });
    
});
