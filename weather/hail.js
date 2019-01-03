
function HailWeather(){

  this.height = 800;
  this.growCount = 0;
  this.hailElems = [];
  this.timer = 0;
  this.maxElems = 0;
  this.bg = function(){
    background(200);
  }
  this.addElement = function(){
    if(this.hailElems.length > this.maxElems){
      this.maxElems = this.hailElems.length;
    }

    this.timer++;
    if(this.timer % 15== 0){
    this.timer = 0;
    this.hailElems.push(new HailItem(this));

    }

  };
  this.moveElems = function(){
    for(var i = this.hailElems.length-1; i >= 0; i--){
      if(this.hailElems[i].position.y >= this.height){
        this.hailElems.splice(i, 1);
      }
      else{
        this.hailElems[i].move();
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

    this.hailElems.forEach(function(elem){
      elem.draw();
    });
  };
}

function HailItem(hail){
  this.count = 0;
  this.hailWeather = hail;
  this.position = createVector(random(400), -10);
  this.velocity = createVector(0, random(20, 25));
  this.acceleration = createVector(0,0.05);
  this.isDead = false;
  this.size = random(15, 20);
  this.draw = function(){
    stroke(255);
    fill(255);
    rect(this.position.x, this.position.y, 10, this.size);

    }

  this.move = function(){
    this.count++;
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
  };

}
