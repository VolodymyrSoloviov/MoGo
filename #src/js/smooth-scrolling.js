function slowScroll(id) {
	let offset = 62.4;
	let offset2 = 50;

	if ($(window).width() >= '576') {
		$('html, body').animate({

			scrollTop: $(id).offset().top - offset
		}, 1000);
		return false

	} else {
		$('html, body').animate({

			scrollTop: $(id).offset().top - offset2
		}, 1000);
		return false
	}

};
