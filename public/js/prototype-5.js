// move the transcript bar over

$(document).ready(function() {
  $('#btn-transcript').click(function() {
      var left2 = $('#sidebar').offset().left;
            var left = $('#sidebar').width();
            var totalslide = left + left2;
       $("#sidebar").animate({"left" : "-" + totalslide}, "fast").removeClass("col-12 col-md-5 col-lg-4").css('position', 'absolute');
 
    });
});