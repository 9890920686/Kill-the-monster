class monster {

constructor(){

this.body=Bodies.rectangle(1100,500,200,200,{isStatic:false})

World.add(wld,this.body)

this.image=loadImage("Monster-01.png")


}

display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 300, 300);
    pop();





}

}