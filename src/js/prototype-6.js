





$(function () {

  $('#transcript-1-no').on('click', function(){
            $('#headingZeroInnerTwoClick').click();
      return false;
  });

  $('#toggleTranscript').on('click', function(){
      $('.triangle-border, .transcriptOnlyCard').toggle();
      return false;
  });

// for slim version open something
  $('#toggleTranscriptClick').on('click', function(){
      $('.triangle-border, .transcriptOnlyCard').toggle();
        if (!$('#coll3').hasClass( "show" ) && !$('#coll4').hasClass( "show" ) && !$('#coll5').hasClass( "show" ) && !$('#coll6').hasClass( "show" )) {
            $('#headingColl3 .collapsed').click(); 
        }
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

// confirmation screens toggle
  $('#submitAccordian').on('click', function(){
      $('#confirmationScreen').hide();
       $('#processMessage').show();
       $('#accordion2').show();    
       $('#headingColl2-1 .collapsed').click(); 

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



    // sends users back to top of screen
    $('#coll1, #coll2, #coll3, #coll4, #coll5, #coll6, #coll2-1, #coll2-2, #coll2-3' ).on('show.bs.collapse', function () {
        $("html, body").animate({ scrollTop: 0 }, 200);
    });



});
