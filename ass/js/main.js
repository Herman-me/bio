$(document).ready(function(){

	$('#say').click(function(){
		$('.mehdi').html('<h1>salam khobin</h1><br><button class="jamali">salam</button>');	
			$('.jamali').click(function(){
				$('.mehdi').slideToggle(5000);
			});
	});



});
