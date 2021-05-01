class box {

    constructor(x,y,width,height){
        var options={
          ' restitution':0.5,'friction':1.0,'density':0.02
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)

    }
    display(){
        var pause=this.body.position;
        var angle=this.body.angle;
     push()
     translate(pause.x,pause.y)
     rotate(angle)
      rectMode(CENTER);
        fill("white")
        stroke("green")
        rect(0,0,this.width,this.height);

        pop();
        
    }


}