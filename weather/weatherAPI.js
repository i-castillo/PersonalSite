function apicall(latitude, longitude, successFunc){

  let api_url = "https://api.darksky.net/forecast/627a05d3e14fc5369aa7e88e6e8b744a/" + latitude + "," + longitude;

  $.ajax({
    url: api_url,
    dataType: "jsonp",

    success: function(meep){
      let weather = meep.currently.icon;
      let temp = meep.currently.temperature;

      successFunc(weather, temp);
    }
});


}

function getCoordinates(){
  let geo_url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + input.value() + "&key=AIzaSyBaAR3_0PVNo6DwpNzTScFrMRSeljsl1uI";
  $.ajax({
    url: geo_url,
    dataType: "json",

    success: function(meep){
      txt.hide();
      let lat = meep.results["0"].geometry.location.lat;
      let lng = meep.results["0"].geometry.location.lng;
      apicall(lat, lng, setWeather);
    }
});
}
