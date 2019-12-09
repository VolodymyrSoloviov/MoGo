$(function () {
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop: true,
	});

	var owl = $('.owl-carousel');
	owl.owlCarousel();

	// Go to the next item
	$('.quote__arrow_right').click(function() {
    owl.trigger('next.owl.carousel');
	});

	// Go to the previous item
	$('.quote__arrow_left').click(function() {
    // With optionaquote__arrow_leftl speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
	});
});