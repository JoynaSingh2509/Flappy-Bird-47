function Pipe(){

    var spacing = random(50,height/2);
    var centery = random(spacing, height-spacing);

    this.top = centery-spacing/2;
    this.bottom = height - (centery+spacing/2);
    this.x = width;
    this.w  = 20;
    this.speed = 2;
    this.highlight = false;
    this.stop = false;

    this.hits=function(bird){
        if(bird.y<this.top || bird.y>height-this.bottom){
            if(bird.x > this.x && bird.x < this.x + this.w){
                this.highlight=true;
                this.stop=true;
                return true;
            }
        }
        this.highlight=false;
        this.stop=false;
        return false; 
    }

    
    this.show=function(){
        stroke(34,139,34);   
        strokeWeight(4)
        fill(173,255,47);

        if(this.highlight){
            noStroke();
            fill("red");
        }
        if(this.stop){
            this.velocity=0;
        
        }

        rect(this.x,0,this.w,this.top);
        rect(this.x,height-this.bottom,this.w,this.bottom);
    }
    this.update=function(){
        this.x-=this.speed;
    }
    this.offscreen=function(){
        if(this.x < -this.w){
            return true;
        }else{
            return false;
        }
    }
}
