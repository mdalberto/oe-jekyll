//

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



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
        $('#last-input').addClass('text-red')
    } else {
        $('#users').hide();
        $('#last-input').removeClass('text-red')
    }
});


$( "#clickme" ).click(function() {
  $( "#book" ).slideUp( "slow", function() {
    // Animation complete.
  });
});

 
// $( ".btn-package" ).click(function() {
//   $(".btn-package" ).removeClass('btn-yellow');
//   $(this).addClass('btn-yellow');
// });

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


$('#capture1').on('click', function(){
    //$(this).closest('.transcript').toggleClass('flipped').animate({ marginLeft: '-3000'}, 100);
    $(this).hide();
    $('#capturedCC').show();
    return false;
});

$('#capture2').on('click', function(){
    //$(this).closest('.transcript').toggleClass('flipped').animate({ marginLeft: '-3000'}, 100);

    $('#capturedCC').hide();
    $('#capturedCC').show('slow');
    return false;
});

$('#capture3').on('click', function(){
    //$(this).closest('.transcript').toggleClass('flipped').animate({ marginLeft: '-3000'}, 100);
    $('#captureCC').hide();
    $('#capturedCC').show('slow');
    return false;
});

$('#capture4').on('click', function(){
    //$(this).closest('.transcript').toggleClass('flipped').animate({ marginLeft: '-3000'}, 100);

    $('#capturedCC').hide();
    $('#captureCC').show('slow');
    return false;
});

$('#capture5').on('click', function(){
    $('#capturedCC').hide();
    $('#captureCC').hide();
    return false;
});

$('#btn-matches').on('click', function(){
    $('.footer2').css('bottom', '-290px');
    $(this).hide();
    $('#btn-matches2').show();
    return false;
});

$('#btn-matches2').on('click', function(){
    $('.footer2').css('bottom', '0px');
    $(this).hide();
    $('#btn-matches').show();
    return false;
});



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


/// bootstrap accordian add carots
// $('#creditcardaccordion').on('shown.bs.collapse', function(){
//     alert('he');
// $(this).find(".accordion-toggle i.fa-caret-right").removeClass("fa-caret-right").addClass("fa-caret-down");
// }).on('hidden.bs.collapse', function(){
// $(this).find(".accordion-toggle i.fa-caret-down").removeClass("fa-caret-down").addClass("fa-caret-right");
// });

// function toggleIcon() {
//     //$(this).parent().parent().find('.more-less').toggleClass('fa-caret-down fa-caret-right ');

//     $('.card-heading')
//         .find(".more-less")
//         .toggleClass('fa-caret-right fa-caret-down');
// }
// $('#creditcardaccordion').on('hidden.bs.collapse', toggleIcon);
// $('#creditcardaccordion').on('shown.bs.collapse', toggleIcon);

/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
	function toggleIcon(e) {
        $(e.target).parent().find('.more-less').toggleClass('fa-caret-right fa-caret-down');
        console.log( $(e.target).parent() );
    }

    $('#creditcardaccordion').on('hidden.bs.collapse', toggleIcon);
    $('#creditcardaccordion').on('shown.bs.collapse', toggleIcon);

