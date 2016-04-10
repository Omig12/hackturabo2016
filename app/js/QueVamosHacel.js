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
            userArray[i][k] = get_input("preference");
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
    if (options[numUser-1][1] == options[numUser-2][1] == options[numUser-3][1]) {
                    options[Math.floor((Math.random() * numUser))][1] = Math.floor((Math.random() * numUser) + 1);
                 }

    } while (winner == undefined)

    alert(winner);

    // Get user budget
    print("\nEnter your budget (in USD): ");
    budget = get_input("budget");

    // Get user distance
    print("\nEnter your max distance: ");
    distance = get_input("distance");

    // Get user position
    var map;
    var infowindow;
    // Stores Google maps key API
    var YOUR_API_KEY = "AIzaSyBRjK73kGLkj1RziDOm5PCvRUjUGUs3ILc";
    // Stores users Latitude
    var laty = 18.238819690330846;
    // Stores users Longitude
    var lony = -66.00637533016432;

    // // Get user position
    // var locationSuccess = function (pos) {
    // var coordinates = pos.coords;
    //     console.log('My location= lat:' + coordinates.latitude + ', long: ' + coordinates.longitude;
    //     laty = coordinates.latitude.toFixed(2);
    //     lony = coordinates.longitude.toFixed(2);
    // };
    // var locationError = function (err) {
    // console.warn('location error (' + err.code + '): ' + err.message);
    // };
    // if (navigator && navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(locationSuccess, locationError, {maximumAge:0, timeout:5000, enableHighAccuracy:true});
    // } else {
    // console.log('No geolocation');
    // }



    // Search google for top_hit
     
    function initMap() {
        var location = {lat: laty, lng: lony};
        map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
    location: location,
        radius: 1000,
        }, callback);
        type: ['restaurant']
    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                   createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
    }
