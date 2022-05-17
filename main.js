document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log("navigator.geolocation works well");
}

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
//onSuccess();

var onSuccess = function(position) {
    document.getElementById("log").innerHTML = 'Speed: '             + position.coords.speed             + '<br>' +
          'Latitude: '          + position.coords.latitude          + '<br>' +
          'Longitude: '         + position.coords.longitude         + '<br>' +
          'Altitude: '          + position.coords.altitude          + '<br>' +
          'Accuracy: '          + position.coords.accuracy          + '<br>' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '<br>' +
          'Heading: '           + position.coords.heading           + '<br>' +
          'Timestamp: '         + position.timestamp                + '<br>'; 
          setInterval(function(){ 
            navigator.geolocation.getCurrentPosition(onSuccess);
          }, 1000);
        }
// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '<br>' +
          'message: ' + error.message + '<br>');
}

navigator.geolocation.getCurrentPosition(onSuccess, onError);
