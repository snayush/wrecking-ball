class Ball {
  constructor(x,y,width,height,angle){
    var option = {
      "density": 1.5,
      "frictionAir":0.005
    }
    this.body = Bodies.rectangle(x,y,width,height,option)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }

  display() {
  var x = this.body.position.x;
   var y = this.body.position.y;
   var angle = this.body.angle;
  push ()
  translate (x,y)
  rotate (angle)
  fill ("pink")
  ellipse (0,0,this.width,this.height)
  pop ()

  }
}
