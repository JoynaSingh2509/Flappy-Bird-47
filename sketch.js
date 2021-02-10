var bird,bg;
var pipes=[];
var score=0;

function preload(){
bg=loadImage("i/flappy bird bg (1).jpg")
}
function setup(){
    createCanvas(400,509);
    bird=new Bird();
    pipes.push(new Pipe());

    ground=new Ground();
}
function draw(){
    background(bg);



    ground.show();

    bird.update();
    bird.show();
   

    if(frameCount % 100 == 0){
        pipes.push(new Pipe());
    }

    for (var i=pipes.length-1; i >= 0; i--){
        pipes[i].show();
        pipes[i].update();

        if(pipes[i].hits(bird)){
            console.log("HIT");
        }
       
        if(pipes[i].offscreen()){
            pipes.splice(i,1);
        }

} 
//fill("orange");
//textSize(25);
//textFont("calibri")
//text("Score : "+score,10,30);


noStroke();
textFont("calibri light");
textSize(20);
fill(255)
text("Press Spacebar to jump",100,30);

bird.show();

}
  

function keyPressed(){
    if(key == ' '){
      bird.up();
    }
  }