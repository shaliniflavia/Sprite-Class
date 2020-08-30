class Sprite{
    constructor(a,b,c,d){
        this.x = a;
        this.y = b;
        this.width = c;
        this.height = d;
    }

    display() {
        ellipse(this.x,this.y,this.width,this.height);
    }

    isTouching(target){
    
    
        if(this.x - target.x <= (target.width + this.width) / 2 && 
        target.x - this.x <= (target.width + this.width) / 2 &&
        target.y - this.y <= (target.height + this.height) / 2 &&
        this.y - target.y <= (target.height + this.height) / 2) {
            return true;
        }
        else{
            false;
        }
  
    }




}