/* Анимация для вернхнего меню, при скролле страницы */

$(function(){
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

	setTimeout(() => {
	 	animateOnScroll();
	}, 100);
});