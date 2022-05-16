function calculateSpeed(t1, lat1, lng1, t2, lat2, lng2) {
    if (typeof(Number.prototype.toRad) === "undefined") {
      Number.prototype.toRad = function() {
        return this * Math.PI / 180;
      }
    }
    var R = 6371; // km
    var dLat = (lat2-lat1).toRad();
    var dLon = (lng2-lng1).toRad();
    var lat1 = lat1.toRad();
    var lat2 = lat2.toRad();
  
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) *    Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var distance = R * c;
    
    return distance / t2 - t1;
  }
  
  function firstGeolocationSuccess(position1) {
    var t1 = Date.now();
    navigator.geolocation.getCurrentPosition(
      function (position2) {
        var speed = calculateSpeed(t1 / 1000, position1.coords.latitude, position1.coords.longitude, Date.now() / 1000, position2.coords.latitude, position2.coords.longitude);
        console.log("Speed= "+speed)  
        document.write("Speed= "+speed)  
    }
    )};
  navigator.geolocation.getCurrentPosition(firstGeolocationSuccess);