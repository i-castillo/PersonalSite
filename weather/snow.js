
function SnowWeather(){
  this.background = [200, 200, 200];

  this.height = 800;
  this.growCount = 0;
  this.snowElems = [];
  this.timer = 0;
  this.maxElems = 0;

  this.bg = function(){
    background(this.background[0], this.background[1], this.background[2]);
  }
  this.addElement = function(){
    if(this.snowElems.length > this.maxElems){
      this.maxElems = this.snowElems.length;
    }

    this.timer++;
    if(this.timer % 4 == 0){
    this.timer = 0;
    rand = Math.floor(random(2));
      if(rand == typeEnum.BALL){
      this.snowElems.push( new SnowItem(this, typeEnum.BALL ));
    }else{
      this.snowElems.push(new SnowItem(this, typeEnum.FLAKE));
    }
  }
  };
  this.moveElems = function(){
    for(var i = this.snowElems.length-1; i >= 0; i--){
      if(this.snowElems[i].position.y >= this.height){
        this.snowElems.splice(i, 1);
        this.growFloor();
      }
      else{
        this.snowElems[i].move();
      }
    }

  }
  this.growFloor = function(){
    this.growCount++;
    if(this.growCount == 5){
      this.growCount = 0;
      this.height--;
    }
  };

  this.drawFloor = function(){
    stroke(255);
    fill(255);
    rect(0, this.height, 400, 800);
  };
  this.draw = function(){
    this.drawFloor();

    this.snowElems.forEach(function(elem){
      elem.draw();
    });
  };
}

function SnowItem(snow, type){
  this.count = 0;
  this.type = type;
  this.snowWeather = snow;
  this.position = createVector(random(400), -1);
  this.velocity = createVector(random(-1,1), 2);
  this.isDead = false;
  this.size = random(5,15);
  this.draw = function(){
    stroke(255);
    fill(255);
    if(this.type == typeEnum.FLAKE){
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }else if(this.type == typeEnum.BALL){
      ellipse(this.position.x, this.position.y, 10, 10);
    }
  };
  this.move = function(){
    this.count++;
    if(this.count == 20){
      this.count = 0;
      this.velocity.set(random(-1, 1), 2);
    }
    this.position.add(this.velocity);
  };

}
