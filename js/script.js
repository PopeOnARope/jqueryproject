$(document).ready(function() {

	$('.popup').click(function(){
		$(this).fadeOut('slow');
		$('.container2').hide();
		$('.container1').hide();
		$('.container1').fadeIn(500);
		$('.container2').slideDown(1000);
		
	});

	$('.popup2').hide();

	var showPage = function($el) {
		event.preventDefault();
		if($el.hasClass("show")) {
			return;
		} else {
			$(this).siblings().removeClass('show');
				$(this).addClass('show');
		}
	}


	// $('.box').click(function(){
	// 	var popfunk = function(x){

	// 	}
	// });
	var backgroundAdjust = function(x) {
		$(x).css('background-size', '100%, 100%')
	};

	var backgroundChangeBack = function(x) {
		$(x).css('background-size', '100%, 100%')
	}

	$('.box.mansion').click(function() {
		$('.popup2.mansion').fadeIn();
		backgroundAdjust('.mansion');
	});
		$('.box.battery').click(function() {
		$('.popup2.battery').fadeIn();
	});
		$('.box.rainbow').click(function() {
		$('.popup2.rainbow').fadeIn();
	});
		$('.box.bridge').click(function() {
		$('.popup2.bridge').fadeIn();
	});



	$('.popup2').click(function() {
		$(this).fadeOut();
		backgroundChangeBack();
	});
		
		
	

	
});
		