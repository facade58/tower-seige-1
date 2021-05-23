//polygon.js

class Polygon{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.1,
            density:0.02
    

        }
        this.body=Bodies.circle(50,200,20);
        
        World.add(world,this.body);
    }
    display(){
    var pos = this.body.position;
    strokeWeight(2);
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height);
imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.y,40,40);
    

}
}
    