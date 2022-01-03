class Box {
  constructor(x,y,width,height,angle){
    var option = {
      "density": 0.04,
      "friction":1,
      "restitution":0.8,
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
  rectMode (CENTER)
  stroke ("green")
  fill (255)
  rect (0,0,this.width,this.height)
  pop ()

  }
}
