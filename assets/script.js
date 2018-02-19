$(document).ready(function(){
    $.confirm({
        title: 'New Site',
        content: 'Would you like to switch to the new site?',
        type: 'orange',
        icon: 'fa fa-warning',
        onClose: function(){
            $.cookie('new-site-opened','1',{expires: 365});
            console.log($.cookie('new-site-opened'));
        },
        buttons: {
            confirm: {
                text: 'Yes',
                btnClass: 'btn-orange',
                action: function(){
                    window.location = 'new/';
                }
            },
            cancel: {
                text: 'No',
                action: function(){
                    this.close();
                }
            }
        }
    });
});