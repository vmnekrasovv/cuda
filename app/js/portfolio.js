// высота изображения при ширине экрана < 600px
		
$(function() {
    $(window).on('load resize', function() {
        var window_width = $(window).width();

        var 
      		pf_image = $('.portfolio__image'),
      		basic_pf_image_padding = 16, 
        	basic_pf_image_height  = 311;

        if(window_width < 600) {
        	console.log('ww < 600 ' + window_width);

        	var 
	        	pf_image_width   = pf_image.width(),
	        	pf_image_height  = (pf_image_width / 100) * 57.4, // Знаем, что соотношение сторон подложки = w: 42.6%; h: 57.4%;
	        	pf_image_padding = (pf_image_height / 100) * 5;   // Знаем, что отступ сверху равен 5% от высоты подложки 

	        pf_image.height(pf_image_height);
	        pf_image.css({'padding-top': pf_image_padding});
        } else {
        	console.log('ww > 600');

        	pf_image.height(basic_pf_image_height - basic_pf_image_padding); // Прибавляет к базовой высоте, высоту паддинга, игнорируя свойство box-sizing, по-этому, вычитаем паддинг.
        	pf_image.css({'padding-top': basic_pf_image_padding});
        }
       
    });
});