class Ball {

    constructor(x,y){
    
    var options={'frictionAir':0.005,'density':1}
    
    this.body=Bodies.rectangle(x,y,190,80,options)
    
    this.width=250
    this.height=100

    this.image=loadImage("Superhero-01.png")
    
    World.add(wld,this.body)
    
    }
    
    display(){
    
        var posx=this.body.position.x
        var posy=this.body.position.y
    
        var angle=this.body.angle
        push();
    
        translate(posx,posy)
    
        rotate(angle)
    
        imageMode(CENTER)
    
        image(this.image,0,0,this.width,this.height)
    
        pop();
    
    
    
    }
    
    }