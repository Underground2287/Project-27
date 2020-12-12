class Rope {
    constructor(bodyA,bodyB,xOffset,yOffset)
	{
		
		
		var options={
			bodyA:bodyA,
			bodyB:bodyB,
			pointB:{x:xOffset, y:yOffset}
		}
		//console.log(options);
		this.rope=Constraint.create(options);
		this.xOffset=xOffset;
		this.yOffset=yOffset;
		World.add(world,this.rope);
	}

    display(){
    

            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            
            strokeWeight(3);
            stroke("yellow");
            line(pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y+this.yOffset);
        }
    }