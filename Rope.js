class Rope {
    constructor(bodyA,bodyB,offestX,offestY){ 
        this.offestX=offestX;
        this.offestY=offestY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB, 
            //stiffness:0.04, 
            //length:10, 
            pointB:{x:this.offestX,y:this.offestY} 
        } 

        this.rope = Constraint.create(options); 
        World.add(world,this.rope); 

    }
    display(){
        var pointA = this.rope.bodyA.position; 
        var pointB = this.rope.bodyB.position; 
        strokeWeight(4); 
        var Anchor1X = pointA.x;
        var Anchor1Y = pointA.y; 

        var Anchor2X = pointB.x+this.offestX;  
        var Anchor2Y = pointB.y+this.offestY;
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y); 

    }
}