$(document).ready(function(){
    if($.cookie('new-site-opened') == null){
        $.confirm({
            title: 'New Site',
            content: 'Would you like to switch to the new site?',
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
                        window.location = 'new/';
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
            window.location = 'new/'
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