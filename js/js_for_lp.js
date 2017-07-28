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
		function(){
			$('.tooltip_first').show(300);
		}


		);

		$('.buttonstyle').mouseout(
		function(){
			$('.tooltip_first').hide(300);
		}


		);

	


});