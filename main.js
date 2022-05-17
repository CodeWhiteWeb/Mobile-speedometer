document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  console.log("navigator.geolocation works well");
}

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function (position) {
  document.getElementById("speed").innerHTML  = Math.round(position.coords.speed * 100) / 100            + '<br>';
  document.getElementById("lat").innerHTML    = Math.round(position.coords.latitude * 100) / 100         + '<br>';
  document.getElementById("lng").innerHTML    = Math.round(position.coords.longitude * 100) / 100        + '<br>';
  document.getElementById("alt").innerHTML    = Math.round(position.coords.altitude * 100) / 100         + '<br>';
  document.getElementById("acc").innerHTML    = Math.round(position.coords.accuracy * 100) / 100         + '<br>';
  document.getElementById("altacc").innerHTML = Math.round(position.coords.altitudeAccuracy * 100) / 100 + '<br>';
  setInterval(function () {
    navigator.geolocation.watchPosition(onSuccess);
  }, 1000);
}

var JqonSuccess = function() {
  jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU", function(position) {
  document.getElementById("speed").innerHTML  = Math.round(position.coords.speed * 100) / 100            + '<br>';
  document.getElementById("lat").innerHTML    = Math.round(position.coords.latitude * 100) / 100         + '<br>';
  document.getElementById("lng").innerHTML    = Math.round(position.coords.longitude * 100) / 100        + '<br>';
  document.getElementById("alt").innerHTML    = Math.round(position.coords.altitude * 100) / 100         + '<br>';
  document.getElementById("acc").innerHTML    = Math.round(position.coords.accuracy * 100) / 100         + '<br>';
  document.getElementById("altacc").innerHTML = Math.round(position.coords.altitudeAccuracy * 100) / 100 + '<br>';
  document.getElementById("nor").innerHTML    = Math.round(position.coords.heading * 100) / 100          + '<br>';
  setInterval(function () {
    navigator.geolocation.watchPosition(JqonSuccess);
  }, 1000)
})};
// onError Callback receives a PositionError object
//

function onError(error) {
  document.getElementById("log").innerHTML = 'code: ' + error.code + '<br>' +
    'message: ' + error.message + '<br>';
}

navigator.geolocation.watchPosition(onSuccess, onError);




var browserGeolocationFail = function(error) {
  switch (error.code) {
      case error.TIMEOUT:
          alert("Browser geolocation error !\n\nTimeout.");
          break;
      case error.PERMISSION_DENIED:
          if(error.message.indexOf("Only secure origins are allowed") == 0) {
            JqonSuccess();
          }
          break;
      case error.POSITION_UNAVAILABLE:
          // safari fix
          if(error.message.indexOf("Origin does not have permission to use Geolocation service") == 0) {
            JqonSuccess();
          } else {
              alert("Browser geolocation error !\n\nPosition unavailable.");
          }
          break;
  }
};

console.log("services have been loaded");
console.log("Created By Sajag Kamthan X C , LAHS, Gwalior");