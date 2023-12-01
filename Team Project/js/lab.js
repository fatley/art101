/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: Nov 13 2023
*/

// loads the map and centers on SC
var mymap = L.map('mapid').setView([36.9741, -122.0308], 13);
// var mymap = L.map('mapid').setView([34.0522, -118.2437], 13);
// loads the map tiles
// z - zoom level, x - x cord, y - y cord
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 19,
}).addTo(mymap);

// adding a marker to the map 
var LAmarker = L.marker([34.0522, -118.2437]).addTo(mymap);
LAmarker.area = "Los Angeles";
// add cities
var ParisMarker = L.marker([48.8566, 2.3522]).addTo(mymap);
var BarcelonaMarker = L.marker([41.3874, 2.1686]).addTo(mymap);

// spotify player
// using spotify's web api to play music
var deviceId;
var isPlaying = false;
const token = 'BQCaP4qZugjaUrLX_j4UAmLm6dRBrlqNF-ueKFoFLy0LeedAqxWDAKD5T2gAYwya3KrgyDIznaGTBIvb5nN9XGVHwMIZIriI9_DUBRgA-0dTBaLjS8BLyR3vIbzMJjColiFA6JV4TEAyK03BSwsI2flSUihnZLjkKD5gIlFVRYUzjdtPzsd04e7RFezSQO0g44ab';

// spotify's given code to play music
window.onSpotifyWebPlaybackSDKReady = () => {
  const player = new Spotify.Player({
    name: 'Web Playback SDK Quick Start Player',
    getOAuthToken: cb => { cb(token); },
    volume: 0.5
  });

player.connect();

player.addListener('ready', ({device_id}) => {
  deviceId = device_id;
});

player.addListener('player_state_changed', state => {
  isPlaying = !state.paused;
});
};

// play/pause button
window.playTrack = function() {
  fetch(`https://api.spotify.com/v1/me/player/${isPlaying ? 'pause' : 'play'}?device_id=${deviceId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
}

// embedding the track onto the popup
LAmarker.on('click', function(){
  LAmarker.bindPopup(`
    <div style="width:600px; height:400px; margin: auto;">
    <h3>The top song for ${this.area} is:</h3>
      <br><iframe style="border-radius:15px;" src="https://open.spotify.com/embed/track/1BxfuPKGuaTgP7aM0Bbdwr?utm_source=generator" width="50%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></br>
    </div>
  `).openPopup();
});

window.onload = function() {
  alert("Welcome to Our Music Map!\n\nThis is our welcome message.");
}

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