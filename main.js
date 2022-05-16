document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//


var onSuccess = function timer(position){
    document.getElementById("log").innerHTML = 'Speed: '             + position.coords.speed             + '<br>' +
          'Latitude: '          + position.coords.latitude          + '<br>' +
          'Longitude: '         + position.coords.longitude         + '<br>' +
          'Altitude: '          + position.coords.altitude          + '<br>' +
          'Accuracy: '          + position.coords.accuracy          + '<br>' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
          'Heading: '           + position.coords.heading           + '<br>' +
          'Timestamp: '         + position.timestamp                + '<br>';
          setTimeout(timer,1000);
        };
// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '<br>' +
          'message: ' + error.message + '<br>');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);

































/*
    // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
*/