// $(document).ready(function(){ 
//  	$('.input').each(function(){
//  		$(this).val(localStorage.getItem($(this).attr('id')))
//   		$("#text").css($(this).attr('id'), $(this).val()) 			
// 	 	$(this).change(function(){
// 	 		localStorage.setItem($(this).attr('id'), $(this).val())
// 	 		$("#text").css($(this).attr('id'), $(this).val())	 		
// 		})
// 	})
// 	$('#default').click(function(){
// 		localStorage.clear();
// 		location.reload();
// 	}) 	
// })


const inputs = document.querySelectorAll('.input'),
		text = document.querySelector('#text'),
		clear = document.querySelector('#default')
let styles = '';

if (localStorage.getItem('styles')){
	styles = localStorage.getItem('styles')
}

text.style.cssText = styles;

inputs.forEach(function(el){
	el.value = localStorage.getItem(el.id)
	el.onchange = function(){
		localStorage.setItem(el.id, el.value)
		styles = styles + el.id + ':' +  el.value + ';'
		text.style.cssText = styles;
		localStorage.setItem('styles', styles)
	}	
})

clear.onclick = function(){
	styles = '';
	text.style.cssText = styles;
	localStorage.clear();
	location.reload();
}


