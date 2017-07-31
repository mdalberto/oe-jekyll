//

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('#zipwireFrame').load('https://vsedev.zipwiresw.com/agentdesktop/ #gwt-debug-acStateMenuContainer');
})

// For the 'promo code select' accordion like behavior: show and hide potential options
$("#packageOptions").bind("change", function () {
    $(".packageOption").slideUp();
    if ($(this).val() == "packageDefault") {
        $("#packageDefault").slideDown();
    }
    if ($(this).val() == "packageOption1") {
        $("#packageOption1").slideDown();
    }
    else if($(this).val() =="packageOption2") {
        $("#packageOption2").slideDown();
    }
    else if($(this).val() =="packageOption3") {
        $("#packageOption3").slideDown();
    }
});

// simulate a acceptable promo code being entered
$('#packageOptionPromoCodeBtn').on('click', function(){
    $("#packageOptionPromoCode").slideDown();
    return false;
});


// For the 'cc select' accordion like behavior: show and hide potential options
$("#ccOptions").bind("change", function () {
    $(".ccOptions").slideUp();
    if ($(this).val() == "ccDefault") {
        $("#ccDefault").slideDown();
    }
    if ($(this).val() == "ccNewCard") {
        $("#ccNewCard").slideDown();
    }
});



/// ------------- above are ok to include --------------------- //

$(document).ready(function(){
    $('#transcript1').show();
});

$('.transcriptchanger').on('click', function(){

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



$('#capture1').on('click', function(){
    $('#capturedCC2').show('slow');
    $('#captureCC2').hide();
    return false;
});

$('#capture5').on('click', function(){
    $('#capturedCC2').hide();
    $('#captureCC2').show('slow');
    return false;
});

$('#capture2').on('click', function(){

    $('#capturedCC').hide();
    $('#capturedCC').show('slow');
    return false;
});

$('#capture3').on('click', function(){
    $('#captureCC').hide();
    $('#capturedCC').show('slow');
    return false;
});

$('#capture4').on('click', function(){

    $('#capturedCC').hide();
    $('#captureCC').show('slow');
    return false;
});

$('#capture10-btn').on('click', function(){
    $('#capture11-target').hide();
    $('#capture10-target').show('slow');
    return false;
});

$('#capture11-btn').on('click', function(){

    $('#capture10-target').hide();
    $('#capture11-target').show('slow');
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



