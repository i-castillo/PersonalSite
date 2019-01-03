let weather;
var weatherString;
var temperature;
var input, button, txt;
typeEnum = {
  FLAKE : 0,
  BALL : 1,
  DROP: 2

}
function setup(){
  createCanvas(400, 800);

  input = createInput();
  input.position(200, 300);

  button = createButton('submit');
  button.position(200, 300 + input.height);
  button.mousePressed(getCoordinates);

  txt =  createElement('h2', 'enter a location');
  txt.position(200, 250 - input.height);


}



function setWeather(queriedWeather, temp){
  weatherString = queriedWeather.trim();
  temperature = temp;
  switch(queriedWeather.trim()){
    case "clear-day":
    weather = new CloudyWeather(2, 2);
    break;
    case "clear-night":
    weather = new DarkCloudyWeather(2, 2);
    break;
    case "rain":
    weather = new RainWeather();
    break;
    case "snow":
    weather = new SnowWeather();
    break;
    case "sleet":
    weather = new HailWeather();
    break;
    case "wind":
    weather = new CloudyWeather(6, 3);
    break;
    case "fog":
    weather = new FoggyWeather();
    break;
    case "cloudy":
    weather = new CloudyWeather(12, 2);
    break;
    case "partly-cloudy-day":
    weather = new CloudyWeather(6, 2);
    break;
    case "partly-cloudy-night":
    weather = new DarkCloudyWeather(6, 2);
    break;
  }

}

function draw(){

  if(weather != null){

    weather.bg();
    weather.addElement();
    weather.draw();
    weather.moveElems();
    textSize(32);
    textAlign(CENTER);
    fill(0);
    text(weatherString, 200, 400);
    text(temperature + "°F", 200, 500);
  }

}

function mouseClicked(){
}
