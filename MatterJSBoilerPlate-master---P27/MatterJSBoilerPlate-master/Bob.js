class Bob {
    constructor(x,y) {
      var options = {
          isStatic:true,
          'restitution':0.9,
          'friction':0.3,
          'density':1.2
      }
    this.body = Bodies.rectangle(x, y, 20, 20, options);
    this.width = 20;
    this.height = 20;
    this.scale = 0.5
    
    World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(255);
        rect( 0, 0, this.width, this.height);
        pop();
      }
}