//
$(document).ready(function(){
    $('#transcript1').show();
});

$('.transcriptchanger').on('click', function(){

    //$(this).closest('.transcript').toggleClass('flipped').animate({ marginLeft: '-3000'}, 100);
    $(this).closest('.transcript').hide();
    var thelink = $(this).attr("data-link");
    $('#' + thelink).show();
    console.log(thelink);
    return false;
});

$('#useAni').on('click', function(){
    $('#phone-input').val("267-210-6381");
    return false;
});


// $('#user-form')

$( "#last-input" ).change(function() {
    if($(this).val() == 'Bee'){
        console.log('hellow');
        $('#users').show();
        $('#last-input').addClass('text-warning')
    } else {
        $('#users').hide();
        $('#last-input').removeClass('text-warning')
    }
});


$( "#clickme" ).click(function() {
  $( "#book" ).slideUp( "slow", function() {
    // Animation complete.
  });
});




// $(document).ready(function() {
//   $('#user-form input').change(function() {
//     $('#user-form input').each(function() {
//     if ($(this).val() === '') {
//         }else{
//             enableForm()
//         }

//     });
//   });
// });

$(function () {

$('#user-form input').blur(function(){
    if( !$(this).val() ) {
        $('#user-btn-disabled').show();
        $('#user-continue').hide();
    } 
});


$("#birth, #first-input, #last-input, #phone-input").bind("change keyup", function () {      
    if (!$('#users').is(":visible") && $("#birth").val() != "" && $("#last-input").val() != "" && $("#first-input").val() != "" && $("#last-input").val() != "" && $("#phone-input").val() != ""){
        $('#user-btn-disabled').hide();
        $('#user-continue').show();
    }else{
        $('#user-btn-disabled').show();
        $('#user-continue').hide();
    }
    });
});


$("#first-input2, #last-input2, #email-input2, #city-input2, #zip2").bind("change keyup", function () {      
    if (!$('#users').is(":visible") && $("#first-input2").val() != "" && $("#last-input2").val() != "" && $("#email-input2").val() != "" && $("#city-input2").val() != "" && $("#zip2").val() != ""){
        $('#user-btn-disabled').hide();
        $('#user-continue').show();
    }else{
        $('#user-btn-disabled').show();
        $('#user-continue').hide();
    }
    });

// function enableForm(){
//         $('#user-continue').removeAttr("disabled");
//         $('#user-continue').removeClass("btn-default");
//         $('#user-continue').addClass("btn-green");
// }
