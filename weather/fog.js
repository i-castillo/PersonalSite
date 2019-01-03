
function FoggyWeather(){
  this.background = [19, 24, 98];
  this.trees = [];
  this.numTrees = random(2, 6);
  for(let i = 0; i < this.numTrees; i++){
    this.trees.push(new Tree());
  }

  this.bg = function(){
    background(this.background[0], this.background[1], this.background[2]);
  }
  this.draw = function(){
    this.drawTrees();
    this.drawFog();

  },

  this.moveElems = function(){

  }

  this.addElement = function(){

  },
  this.drawTrees = function(){
    this.trees.forEach( function(elem){
      elem.draw();
    });

  }

  this.drawFog = function(){


}

}

function Tree(){
  this.x = random(350);
  this.y = random(300, 700);
  this.length = random(200, 450);
  this.width = random(150, 300);
  this.color = random(20, 80)
  this.draw = function(){
    fill(0, this.color, 0);
    stroke(0,this.color, 0);
    triangle(this.x, this.y, this.x + this.width/2 , this.y - this.length/3, this.x + this.width , this.y);
    triangle(this.x, this.y + this.length/3, this.x + this.width/2, this.y - this.length/3,this.x + this.width,this.y + this.length/3);
    triangle(this.x, this.y + 2 * this.length/3, this.x + this.width/2, this.y - this.length/3, this.x + this.width ,this.y + 2 * this.length/3);

  }

}
