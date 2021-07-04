$(function () {
	$('.footer__instagramLink-more').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this),
		ulBlock = $('.footer__instagramList');

		if(!ulBlock.hasClass('more')) {
			ulBlock.addClass('more');
			$this.text('View less photos');
		} else {
			ulBlock.removeClass('more');
			$this.text('View more photos');
		}

	});
});