$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		#hola estto es una prueba devminor
		var posicion =  (barra * 0.15);
		$('.cover').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});