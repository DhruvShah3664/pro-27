class Bob {
    constructor(x, y) {
      var options = {
        'isStatic': false, 
        'restitution':1,
        'friction':0,
        'density':7.8
      }
      //this.x = x;
     // this.y = y;
     // this.radius = radius;
      this.body = Bodies.circle(x, y, 40, options);
     
      
      
      World.add(world, this.body);
    }
    display(){
     push();
     ellipseMode(RADIUS);
     fill("red");
     ellipse(this.body.position.x, this.body.position.y, 40, 40);
      pop(); 
    }
  };