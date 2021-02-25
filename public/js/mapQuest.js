function initMap() {
	L.mapquest.key = 'gQodwrltFFj1CQea0QRUHVP8wprwWFR1';

	var map = L.mapquest.map('map', {
		center: [32.878626, -117.235895],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878626, -117.235895]).addTo(map);
}