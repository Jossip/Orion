/* chrome bug fix */
$(function() {
       $('a[href*="#"]:not([href="#"])').click(function() {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html, body').animate({
               scrollTop: target.offset().top
             }, 1000);
             return false;
           }
         }
       });
     });


$(function(){

  wow = new WOW(
  {
    mobile: false
  });
  wow.init();

  // -- PARALLAX -- //
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#gallery').parallax("100%", 0.3);
    $('#menu').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);

  }
  initParallax();

  // HIDE MENU
  $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

  // NIVO LIGHTBOX
  $('#gallery a').nivoLightbox({
        effect: 'fadeScale',
    });

  // MENU
  $('#all').click(function(event) {
    $('.s-all').css('display', 'block');
  });
  $('#food').click(function(event) {
    $('.s-dess').css('display', 'none');
    $('.s-drinks').css('display', 'none');
    $('.s-food').css('display', 'block');
  });
  $('#dess').click(function(event) {
    $('.s-drinks').css('display', 'none');
    $('.s-food').css('display', 'none');
    $('.s-dess').css('display', 'block');
  });
  $('#drinks').click(function(event) {
    $('.s-dess').css('display', 'none');
    $('.s-food').css('display', 'none');
    $('.s-drinks').css('display', 'block');
  });

});

