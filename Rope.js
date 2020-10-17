class Rope {
    constructor(body1, body2) {
      var options = {
          bodyA:body1, 
          bodyB:body2
        
      }
      this.rope = Constraint.create(options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };