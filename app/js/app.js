/*document.addEventListener("DOMContentLoaded", function() {

	const animateTrigger = document.getElementsByClassName('header');
	const animateTriggerHeight = animateTrigger[0].offsetHeight;

	const animateTarget  = document.getElementsByClassName('header__top-line');
	const animateTargetHeight = animateTarget[0].offsetHeight;


	window.addEventListener('scroll', animateOnScroll);

	function animateOnScroll(params){
		
		if(pageYOffset > animateTriggerHeight){
			animateTarget[0].classList.remove('animation_backward');
			animateTrigger[0].classList.add('animation_active');
		} else if (animateTrigger[0].classList.contains('animation_active')) {
			animateTrigger[0].classList.remove('animation_active');
			animateTarget[0].classList.add('animation_backward');
		}
		
	}

	function offset(el){
	 	const rect = el.getBoundingClientRect(),
	 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	 }

	setTimeout(() => {
	 	animateOnScroll();
	 }, 300);

});
*/

(function($){
	$(document).ready(function(){
		$('.header__burger').click(function(){
			$('.header__burger, .header__menu').toggleClass('active');
			$('body').toggleClass('lock');

		});

		$('.header__menu').click(function(eventObject){
			$('.header__burger, .header__menu').removeClass('active');
			$('body').removeClass('lock');
			
			/*if(!$(eventObject.target).hasClass('active')){
				
			} else {
				console.log($(eventObject.target));
			}*/
		
		});


		const animateTrigger = $('.header');
		const animateTriggerHeight = animateTrigger.outerHeight(true);

		const animateTarget  = $('.header__top-line');
		const animateTargetHeight = animateTarget.outerHeight(true);


		window.addEventListener('scroll', animateOnScroll);

		function animateOnScroll(params){
			
			if(pageYOffset > animateTriggerHeight){
				animateTarget.removeClass('animation_backward');
				animateTrigger.addClass('animation_active');
			} 
			else if (animateTrigger.hasClass('animation_active')) {
				animateTrigger.removeClass('animation_active');
				animateTarget.addClass('animation_backward');
			}
		}

		function offset(el){
		 	const rect = el.getBoundingClientRect(),
		 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		 }

		setTimeout(() => {
		 	animateOnScroll();
		 }, 300);


		$('.header__menu-list').children('a').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});

	});
})(jQuery);
