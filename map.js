var mymap = L.map('mapid').setView([0,0], 1);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibmdvcmF5bW9uZCIsImEiOiJjanJ3YTEzaXMwYW1uM3lxeWdrcTNpOHVkIn0.Dg8RBz_o4oV38XHnyQyIWw'
}).addTo(mymap);

var original = L.popup();
var popup = L.popup().setLatLng([0,0]);

function onMapClick(e) {
    var di = popup.getLatLng().distanceTo(e.latlng);
    original
        .setLatLng(popup.getLatLng())
        .setContent("distance is" + di.toString())
        .openOn(mymap);
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .addTo(mymap);
}

mymap.on('click', onMapClick);
