// JavaScript Document

$(function() {
    var tags = [];
    $('#srch').keypress(function(e){
        if($('#srch').val().length > 1){
            $.ajax({
                type: 'GET',
                dataType: 'xml',
                url: 'http://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=' + $('#srch').val(),
                success: function(data){
                    $xml = $(data),
                    $suggestion = $xml.find("suggestion");
                    for(i = 0; i < $suggestion.length; i++){
                        var suggestion = $suggestion[i].attributes[0].nodeValue;
                        tags.push(suggestion);
                        $( "#srch" ).autocomplete({
                            minLength:1,
                            delay:0,
                            source: tags
                        });
                    }
                    tags = [];
                },
                error: function(xhr,error,status){
                    $.alert('Error');
                }
            });
        } else {
            // nothing
        }
    });
    
});