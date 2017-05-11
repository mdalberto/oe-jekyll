// move the transcript bar over

$(document).ready(function() {

  $('#btn-transcript').click(function() {
      var sidebar = $("#sidebar");
      var left2 = $('#sidebar').offset().left;
            var left = $('#sidebar').width();
            var totalslide = left + left2;
            
       sidebar.animate({"left" : "-" + (left - 10)}, "fast").removeClass("col-12 col-md-5 col-lg-4").css('position', 'absolute').css('width', left + 'px');
        console.log(left2);
                $(this).hide();
        $('#btn-transcript2').show();
    });
    $('#btn-transcript2').click(function() {
      var sidebar = $("#sidebar");
      var left2 = $('#sidebar').offset().left;
            var left = $('#sidebar').width();
            var totalslide = left + left2;
            
       sidebar.addClass("col-12 col-md-5 col-lg-4").removeAttr("style");
        console.log(left2);
        $(this).hide();
        $('#btn-transcript').show();
    });


    // $('.sendTop').click(function(){
    //     $("html, body").animate({ scrollTop: 0 }, 200);
    //     return false;
    // });



});
