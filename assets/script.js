$(document).ready(function(){
    $.cookie.defaults = {path: '/', expires:365};
    
    var path_url = window.location.pathname;
    var page = path_url.split('/').pop();
    var redirect_link = 'new/' + page;
    
    if($.cookie('new-site-opened') == null){
        $.confirm({
            title: 'New Site',
            content: "Would you like to switch to the new site? Won't ask again",
            type: 'orange',
            icon: 'fa fa-warning',
            onClose: function(){
                $.cookie('new-site-opened','1',{expires: 365});
            },
            buttons: {
                confirm: {
                    text: 'Yes',
                    btnClass: 'btn-orange',
                    action: function(){
                        window.location = redirect_link;
                        $.cookie('new-site', '1', {expires: 365});
                    }
                },
                cancel: {
                    text: 'No',
                    action: function(){
                        $.cookie('new-site', '0', {expires: 365});
                        this.close();
                    }
                }
            }
        });
    } else if($.cookie('new-site-opened') == '1') {
        if($.cookie('new-site') == '1'){
            window.location = redirect_link;
        } else if($.cookie('new-site') == '0') {
            // nothing
        } else {
            $.alert({
                title: 'Error',
                content: "Could't retreive cookie. Check you have enabled cookies in your browser",
                type: 'red',
                icon: 'fas fa-exclamation-triangle'
            });
        }
    } else {
        $.alert({
            title: 'Error',
            content: "Could't retreive cookie. Check you have enabled cookies in your browser",
            type: 'red',
            icon: 'fas fa-exclamation-triangle'
        });
    }
});