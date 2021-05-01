class string{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.pointB = pointB;
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }

    attach(body) {
        this.rope.bodyA = body;
      }
    
      fly() {
        this.rope.bodyA = null;
      }
    
    display(){
       
        if(this.string.bodyA){
            var pointA = this.string.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke("brown");
            line(pointB.x,pointB.y,pointA.x,pointA.y);
           
           
            
            pop();
        }
    }
    
}