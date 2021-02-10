function Ground(){
    this.x=0;
    this.y=510;
    this.width=200;
    this.height=70;

    this.show=function(){
        fill("black");
        rect(this.x,this.y,400,25)
    }
}