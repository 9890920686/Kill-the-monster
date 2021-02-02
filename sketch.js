const Engine = Matter.Engine
const World = Matter.World
const Constraint = Matter.Constraint
const Bodies = Matter.Bodies

var eng
var wld

var Ground,Groundb

var b1,b2,b3,b4,b5

var c1,c2,c3,c4,c5

var wball,wrope

var bagroundimg

var enemy , enemyimg , enemybody

function setup(){

    createCanvas(1400,700)

    eng=Engine.create()
    wld=eng.world


    bagroundimg=loadImage("GamingBackground.png")

    enemyimg=loadImage("Monster-01.png")
    

    var options = {isStatic:'true'}

    
    
    Groundb=Bodies.rectangle(600,650,1000,10,options)

    enemybody=Bodies.rectangle(100,100,1200,10,options)

    World.add(wld,Groundb)

    World.add(wld,enemybody)

  b1 = new Block(900,625)
  b2 = new Block(900,575)
  b3 = new Block(900,525)
  b4 = new Block(900,475)
  b5 = new Block(900,425)
  c1 = new Block(900,375)
  c2 = new Block(900,325)
  c3 = new Block(900,275)
  c4 = new Block(900,225)
  c5 = new Block(900,175)

    wball = new Ball(400,300)
    wrope = new Rope(wball.body,{x:550,y:0})

    enemy = new monster()

}

function draw(){


    Engine.update(eng)


background(bagroundimg);
// backgroundimage(bagroundimage)

rectMode(CENTER);




b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
c1.display();
c2.display();
c3.display();
c4.display();
c5.display();

wball.display();
wrope.display();

enemy.display();

}

function mouseDragged(){

    Matter.Body.setPosition(wball.body,{x:mouseX,y:mouseY})
}

