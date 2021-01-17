class Launch{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10     
        }
        this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if(this.sling.bodyA){
            var a=this.sling.bodyA.position;
            var b=this.pointB;
            strokeWeight(3);
            line(a.x,a.y,b.x,b.y);
        }
    }
}