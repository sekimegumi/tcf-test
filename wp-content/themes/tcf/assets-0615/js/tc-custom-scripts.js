/*!
    * Start Bootstrap - Creative v6.0.2 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
 

  // Activate scrollspy to add active class to navbar items on scroll
 



})(jQuery); // End of use strict


/* Tooltips */
jQuery(function($){
  $('.hightlight-link').click(function(e){
    $value = $(this).attr('data-tooltip');
    $($value).show();
    $(this).css("background-color","#7accc7");

    $(document).mouseup(function(e){
      var container = $($value);

      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $('.hightlight-link').css("background-color","#ffff00");
      }
    });

  });

});
