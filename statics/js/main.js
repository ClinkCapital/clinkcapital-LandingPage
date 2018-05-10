$ = jQuery.noConflict();

/*scroll*/
$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
			destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
		$('html, body').animate({ scrollTop: destino.offset().top }, 950);

		$('#navigation').animate({right: "-85%"}, 500);
		$('#show-menu').css({'visibility':"visible"});

    return false;
  });
});

/*background aleatorio*/
do {
	$(document).ready(function() {

	var contenedor = $('#random');
	var imagenes = ['r01.jpeg', 'r02.jpeg', 'r03.jpeg', 'r04.jpeg'];
	var tiempo = 2500;
	contenedor.css({'background-image':'url(statics/images/r01.jpeg)'});

	function image(){
	setTimeout(function() {
	contenedor.fadeIn('slow', 0.3, function() {
	$(this).css({'background-image': 'url(statics/images/' + imagenes[Math.floor(Math.random() * imagenes.length)] + ')'});
	image();}).fadeIn('slow', 0.3); },tiempo); }

	image();
	});
} while (false);


/*show menu*/
$(document).ready(function(){
	$('#show-menu').on("click", function(){
		$('#navigation').animate({right:"0"},700);
		$('#show-menu').css({'visibility':"hidden"});
		$('.modal').css({'visibility':"visible"},700);
		$('.modal').animate({opacity:"1"},700);
	});
});

/*change background color nav*/
  $(document).scroll(function(){
    if($(this).scrollTop() > 35) {
			$('#nav-container').css({"background-color":"rgba(0,0,0,0.65)"});
			$('#nav-container').css({"box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"});
			$('.footer-image').css({"height":"250px"});
    } else {
			$('#nav-container').css({"background-color":"rgba(0,0,0,0.01)"});
			$('#nav-container').css({"box-shadow":"none"});
			$('.footer-image').css({"height":"0px"});
    }
	});

  $(".slider").cycle({
  fx : 'fade',
  timeout: 3000,
  speed: 2000,
  slides: '.slide'
  });
