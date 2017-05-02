
$(function () {


$("#pin, #pass").bind("change keyup", function () {      
    if ($("#pin").val() != "" && $("#pass").val() != "" ){
        $('#user-btn-disabled').hide();
        $('#user-continue').show();
    }else{
        $('#user-btn-disabled').show();
        $('#user-continue').hide();
    }
});
});
