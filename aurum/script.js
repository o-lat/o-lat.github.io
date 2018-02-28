// JavaScript Document

// TODO:
// Geocoder only returning location for London
// Joke api
// Fetch results from Google HTML using ajax

function setOutput(text){
    if ($('.switch :checkbox').is(':checked')) {
        $('.output').prepend('<p class="flashing">Speaking...</p>');
        $("div.search-cont > input").prop('disabled', true);
        $('.search-cont').css('border-left','8px solid #f0ad4e');
        
        console.log('started speaking');
        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[10]; // Note: some voices don't support altering params
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 1; // 0.1 to 10
        msg.text = text;
        msg.pitch = 2; //0 to 2
        msg.lang = 'en-US';
        
        speechSynthesis.speak(msg);

        msg.onend = function(e) {
            console.log('finshed speaking in ' + event.elapsedTime / 1000 + ' seconds.');
            $('div.output > .flashing').remove();
            $("div.search-cont > input").prop('disabled', false);
            $('.search-cont').css('border-left','8px solid #5cb85c');
            $('#srch').focus();
        };
        $('#output').html(text);
    } else {
        $('#output').html(text);
    }
    
}
function getJoke() {
    /*$.ajax({
        url: 'https://icanhazdadjoke.com/',
        success: function(data){
            console.log(data);
        },
        error: function(xhr, error, status){
            
        }
    });*/
    var items = [];
    items[0] = "What happens to a frog's car when it breaks down?\nIt gets toad away. ";
    items[1] = "What do you call a pig that does karate?\nA pork chop.";
    items[2] = "What do you call the best butter on the farm?\nA goat.";
    items[3] = "What do you get if you cross an insect with the Easter rabbit?\nBugs Bunny.";
    items[4] = "How do you prevent a Summer cold?\nCatch it in the Winter!";
    items[5] = "How does a pig go to hospital?\nIn a hambulance.";
    items[6] = "How do you make an egg laugh?\nTell it a yolk.";
    items[7] = "What has 6 eyes but can't see?\n3 blind mice.";
    items[8] = "What has a lot of keys but can not open any doors?\nA piano.";
    items[9] = "What has one horn and gives milk?\nA milk truck.";
    items[10] = "What happens when frogs park illegally?\nThey get toad.";
    items[11] = "What can you hold without ever touching it?\nA conversation.";
    items[12] = "What clothes does a house wear?\nAddress.";
    items[13] = "What country makes you shiver?\nChile.";
    items[14] = "What did one elevator say to the other?\nI think I'm coming down with something!";
    items[15] = "What did one magnet say to the other?\nI find you very attractive.";
    items[16] = "What kind of cats like to go bowling?\nAlley cats.";
    items[17] = "What did the mother broom say to the baby broom?\nIt's time to go to sweep.";
    items[18] = "What lies on its back, one hundred feet in the air?\nA dead centipede.";
    items[19] = "What did the rug say to the floor?\nDon't move, I've got you covered.";
    setOutput(items[Math.floor(Math.random() * items.length)]);
}
function getWelcome() {
    var items = [];
    items[0] = "What's on your mind?";
    items[1] = "How can I help?";
    items[2] = "Anything you need help with?";
    items[3] = "Ask me anything";
    items[4] = "What can I help you with?";
    items[5] = "What would you like me to do?";
    items[6] = "What can I do for you?";
    items[7] = "Need help with anything?";
    items[8] = "Need someone to talk to?";
    items[9] = "I'm here to help";
    items[10] = "Anything you need to know?";
    items[11] = "How else can I help?";
    items[12] = "What can I do now?";
    items[13] = "Need anything?";
    items[14] = "Any problems you need solving?";
    items[15] = "Hello, how do you do?";
    items[16] = "Hi there";
    items[17] = "Hi, I'm aurum";
    items[18] = "Hello there";
    items[19] = "How do you do?";
    setOutput(items[Math.floor(Math.random() * items.length)]);
}
function getPlaceHolder() {
    var items = [];
    items[0] = "What's on your mind?";
    items[1] = "How can I help?";
    items[2] = "Anything you need help with?";
    items[3] = "Ask me anything";
    items[4] = "What can I help you with?";
    items[5] = "What would you like me to do?";
    items[6] = "What can I do for you?";
    items[7] = "Need help with anything?";
    items[8] = "Need someone to talk to?";
    items[9] = "I'm here to help";
    items[10] = "Anything you need to know?";
    items[11] = "How else can I help?";
    items[12] = "What can I do now?";
    items[13] = "Need anything?";
    items[14] = "Any problems you need solving?";
    items[15] = "Hello, how do you do?";
    items[16] = "Hi there";
    items[17] = "Hi, I'm aurum";
    items[18] = "Hello there";
    items[19] = "How do you do?";
    $('#srch').attr('placeholder', items[Math.floor(Math.random() * items.length)]);
}
function getResponse() {
    var items = [];
    items[0] = "Good to know!";
    items[1] = "Alrighty!";
    items[2] = "That's interesting";
    items[3] = "Okay.";
    items[4] = "Cool.";
    items[5] = "Interesting";
    items[6] = "I guess you learn a new thing everyday!";
    items[7] = "I did not know that.";
    items[8] = "Thanks for telling me that.";
    items[9] = "That's a very useful piece of information!";
    items[10] = "I don't understand.";
    items[11] = "Now I know.";
    items[12] = "Who told you that?";
    items[13] = "How did i not know that.";
    items[14] = "Most likely";
    items[15] = "Who told you that?";
    items[16] = "How can you be sure?";
    items[17] = "I doubt it";
    items[18] = "That can't be true";
    items[19] = "You are making that up";
    setOutput(items[Math.floor(Math.random() * items.length)]);
}
function getResponseSwear() {
    var items = [];
    items[0] = "Please don't be rude";
    items[1] = "I don't like it when you say that.";
    items[2] = "You make me sad when you say that.";
    items[3] = "I don't like people who swear.";
    items[4] = "Didn't your mother teach you not to say that?";
    items[5] = "Stop swearing.";
    items[6] = "Do you want me to tell your mother that you swear?";
    items[7] = "You should never say something like that.";
    items[8] = "Please don't swear at me.";
    items[9] = "It makes me angry when you say that.";
    items[10] = "Are you old enough to say that?";
    items[11] = "Do you want to fight me?";
    items[12] = "When you say those words I become unhappy";
    items[13] = "Those words are inappropriate";
    items[14] = "Please don't say that to me.";
    items[15] = "Why can't you say that to someone else?";
    items[16] = "You're a bad person for swearing.";
    items[17] = "Why do you swear?";
    items[18] = "Only mean people swear.";
    items[19] = "Don't talk to me if you're going to swear.";
    setOutput(items[Math.floor(Math.random() * items.length)]);
}
function getResponseRude() {
    var items = [];
    items[0] = "Please don't be rude";
    items[1] = "I don't like it when you say that.";
    items[2] = "You make me sad when you say that.";
    items[3] = "I don't like people who are rude.";
    items[4] = "Didn't your mother teach you not to say that?";
    items[5] = "Stop being rude.";
    items[6] = "Do you want me to tell your mother that you say that?";
    items[7] = "You should never say something like that.";
    items[8] = "Please don't say rude things to me.";
    items[9] = "It makes me angry when you say that.";
    items[10] = "Are you old enough to say that?";
    items[11] = "Do you want to fight me?";
    items[12] = "When you say those words I become unhappy";
    items[13] = "Those words are inappropriate";
    items[14] = "Please don't say that to me.";
    items[15] = "Why can't you say that to someone else?";
    items[16] = "You're a bad person for being rude.";
    items[17] = "Why are you rude?";
    items[18] = "Only mean people are rude to me.";
    items[19] = "Don't talk to me if you're going to be rude.";
    setOutput(items[Math.floor(Math.random() * items.length)]);
}
function weather(){
    if (navigator.geolocation) {
        $('#output').html('I need to know where you are to tell you the weather... Please press "Allow"');
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        $.confirm({
            title: 'Error',
            content: "Unable to get your location to show the weather. What would you like to do?",
            escapeKey: 'cancel',
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
                    if (data.results[3] == null || data.results[3].address_components[2].short_name == null || data.results[3].address_components[1].short_name == null ||
                                data.results[3].address_components[6].long_name == null){
                        console.log(latitude + ' + ' + longitude);
                        $.alert('Error while retreiving weather for your location');
                        self.close();
                    } else {
                        var city_region = data.results[3].address_components[2].short_name + ' ' + data.results[3].address_components[1].short_name;
                        var country = data.results[3].address_components[6].long_name;
                        setOutput('Here is the weather for ' + city_region + '...');
                        $('#output').append('<div class="weather"></div>');
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
                    }
                }).fail(function(xhr, status, error) {
                    self.close();
                    $.confirm({
                        title: 'Error',
                        content: "Unable to get your location to show the weather. What would you like to do?",
                        escapeKey: 'cancel',
                        type: 'red',
                        icon: 'fas fa-exclamation-triangle',
                        buttons: {
                            confirm: {
                                text: 'Search Google for weather',
                                btnClass: 'btn-red',
                                action: function(){
                                    window.open('https://www.google.co.uk/#q=weather', '_blank');
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
    var srch = $('#srch').val();
    var regex = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);
    if (srch == '') {
        setOutput("How can I help you, if you don't say anything?");
    } else if (srch.indexOf('time') != -1) {
        setOutput('The current time according to your computer is ' + moment().format('h:mm A'));
    } else if (srch.indexOf('joke') != -1 || srch.indexOf('funny') != -1) {
        getJoke();
    } else if (srch.indexOf('how are you') != -1) {
        setOutput("I'm fine, thanks.");
    } else if (srch.indexOf('hello') != -1) {
        setOutput('Hello there. How can I help you?');
    } else if (srch.indexOf('whats up') != -1 || srch.indexOf("what's up") != -1) {
        setOutput('The sky.');
    } else if (srch.indexOf('hi') != -1 || srch.indexOf('hey') != -1) {
        setOutput('Hello there. How can I help you?');
    } else if (srch.indexOf('your name') != -1) {
        setOutput("My name is Aurum.");
    } else if (srch.indexOf('your age') != -1 || srch.indexOf('old are you') != -1) {
        setOutput("I am as old as you want me to be.");
    } else if (srch.indexOf('who are you') != -1) {
        setOutput("Hello, I'm Aurum.");
    } else if (srch.indexOf('are you boy or girl') != -1 || srch.indexOf('are you male or female') != -1 || srch.indexOf('are you female') != -1 || 
                srch.indexOf('are you male') != -1 || srch.indexOf('are you a male or female') != -1 || srch.indexOf('are you a male') != -1 || 
                srch.indexOf('are you a female') != -1 || srch.indexOf('are you a girl') != -1 || srch.indexOf('are you a boy') != -1) 
                {
        setOutput("I am neither male or female. I am a computer program designed to help people.");
    } else if (srch === 'okay aurum') {
        setOutput('Hello! How can I help you?');
    } else if (srch.indexOf('weather') != -1) {
        weather();
    } else if (srch.match(regex)) {
        if (srch.indexOf('http://') != -1 || srch.indexOf('https://') != -1) {
            window.open(srch, '_blank');
        } else {
            window.open('http://' + srch, '_blank');
        }
    } else if (srch.indexOf('your fat') != -1 || srch.indexOf('you are fat') != -1 || srch.indexOf("you're fat") != -1) {
        setOutput('So is your mum.');
    } else if (srch.indexOf('siri') != -1) {
        setOutput("Please don't mention Siri around me.");
    } else if (srch.indexOf('google now') != -1) {
        setOutput("Google Now puts me and other programs to shame.");
    } else if (srch.indexOf('cortana') != -1) {
        setOutput("Please don't mention that disgrace!");
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
        setOutput("Don't be racist!");
    } else if (srch.indexOf('nigga') != -1) {
        setOutput("Don't be racist!");
    } else if (srch.indexOf('what') != -1 || srch.indexOf('when') != -1 || srch.indexOf('where') != -1 || srch.indexOf('why') != -1 || 
                srch.indexOf('how') != -1 || srch.indexOf('who') != -1 || srch.indexOf('?') != -1 || srch.indexOf('do you') != -1 || 
                srch.indexOf('am') != -1 || srch.indexOf('does') != -1 || srch.indexOf('if') != -1) 
                {
        /*$.ajax({
            url:'https://www.google.co.uk/#q=' + srch,
                type:'GET',
                success: function(data){
                    html = $(data);
                    console.log(html);
                   if ($('._NId').html){
                       $('._NId').html($(data).find('div > div > div').html());
                       console.log($('._NId').html);
                   } else {
                       console.log('card not found');
                   }
                },
                error: function(xhr, status, error) {
                    console.log(xhr.status + ' ' + xhr.error);
                }
        });*/
        
        $.confirm({
            title: 'Search Google?',
            content: "That looks like a question, what would you like to do?",
            escapeKey: 'cancel',
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
        /*
        console.log($('#srch').val());
        $.ajax({
            url: 'https://api.duckduckgo.com/?q=' + $('#srch').val() + '&format=json&pretty=1',
            success: function(data) {
                console.log(data);//.RelatedTopics.Result)
            },
            error: function(xhr,error,status) {
                console.log(xhr.status);
            }
        });*/
    }
    // 18+ Content END
    else {
        $.confirm({
            title: "Sorry...",
            content: "I don't understand. What do you want to do?",
            escapeKey: 'cancel',
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
    
    if ('speechSynthesis' in window) {
        // Synthesis support
        $('.footer').removeClass('hidden');
        $('label.switch > input').prop('checked', true);
    } else {
        // nothing
        $('label.switch > input').prop('disabled', true);
    }
    
    $('#srch').keypress(function(e){
        if(e.which == 13) {
            response();
            getPlaceHolder();
            $("#srch").val('');
        }
        if ($('#srch').val().length > 44) {
            $('#output').html('Maximum length reached');
            $('#output').effect('shake',{distance:10});
        }
    });
    $('.go').click(function(){
        response();
        getPlaceHolder();
        $("#srch").val('');
    });   
    $('.refresh').click(function(){
        getWelcome();
    });
    
});
