class Bob{
    constructor(x,y,r){
         this.x = x;
         this.y = y;
         this.r = r;
         var options = {
             isStatic:false,
             restitution:1,
             friction:0,
             density:0.8
    
         }
         this.x = x;
         this.y = y;
         this.r = r;
         this.body = Bodies.circle(x, y, r);
         World.add(world, this.body);

             
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        ellipse(pos.x, pos.y, this.r, this.options);  
    }
}