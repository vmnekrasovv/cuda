
/////////////////////////// input value . focus / blur //////////////////////////

$(function(){

	var inputsValue = [],
		input = $('.contact__input');

// value инпутов в массив

	input.each(function(){
		var 
			inputName = $(this).attr('name');

		inputsValue[inputName] = $(this).val();	
	});

// Поведение при фокусе
// Если input.value совпадает с исходным значением, то стираем

	input.focus(function(){
		
		var 
			inputName  = $(this).attr('name'),
			inputValue = $(this).val();

		if(inputValue === inputsValue[inputName]) {
			$(this).val('');
		}
	});

// Поведение при потери фокуса 
// Если input.value пустой, то вписываем исходное значение

	input.blur(function(){
		
		var
			inputName  = $(this).attr('name'),
			inputValue = $(this).val();

		if(inputValue === '') {
			$(this).val(inputsValue[inputName]);
		}

	});
});

///////////////////////////////////////////////////////////////////




/////////////////////////// formSend //////////////////////////////

const contactForm = document.getElementById('contactForm');

	contactForm.addEventListener('submit', formSend); /*contactForm.bind('submit', formSend);  */

	async function formSend(e) {

		e.preventDefault(); 

		let error = formValidate(contactForm);

		let formData = new FormData(contactForm); // данные из полей формы

		if(error === 0){
			 contactForm.classList.add('_sending'); /*contactForm.addClass('_sending'); */
			
			 setTimeout(() => {
	 			contactForm.reset();
	 			contactForm.classList.remove('_sending'); //contactForm.removeClass('_sending'); 
	 			alert('Форма успешно отправлена!');
			 }, 2000);

			/*let response = await fetch('/cuda/app/sendmail.php', {
				method: 'POST',
				body: formData
			});

			if(response.ok) {
				let result = await response.json();
				alert(result.message);
				contactForm.reset();
				 contactForm.classList.remove('_sending'); //contactForm.removeClass('_sending'); 
			} else {
				alert('Send error');
				contactForm.classList.remove('_sending'); //contactForm.removeClass('_sending');
			}*/

		} else {
			alert('Необходимо корректно заполнить все обязательные поля формы!');
		}
	}

///////////////////////////////////////////////////////////////////




/////////////////////////// formValidate //////////////////////////

function formValidate(contactForm){
	let error   = 0;
	let formReq = document.querySelectorAll('._req'); /*let formReq = $('._req'); */

	for (let index = 0; index < formReq.length; index++){
		const input = formReq[index];

		formRemoveError(input);
	
		if(input.classList.contains('_email')){
			if(emailTest(input)){
				formAddError(input);
				error++;
			}
		} else if(input.classList.contains('_name')){
			if(nameTest(input)){
				formAddError(input);
				error++;
			}
		} else {
			if(input.value === '' || input.value === 'Your Message *') { 
				formAddError(input);
			error++;
			}
		}
	}

	return error;
}

function formAddError(input){
	//input.parentElement.classList.addClass('_error');
	input.classList.add('_error');
}

function formRemoveError(input){
	input.classList.remove('_error');
}

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value); // функция валидации, собственно 
}

function nameTest(input) {
	return !/^[\wа-я]{3,10}$/gi.test(input.value); // функция валидации, от 3 до 10 символов русс и англ алфавита
}