$(function(){
	
	$('.burger').click(function(){
		$('.burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');

	});

	$('.header__menu').click(function(eventObject){
		$('.burger, .header__menu').removeClass('active');
		$('body').removeClass('lock');
		
		/*if(!$(eventObject.target).hasClass('active')){
			
		} else {
			console.log($(eventObject.target));
		}*/
	
	});
});