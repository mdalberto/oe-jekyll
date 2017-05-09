





$(function () {

  $('#transcript-1-no').on('click', function(){
            $('#headingZeroInnerTwoClick').click();
      return false;
  });

  $('#toggleTranscript').on('click', function(){
      $('.triangle-border, .transcriptOnlyCard').toggle();
      return false;
  });
  
  (".collapse").on("shown", function () {
    var selected = $(this);
    var collapseh = $(".collapse .in").height();
    $.scrollTo(selected, 500, {
        offset: -(collapseh)
    });
});

});
