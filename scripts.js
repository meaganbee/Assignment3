mapboxgl.accessToken = 'pk.eyJ1IjoibWVhZ2FuYmVlIiwiYSI6ImNqdWQ5NWNjYTBmZTQzeXJ5YTdoZmo2ZnIifQ.2QCTx5st31pRF3nT1mZDjQ'

var map = new mapboxgl.Map({
container: 'mapContainer',
style: 'mapbox://styles/mapbox/streets-v9',
center: [-73.377686,41.709829],
zoom: 9.5,
});

var popup = new mapboxgl.Popup({ offset: 25 })
.setText('Cats-are-here');

var marker = new mapboxgl.Marker()
  .setLngLat([30.5, 50.5])
  .setPopup(popup);
  .addTo(map);
