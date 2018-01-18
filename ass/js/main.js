$(document).ready(function(){

	// set Options
		var speed = 500;	//fade Speed
		var autoSw = true;	//
		var autoSwSpeed = 4000;

	$('.slide').first().addClass('sActive');
	$('.slide').hide();
	$('.sActive').show();

	if (autoSw === true) {
		setInterval(goTONext, autoSwSpeed);
	}

	function goTONext(){
		$('.sActive').removeClass('sActive').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('sActive');
		}else{
			$('.oldActive').next().addClass('sActive');
		}

		// is not last slide image
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed, function() {
		});
		$('.sActive').fadeIn(speed, function() {

		});




	}



});
