class Umbrella {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("Walking Frame/walking_1.png","Walking Frame/walking_8.png","Walking Frame/walking_3.png",
        "Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png",
        "Walking Frame/walking_7.png");
        this.umbrella = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.umbrella)
        this.bestImg=loadImage("Walking Frame/batman.png");
        
    }

    display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
       if(frameCount >= 200){
        image(this.bestImg,pos.x,pos.y+70,300,300);
       } else {                                                                                           
        image(this.image,pos.x,pos.y+70,300,300);
       }
       
    }

}
