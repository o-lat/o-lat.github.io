$(document).ready(function(){
    $.confirm({
        title: 'New Site',
        content: 'Would you like to switch to the new site?',
        type: 'orange',
        icon: 'fa fa-warning',
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