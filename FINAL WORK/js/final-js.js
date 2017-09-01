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
















$(document).ready(function(e) {


	$('.close').click(
		function(){
		$('.page-title_aside').hide(300);	
		}

		
		);



	$('.my-head_menu-icon').click(
		function(){
		$('.page-title_aside').show(300);	

		}

		);



	$('.list-menu li').click(
		function(){
			$('.page-title_aside').hide(300);
		}

		);


$('.buttonstyle').mouseenter(
function() {
    $('.tooltip').show(300);
    console.log(event.type);
    console.log(event.target);
}
    );

		$('.buttonstyle').mouseout(
		function(){
			$('.tooltip_first').hide(300);
		}

		);

$('.list-menu a').click(function(){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({
            scrollTop: destination
        }, 1000);
    });


$('.buttonstyle').click(function(){

$(".popup-wrap").fadeIn(300);

});
$('#close').click(function(){
$(".popup-wrap").fadeOut(700);


});
