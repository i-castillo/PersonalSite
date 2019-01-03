
function CloudyWeather(num, speed){
  this.background = [135, 206, 250];

  this.windspeed = speed;
  this.barnPosition = random(400-250);
  this.numClouds = random(2,num);
  this.clouds = [];
  for(let i = 0; i < this.numClouds; i++){
      this.clouds.push(new Cloud(this.windspeed));
  }


  this.bg = function(){
    background(this.background[0], this.background[1], this.background[2]);
  }
  this.draw = function(){
    this.drawSun();
    this.drawClouds();
    this.drawGrass();
    this.drawBarn();
  },

  this.moveElems = function(){
    this.clouds.forEach(function(elem){
      elem.move();
    });
  }
  this.drawBarn = function(){
    let pos = this.barnPosition;
    fill(255, 0, 0);
    stroke(255, 0, 0);
    rect(pos, 500, 250, 249);
    triangle(pos,500,pos+125,500-100,pos+250,500);
    stroke(255);
    strokeWeight(3);
    line(pos, 500, pos+250, 750);
    line(pos+250, 500, pos, 750);
    line(pos, 500, pos + 250, 500);

  }

  this.addElement = function(){

  },

  this.drawGrass = function(){
    stroke(34, 139, 34);
    fill(34,139, 34);
    rect(0, 750, 400, 50);
  },
  this.drawClouds = function(){
    this.clouds.forEach(function(elem){
      elem.draw();
    });
  }

  this.drawSun = function(){
    fill(255,212,0);
    stroke(255, 212, 0);
    ellipse(0, 0, 200, 200);
  }

}

function Cloud(speed){
  this.x = random(400);
  this.y = random(400);
  this.speed = speed * random(0.5,1);
  this.move = function(){
    this.x += this.speed;
    if(this.x > 425){
      this.x = -50;
    }
  }

  this.draw = function(){
    fill(255);
    stroke(255);
    ellipseMode(RADIUS);

    ellipse(this.x, this.y, 25, 25);
    ellipse(this.x + 15, this.y - 15, 25, 25);
    ellipse(this.x + 35, this.y - 11, 25, 25);
    ellipse(this.x + 35, this.y + 15, 25, 25);

  }

}
