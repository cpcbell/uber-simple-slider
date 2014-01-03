jQuery(document).ready(function($){

$('.slide-click').on('click',function(){
		
	var activeLi = $('.main-img').find('.active');

	var prevLi = activeLi.prev();

	var nextLi = activeLi.next();

	$('.main-img > ul > li').removeClass('active');

	if( $(this).hasClass('click-right') ){

		if(nextLi.find('img').prop('src')){

			nextLi.addClass('active').effect('bounce','slow');
		}
		else{
			$('.main-img li:first').addClass('active');
			/**
			Add FX
			$('.main-img li:first').addClass('active').effect('bounce','slow');
			*/
		}

	}
	else{

		if(prevLi.find('img').prop('src')){

			prevLi.addClass('active');
		}
		else{
			$('.main-img li:last').addClass('active');
			/**
			Add FX
			$('.main-img li:last').addClass('active').effect('bounce','slow');
			*/
		}

	}
});

});
