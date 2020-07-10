$(document).ready(function(){
	$(window).scroll(function(){
		var barra = $(window).scrollTop();
        # lo que va entrando de master
		var posicion =  (barra * 0.15);
		$('.cover').css({
			'background-position': '0 -' + posicion + 'px'
		});
	});
});