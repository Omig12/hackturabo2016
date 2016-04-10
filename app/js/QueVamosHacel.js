/* Javascript back-end for Quevamosahacer? */

//  Stores amount of friends
var numUser = undefined;
// Stores possible choices list
var options = new Array;
// Stores budget
var budget = undefined;
// Stores max distance
var distance = undefined;
// Stores winner for IRV do-while
var winner = undefined;
// Stores Google maps key API
var YOUR_API_KEY = "AIzaSyBRjK73kGLkj1RziDOm5PCvRUjUGUs3ILc";
// Stores users Latitude
var lat;
// Stores users Longitude
var lon;
//Stores Users Altitude
var alt;


// General input helper
function get_input(item) {
	return document.getElementById(item);
}

// Get number of users
print("Enter amount of users: ");
numUser = get_input("cantidad");

// Gets the options for user
print("Enter your option: ");
for (var i = 0; i < numUser; i++) {
    print(i + ") ");
    options[i] = new Array(2);
	options[i][0] = get_input("name");
    options[i][1] = 0;
}

// fill array of each users preference
var userArray = new Array(numUser);
for (var i = 0; i < numUser; i++) {
	userArray[i] = new Array(numUser);
	for (var k = 0; k < numUser; k++) {
		userArray[i][k] = get_input();
	}
}

do {
    for (var i in userArray) {
        for (var j in userArray[i]) {
            if (userArray[i][0] == options[j][0]) { // go over options and increment per first choice
                 options[j][1] += 1; // where incrementation is actually done
                 if (options[j][1] >= numUser / 2) { // check whether there is a choice with majority of votes
                     winner = options[j][0]; // store winner
                 }
            }
        }
    }
} while (winner == undefined)

print(winner)

/* stubs */
print("\nuser preference: ");
for (var i = 0; i < numUser; i++) {
	print(userArray[i]);
}

//Jose part
// Get user budget
print("\nEnter your budget (in USD): ");
budget = get_input();

// Get user distance
print("\nEnter your max distance: ");
distance = get_input();

//Israel part
// Get user position
// GET Position
var locationSuccess = function (pos) {
var coordinates = pos.coords;
    console.log('MY location= lat:' + coordinates.latitude + ', long: ' + coordinates.longitude + ', alt: ' + coordinates.altitude);
    lat = coordinates.latitude.toFixed(2);
    lon = coordinates.longitude.toFixed(2);
    alt = coordinates.altitude.toFixed(2);
// TODO
};
var locationError = function (err) {
console.warn('location error (' + err.code + '): ' + err.message);
};
if (navigator && navigator.geolocation) {
navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
} else {
console.log('No geolocation');
}

// Search google for top_hit
function googleSearch() {
	var map;
	var infowindow;

	function initMap() {
	  var pyrmont = {lat: lat, lng: lon};

	  map = new google.maps.Map(document.getElementById('map'), {
	    center: pyrmont,
	    zoom: 15
	  });

	  infowindow = new google.maps.InfoWindow();
	  var service = new google.maps.places.PlacesService(map);
	  service.nearbySearch({
	    location: pyrmont,
	    radius: 500,
	    type: ['store']
	  }, callback);
	}

	function callback(results, status) {
	  if (status === google.maps.places.PlacesServiceStatus.OK) {
	    for (var i = 0; i < results.length; i++) {
	      createMarker(results[i]);
	    }
	  }
	}
}
