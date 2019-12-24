$(function () {
	$(window).scroll(function() {
		if($(window).scrollTop() > 250) {
			$('.floatMenu').addClass('floatMenu_active');
		} else {
			$('.floatMenu').removeClass('floatMenu_active');
		}
	});
});