$(document).ready(function(e) {

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.footer-arrow').fadeIn(300);
  } else {
    $('.footer-arrow').fadeOut(300);
  }
});

$('.header-menu a, .wrap a, .footer-arrow').click(function(){
  var elementClick = $(this).attr("href");
  var destination = $(elementClick).offset().top;
     $('html, body').animate({
         scrollTop: destination
     }, 500);
 });

});