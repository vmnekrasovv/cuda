(function($){
	$(document).ready(function(){ 
	/* document.addEventListener('DOMContentLoaded', function(){*/
		
	$(function(){
		$('.header__menu-list').children('a').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	});

	$(function(){
		$('.portfolio__tab').click(function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	});


	});
})(jQuery);



//////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	Тоже самое, только поиск элементов на чистом js...

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
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////


/*function offset(el){

//const rect = el.getBoundingClientRect(),
		//scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		//scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

let rect = el[0].getBoundingClientRect();
let rect_top = rect.top;
let rect_bot = rect.bottom;
let rect_h   = rect.height;
let rect_y   = rect.y;
let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
let rectTopScrollTop = rect.top + scrollTop;

console.log('rect.top: ' + rect.top + ' / ' + 'rect.bot: ' + rect.bottom + ' / ' + 'rect.h: ' + rect.height + ' / ' + 'rect.y: ' + rect.y + ' / ' + 'scrollTop: ' + scrollTop + ' / ' + 'rectTopScrollTop: ' + rectTopScrollTop);
	
	
}

let header = document.getElementsByClassName('header');
offset(header);
// rect.top: 0    / rect.bot: 598 / rect.h: 598 / rect.y: 0    / scrollTop: 0   / rectTopScrollTop: 0
// rect.top: -598 / rect.bot: 0   / rect.h: 598 / rect.y: -598 / scrollTop: 598 / rectTopScrollTop: 0 - на секции сервис

let services = document.getElementsByClassName('services');
offset(services);
// rect.top: 598 / rect.bot: 1331 / rect.h: 733 / rect.y: 598 / scrollTop: 0   / rectTopScrollTop: 598
// rect.top: 0   / rect.bot: 731  / rect.h: 733 / rect.y: 0   / scrollTop: 598 / rectTopScrollTop: 598 - на секции сервис

let skills = document.getElementsByClassName('skills');
offset(skills);


// top/y  - расстояние от верхней точки элемента до верхней точки вьюпорта
// bottom - расстояние от нижней точки элемента до верхней точки вьюпорта
// height - высота элемента - значение не меняется -
// scrollTop - расстояние от начала документа до текущей позиции прокрутки
// rectTopScrollTop - расстояние верхней точки элемента от начала документа - значение не меняется -*/


//////////////////////////////////////////////////////////////

// jQ
// outerHeight(true) - Высота элемента с учетом внутренних отступов
// (true) - добавляет внешние тоже

// JS
// offsetHeight - тот же результат, что и outerHeight(true)

// JS
// pageYOffset - значение прокрутки по вертикали

// JS
// Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport
// Все свойства, кроме width и height, являются относительными к верхнему левому углу viewport-а.
// После каждого скролла значения left(x), top(y), right и bottom изменяются, так как эти значения относительны к viewport и не абсолютные.
// Если вам нужны значения, описывающие прямоугольник относительно к верхнему левому углу документа, просто добавьте к свойствам top и left текущую позицию прокрутки (rect.top + pageYOffset)
