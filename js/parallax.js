$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		#se pasa para generar conflicto nsndasdad
		var posicion =  (barra * 0.15);
		$('.cover').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});