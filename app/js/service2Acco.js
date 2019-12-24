$(function () {
	$('.service2__accoTrigger').on('click', function(e) {
		e.preventDefault();

		var $this = $(this),
				item = $this.closest('.service2__accoItem'),
				container = $this.closest('.service2__acco'),
				items = container.find('.service2__accoItem'),
				content = item.find('.service2__accoItem-info'),
				otherContent = container.find('.service2__accoItem-info');

		if (!item.hasClass('service2__accoItem_active')) {
				items.removeClass('service2__accoItem_active');
				item.addClass('service2__accoItem_active');
				otherContent.slideUp();
				content.slideDown();

		} else {
			item.removeClass('service2__accoItem_active');
			content.slideUp();
		}

	});

});