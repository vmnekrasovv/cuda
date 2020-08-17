document.addEventListener("DOMContentLoaded", function() {

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
