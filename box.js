class Box{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:1,
            density:0.4
        }
        this.body=Bodies.rectangle(y,x,30,40,options);
        this.x=x;
        this.y=y;
        this.width=30;
        this.height=40;
        World.add(world,this.body);
    }
    display(){
        fill("pink");
        rect(this.x,this.y,this.width,this.height);
    }
}