  
class Plinko {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("salmon");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};



//class Plinko{
//    constructor(x,y,radius){
//       var options={
//           isStatic: false,
//           restitution: 0.3,
//           friction: 0.5,
//           density: 1.2
//      }
//       this.body = Bodies.circle(x,y,radius,options);
//      this.radius = radius
//       World.add(world,this.body);
   
//   }
   
//   display(){
//       ellipse(this.body.position.x,this.body.position.y,10,10);
       //image(this.image, this.body.position.x, this.body.position.y, 50, 50);
   
  // }
   
  // }