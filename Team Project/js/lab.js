/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: Nov 13 2023
*/


window.onload = function() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

// map creation and centering
var mymap = L.map('mapid').setView([0, 0], 3);
// loads the map tiles
// z - zoom level, x - x cord, y - y cord
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(mymap);



// adding a marker to the map 
var LAmarker = L.marker([34.0522, -118.2437]).addTo(mymap);
LAmarker.area = "Los Angeles";
var Paris = L.marker([48.8566, 2.3522]).addTo(mymap);
Paris.area = "Paris";
var Barcelona = L.marker([41.3874, 2.1686]).addTo(mymap);
Barcelona.area = "Barcelona";
var Amsterdam = L.marker([52.3676, 4.9041]).addTo(mymap);
Amsterdam.area = "Amsterdam";
var Berlin = L.marker([52.5200, 13.4050]).addTo(mymap);
Berlin.area = "Berlin";
var Chicago = L.marker([41.8781, -87.6298]).addTo(mymap);
Chicago.area = "Chicago";
var Istanbul = L.marker([41.0082, 28.9784]).addTo(mymap);
Istanbul.area = "Istanbul";
var Toronto = L.marker([43.6532, -79.3832]).addTo(mymap);
Toronto.area = "Toronto";
var SaoPaulo = L.marker([-23.5505, -46.6333]).addTo(mymap);
SaoPaulo.area = "Sao Paulo";
var Sydney = L.marker([-33.8688, 151.2093]).addTo(mymap);
Sydney.area = "Sydney";
var Santiago = L.marker([-33.4489, -70.673676]).addTo(mymap);
Santiago.area = "Santiago";
var NYC = L.marker([40.7128, -74.0060]).addTo(mymap);
NYC.area = "New York City";
var MexicoCity = L.marker([19.4326, -99.1332]).addTo(mymap);
MexicoCity.area = "Mexico City";
var Madrid = L.marker([40.4168, -3.7038]).addTo(mymap);
Madrid.area = "Madrid";
var London = L.marker([51.5074, -0.1278]).addTo(mymap);
London.area = "London";
var Jakarta = L.marker([-6.1751, 106.8650]).addTo(mymap);
Jakarta.area = "Jakarta";


// embedding the track onto the popup
// ADDING SPOTIFY TO CITY
LAmarker.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;"> The top song for ${LAmarker.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `);

LAmarker.on('click', function(){
  LAmarker.openPopup();
});

Amsterdam.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Amsterdam.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/0NxfpRR1pmtGC9J61iHIIc?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `);
Amsterdam.on('click', function(){
  openPopup();
});

Paris.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Paris.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/1eldTykrnkEBLX41bk5eMw?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
Paris.on('click', function(){
  openPopup();
});

Barcelona.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Barcelona.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2HafqoJbgXdtjwCOvNEF14?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
Barcelona.on('click', function(){
  openPopup();
});

Berlin.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Berlin.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/0bYg9bo50gSsH3LtXe2SQn?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
Berlin.on('click', function(){
  openPopup();
});

Chicago.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Chicago.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2EjXfH91m7f8HiJN1yQg97?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
Chicago.on('click', function(){
  openPopup();
});

Istanbul.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Istanbul.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/3auN910HHNYykQo8i9q5J1?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
Istanbul.on('click', function(){
  openPopup();
});

Toronto.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Toronto.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
Toronto.on('click', function(){
  openPopup();
});

SaoPaulo.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${SaoPaulo.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2InS5VWKJQbsFBKOsf1cJB?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
SaoPaulo.on('click', function(){
  openPopup();
});

Sydney.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Sydney.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
    `)
Sydney.on('click', function(){
  openPopup();
});

Santiago.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Santiago.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/6hwGwCfCwHoSJQw7AYPEQu?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `)
Santiago.on('click', function(){
  openPopup();
});

NYC.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${NYC.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `)
NYC.on('click', function(){
  openPopup();
});

MexicoCity.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${MexicoCity.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/6CvTEtGagmzQvkUzzyKR9k?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `)
MexicoCity.on('click', function(){
  openPopup();
});

Madrid.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Madrid.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/2HafqoJbgXdtjwCOvNEF14?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `)
Madrid.on('click', function(){
  openPopup();
});

London.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${London.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/4xhsWYTOGcal8zt0J161CU?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `)
London.on('click', function(){
  openPopup();
});

Jakarta.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3 style="color: white;">The top song for ${Jakarta.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/7F4tV8SiUy6itZTdAzdafO?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `)
Jakarta.on('click', function(){
  openPopup();
});

var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML +=
      '<a href="#" id="LosAngeles" class="legend-item">Los Angeles</a><br>' +
      '<a href="#" id="Paris" class="legend-item">Paris</a><br>' +
      '<a href="#" id="Barcelona" class="legend-item">Barcelona</a><br>' +
      '<a href="#" id="Amsterdam" class="legend-item">Amsterdam</a><br>' +
      '<a href="#" id="Berlin" class="legend-item">Berlin</a><br>' +
      '<a href="#" id="Chicago" class="legend-item">Chicago</a><br>' +
      '<a href="#" id="Istanbul" class="legend-item">Istanbul</a><br>' +
      '<a href="#" id="Toronto" class="legend-item">Toronto</a><br>' +
      '<a href="#" id="SaoPaulo" class="legend-item">Sao Paulo</a><br>' +
      '<a href="#" id="Sydney" class="legend-item">Sydney</a><br>' +
      '<a href="#" id="Santiago" class="legend-item">Santiago</a><br>' +
      '<a href="#" id="NewYorkCity" class="legend-item">New York City</a><br>' +
      '<a href="#" id="MexicoCity" class="legend-item">Mexico City</a><br>' +
      '<a href="#" id="Madrid" class="legend-item">Madrid</a><br>' +
      '<a href="#" id="London" class="legend-item">London</a><br>' +
      '<a href="#" id="Jakarta" class="legend-item">Jakarta</a><br>';
  return div;
};


legend.addTo(mymap);

document.getElementById('LosAngeles').addEventListener('click', function() {
  mymap.flyTo([34.0522, -118.2437], 10);
});
document.getElementById('Paris').addEventListener('click', function() {
  mymap.flyTo([48.8566, 2.3522], 10);
});
document.getElementById('Barcelona').addEventListener('click', function() {
  mymap.flyTo([41.3874, 2.1686], 10);
});
document.getElementById('Amsterdam').addEventListener('click', function() {
  mymap.flyTo([52.3676, 4.9041], 10);
});
document.getElementById('Berlin').addEventListener('click', function() {
  mymap.flyTo([52.5200, 13.4050], 10);
});
document.getElementById('Chicago').addEventListener('click', function() {
  mymap.flyTo([41.8781, -87.6298], 10);
});
document.getElementById('Istanbul').addEventListener('click', function() {
  mymap.flyTo([41.0082, 28.9784], 10);
});
document.getElementById('Toronto').addEventListener('click', function() {
  mymap.flyTo([43.6532, -79.3832], 10);
});
document.getElementById('SaoPaulo').addEventListener('click', function() {
  mymap.flyTo([-23.5505, -46.6333], 10);
});
document.getElementById('Sydney').addEventListener('click', function() {
  mymap.flyTo([-33.8688, 151.2093], 10);
});
document.getElementById('Santiago').addEventListener('click', function() {
  mymap.flyTo([-33.4489, -70.673676], 10);
});
document.getElementById('NewYorkCity').addEventListener('click', function() {
  mymap.flyTo([40.7128, -74.0060], 10);
});
document.getElementById('MexicoCity').addEventListener('click', function() {
  mymap.flyTo([19.4326, -99.1332], 10);
});
document.getElementById('Madrid').addEventListener('click', function() {
  mymap.flyTo([40.4168, -3.7038], 10);
});
document.getElementById('London').addEventListener('click', function() {
  mymap.flyTo([51.5074, -0.1278], 10);
});
document.getElementById('Jakarta').addEventListener('click', function() {
  mymap.flyTo([-6.1751, 106.8650], 10);
});