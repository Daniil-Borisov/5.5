$(document).ready(function(){ 
 	$('.input').each(function(){
 		$(this).val(localStorage.getItem($(this).attr('id')))
 		if (!($(this).val())){
				$(this).val($(this).attr('placeholder')) 
			} 		
  		$("#text").css($(this).attr('id'), $(this).val()) 			
	 	$(this).change(function(){
	 		if (!($(this).val())){
				$(this).val($(this).attr('placeholder')) 
			}
	 		localStorage.setItem($(this).attr('id'), $(this).val())
	 		$("#text").css($(this).attr('id'), $(this).val())	 		
		})
	})

	$('.input-number').each(function(){
		$(this).val(localStorage.getItem($(this).attr('id')))
		if (!($(this).val())){
				$(this).val($(this).attr('placeholder')) 
			} 		
  		$("#text").css($(this).attr('id'), $(this).val() + 'px') 			
	 	$(this).change(function(){
	 		if (!($(this).val())){
				$(this).val($(this).attr('placeholder')) 
			}
	 		localStorage.setItem($(this).attr('id'), $(this).val())
	 		$("#text").css($(this).attr('id'), $(this).val() + 'px')	 		
		})
	})
	
	$('#default').click(function(){
		localStorage.clear();
		localStorage.setItem($('#font-style').attr('id'), 'normal')
		location.reload();
	}) 	
})


// const inputs = document.querySelectorAll('.input'),
// 		inputsNumber = document.querySelectorAll('.input-number')
// 		text = document.querySelector('#text'),
// 		clear = document.querySelector('#default')
// let styles = '';

// if (localStorage.getItem('styles')){
// 	styles = localStorage.getItem('styles')
// 	text.style.cssText = styles;
// }

// function input(){
// 	inputs.forEach(function(el){
// 		if (localStorage.getItem(el.id)){
// 			el.value = localStorage.getItem(el.id)
// 		}
// 		if (!el.value){
// 				el.value = el.placeholder
// 			}

// 		el.onchange = function(){
// 			if (!el.value){
// 				el.value = el.placeholder
// 			}
// 			localStorage.setItem(el.id, el.value)
// 			styles = styles + el.id + ':' +  el.value + ';'
// 			text.style.cssText = styles;
// 			localStorage.setItem('styles', styles)
// 		}	
// 	})
// }
// function inputNumber(){
// 	inputsNumber.forEach(function(el){
// 		if (localStorage.getItem(el.id)){
// 			el.value = localStorage.getItem(el.id)
// 		}
// 		if (!el.value){
// 				el.value = el.placeholder
// 			}
// 		el.onchange = function(){
// 			if (!el.value){
// 				el.value = el.placeholder
// 			}			
// 			localStorage.setItem(el.id, el.value)
// 			styles = styles + el.id + ':' +  el.value + 'px;'
// 			text.style.cssText = styles;
// 			localStorage.setItem('styles', styles)
// 		}	
// 	})
// }

// inputNumber();
// input();

// clear.onclick = function(){
// 	localStorage.clear();
// 	location.reload();
// }


