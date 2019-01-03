
function DarkCloudyWeather(num, speed){
  this.background = [19, 24, 98];

  this.numClouds = random(2,num);
  this.windspeed = speed;
  this.clouds = [];
  for(let i = 0; i < this.numClouds; i++){
      this.clouds.push(new Cloud(this.windspeed));
  }

  this.bg = function(){
    background(this.background[0], this.background[1], this.background[2]);
  }
  this.draw = function(){
    this.drawMoon();
    this.drawClouds();
  },

  this.moveElems = function(){
    this.clouds.forEach(function(elem){
      elem.move();
    });
  }


  this.addElement = function(){

  },

  this.drawClouds = function(){
    this.clouds.forEach(function(elem){
      elem.draw();
    });
  }

  this.drawMoon = function(){
    fill(126);
    stroke(126);
    ellipse(0, 0, 100, 100);
  }

}

function Cloud(value){
  this.x = random(400);
  this.y = random(800);
  this.speed = value * random(0.5,1);
  this.move = function(){
    this.x += this.speed;
    if(this.x > 425){
      this.x = -50;
    }
  }

  this.draw = function(){
    fill(200);
    stroke(200);
    ellipseMode(RADIUS);

    ellipse(this.x, this.y, 25, 25);
    ellipse(this.x + 15, this.y - 15, 25, 25);
    ellipse(this.x + 35, this.y - 11, 25, 25);
    ellipse(this.x + 35, this.y + 15, 25, 25);

  }

}
