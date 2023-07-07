window.addEventListener('scroll', animateSkills);

function animateSkills(){
	let skills = document.getElementsByClassName('skills');
	let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	let rect = skills[0].getBoundingClientRect();
	let rectTopScrollTop = rect.top + scrollTop;

	if(scrollTop > (rectTopScrollTop - (rect.height / 1.2)) && scrollTop < (rectTopScrollTop + (rect.height / 2))){
		$('.skills__item').addClass('active');
	} 
} 