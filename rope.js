class Rope{

constructor(bodyA,pointB){

var options={bodyA:bodyA,pointB:pointB,stiffness:0.5,length:550}

this.pointB=pointB

this.rope=Constraint.create(options)

World.add(wld,this.rope)

}

display(){



}

}

