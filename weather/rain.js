
function RainWeather(){
  this.background = [255, 255, 255];

  this.height = 800;
  this.growCount = 0;
  this.rainElems = [];
  this.timer = 0;
  this.maxElems = 0;

  this.bg = function(){
    background(this.background[0], this.background[1], this.background[2]);
  }
  this.addElement = function(){
    if(this.rainElems.length > this.maxElems){
      this.maxElems = this.rainElems.length;
    }

    this.timer++;
    if(this.timer % 2 == 0){
    this.timer = 0;
    this.rainElems.push(new RainItem(this));
    this.rainElems.push(new RainItem(this));
    this.rainElems.push(new RainItem(this));
    this.rainElems.push(new RainItem(this));
    }

  };
  this.moveElems = function(){
    for(var i = this.rainElems.length-1; i >= 0; i--){
      if(this.rainElems[i].position.y >= this.height){
        this.rainElems.splice(i, 1);
      }
      else{
        this.rainElems[i].move();
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
    rect(0, this.height, 400, 800);
  };

  this.draw = function(){
    this.drawFloor();

    this.rainElems.forEach(function(elem){
      elem.draw();
    });
  };
}

function RainItem(rain){
  this.count = 0;
  this.rainWeather = rain;
  this.position = createVector(random(400), -10);
  this.velocity = createVector(0, random(20, 50));
  this.acceleration = createVector(0,0.05);
  this.isDead = false;
  this.size = random(35, 45);
  this.draw = function(){
    stroke(0, 0, 255);
    fill(0, 0, 255);
    rect(this.position.x, this.position.y, 2, this.size);

    }

  this.move = function(){
    this.count++;
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  };

}
