$(document).ready(function() {

// $('.car').keydown(function(39) {
//     $(this).animate({left: '+=10px'}, 500);
// });


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
	$('span').click(function(){
		$(this).slideDown(500);
		$(this).addclass('blue');
		$(this).ammend('<p>Lorem! hey, where did all this shit come from?</p>');
	});

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
		backgroundAdjust('.battery')
	});
		$('.box.rainbow').click(function() {
		$('.popup2.rainbow').fadeIn();
		backgroundAdjust('.rainbow')
	});
		$('.box.bridge').click(function() {
		$('.popup2.bridge').fadeIn();
		backgroundAdjust('.bridge')
	});



	$('.popup2').click(function() {
		$(this).fadeOut();
		backgroundChangeBack();
	});

	$('button.red').click(function(){
		$('.footer').css('background-color', 'red');
	});

	$('button.black').click(function(){
		$('.footer').css('background-color', 'black');
	});

		
	

	
});
		