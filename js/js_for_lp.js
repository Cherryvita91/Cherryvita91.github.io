/*$(document).ready(function(e) 

{             
$('.buttonstyle').click(
	function()
	{
 $('.buttonstyle').addClass("buttonstyle-bg")
	}
);
}); */

$(document).ready(function(e) 

{            
$('.buttonstyle').mouseenter(
        function(){
            $('.tooltip').show();
        }
    );
    $('.buttonstyle').mouseout(
        function(){
            $('.tooltip').hide();
});


