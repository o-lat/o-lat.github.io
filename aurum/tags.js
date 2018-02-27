// JavaScript Document

$(function() {
    var tags = [];
    $('#srch').keypress(function(e){
        if($('#srch').val().length > 1){
            $.getJSON('http://api.bing.com/osjson.aspx?JsonType=callback&JsonCallback=?', {
                query: $('#srch').val()
            }, function(data) {
                for(i = 0; i < data[1].length; i++){
                    tags.push(data[1][i]);
                    $('#srch').autocomplete({
                        minLength:4,
                        delay:0,
                        source: tags
                    });
                }
                tags = [];
            });
        } else {
            // nothing
        }
    });
    
});

/*$.ajax({
                type: 'GET',
                dataType: 'xml',
                url: 'http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=' + $('#srch').val(),
                success: function(data){
                    $xml = $(data),
                    $suggestion = $xml.find("suggestion");
                    for(i = 0; i < $suggestion.length; i++){
                        var suggestion = $suggestion[i].attributes[0].nodeValue;
                        tags.push(suggestion);
                        $('#srch').autocomplete({
                            minLength:1,
                            delay:0,
                            source: tags
                        });
                    }
                    tags = [];
                },
                error: function(xhr,error,status){
                    tags = 'Error while getting Google suggestions ' + xhr.status;
                    console.log(tags)
                    $('#srch').autocomplete({
                        minLength:1,
                        delay:0,
                        source: tags
                    });
                }
            });*/