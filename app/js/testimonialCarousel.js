$(function () {
	$('.testimonial__list').owlCarousel({
		items: 1,
		loop: true,
	});

	var owl = $('.testimonial__list');
	owl.owlCarousel();

	// Go to the next item
	$('.testimonial__arrow_right').click(function() {
    owl.trigger('next.owl.carousel');
	});

	// Go to the previous item
	$('.testimonial__arrow_left').click(function() {
    // With optionaquote__arrow_leftl speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
	});
});