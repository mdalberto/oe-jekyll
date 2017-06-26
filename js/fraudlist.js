function loadfraudlistSomeDynamicContent() {
  
  // can be used to ajax call in the content
}

$(function(){

  var $body = $('body');
  var $fraudlist = $('#fraudlist');
  var $toggle = $('#fraudlist-toggle, .fraudlist-header a');

  function hidefraudlist () {
    $fraudlist.removeClass('open');
    //$.mobile.zoom.enable(true);
  }

  $toggle.click(function (event) {
    event.preventDefault();

    if ($fraudlist.hasClass('open')) {
      $body.removeClass('fraudlist-open');
      $fraudlist.removeClass('in');
      if ($.support.transition) {
        $fraudlist
          .one('bsTransitionEnd', hidefraudlist)
          .emulateTransitionEnd(300);
      } else {
        hidefraudlist();
      }
    }
    else {
      loadfraudlistSomeDynamicContent();
     // $.mobile.zoom.disable(true);
      $body.addClass('fraudlist-open');
      $fraudlist.addClass('open');
      $fraudlist[0].offsetWidth;
      $fraudlist.addClass('in');
      
    }
  });

});