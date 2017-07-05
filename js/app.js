$("#weather-form").on("submit", function(event) {

  event.preventDefault();

  var city, apiKey, apiUrl, units;

  city = $("#city").val().toUpperCase();

  apiKey = "b965294b6d00bd0c41e73d6c2427f51f";

  units = "&units=metric";

  apiUrl = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&APPID=" + apiKey + units;

  $.ajax({

      url: apiUrl,
      method: "GET",

  })

  .done(function(response) {

    var climate = response.main;
    var latitud = response.coord;
    var longitud = response.coord;
    var weatherDescription = response.weather[0];
    var icono = response.weather[0];


    var temp = climate.temp;
    var minTemp = climate.temp_min;
    var maxTemp = climate.temp_max;
    var humidity = climate.humidity;
    var lat = latitud.lat;
    var lon = longitud.lon;
    var weatherDesc = weatherDescription.description;
    var iconoImg = icono.icon;

    $("#location").empty();
    $("span").empty();

    $("#c-temp").append(temp).append("°");
    $("#c-hum").append(humidity).append("%");
    $("#min-temp").append(minTemp).append("°");
    $("#max-temp").append(maxTemp).append("°");
    $("#latit").append(lat);
    $("#longit").append(lon);

    var img = '<img src="https://openweathermap.org/img/w/' + iconoImg + '.png' + '">';
    $("#weather-description").empty().append(weatherDesc);
    $(".img-added img").remove();
    $(".img-added").append(img);

    $("#location").append(city);

    })

  .fail(function(response) {

    var error = '<span class="error">Sorry, something went wrong.</span>';
    $(".weather").append(error);

    //var errorDetails = JSON.parse(response.responseText);
    //console.log(errorDetails.message);

  });

});