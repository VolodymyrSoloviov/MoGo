
	var map,
			city,
			marker;

      function initMap() {
      	city = {lat: 49.5521827, lng: 25.5931714}; 
        map = new google.maps.Map(document.getElementById('map'), {
          center: city,
          zoom: 15
        });
        marker = new google.maps.Marker({position: city, map: map});
      }

$('.mapClose').on('click', function(e) {
	e.preventDefault();
	var $this = $(this);
	$('.google-map').css('height', '0');
	$this.css('display', 'none');
});

$('.map__link').on('click', function(e) {
		e.preventDefault();
		$('.google-map').css('height', '500');
		$('.mapClose').css('display', 'flex');
		

});