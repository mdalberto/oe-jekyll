





$(function () {

  $('#transcript-1-no').on('click', function(){
            $('#headingZeroInnerTwoClick').click();
      return false;
  });

  $('#toggleTranscript').on('click', function(){
      $('.triangle-border, .transcriptOnlyCard').toggle();
      return false;
  });


  $('#processAccordian').on('click', function(){
      $('#accordion').hide();
       $('#confirmationScreen').show();     
      return false;
  });

  $('#backAccordian').on('click', function(){
      $('#accordion').show();
       $('#confirmationScreen').hide();     
      return false;
  });

  $('#submitAccordian').on('click', function(){
      $('#confirmationScreen').hide();
       $('#processMessage').show();
       $('#accordion2').show();    
       $('#headingOne2 .collapsed').click(); 

      return false;
  });

  $('#toggleColor').on('click', function(){
      $('#services').toggleClass('bluebubbles');
      return false;
  });

  $('#toggleSlim').on('click', function(){
      $('#services').toggleClass('slim');
      return false;
  });

});
