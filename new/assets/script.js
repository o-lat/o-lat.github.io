// JS

$(document).ready(function(){
    $.cookie.defaults = {path: '/', expires:365};
    
    if ($.cookie('old-layout') == '1'){
        $(document.body).removeClass('home');
        $('.wrap').css('display','block');
        $('.footer').html('<p>If you prefer the new layout, you can <a href="#" id="toggle_layout" class="link">upgrade</a></p>');
    } else if ($.cookie('old-layout') == '0'){
        // nothing
    } else {
        $.cookie('old-layout','0');
    }
    $('#toggle_layout').click(function(){
        console.log('click');
        if ($.cookie('old-layout') == '0'){
            $.cookie('old-layout', '1');
            $(document.body).removeClass('home');
            $('.wrap').css('display','block');
            $('.footer').html('<p>If you prefer the new layout, you can <a href="#" id="toggle_layout" class="link">upgrade</a></p>');
        } else if ($.cookie('old-layout') == '1'){
            $.cookie('old-layout', '0');
            $(document.body).addClass('home');
            $('.wrap').css('display','none');
            $('.footer').html('<p>If you prefer the old layout, you can <a href="#" id="toggle_layout" class="link">revert</a></p>');
        }
    });
});

