var man_img, man;
var path, path_img, invisible_right, invisible_left;

function preload(){
    man_img = loadAnimation("Runner-1.png","Runner-2.png");
    path_img = loadImage("path.png");
}

function setup(){
    createCanvas(400,400);

    //path
    path = createSprite(170,200,2,50);
    path.addImage("path",path_img);
    path.velocityY = -7;
    

     //man
     man = createSprite(160,150,5,10);
     man.addAnimation("man",man_img);
     man.scale = 0.1;
     

     //invisible ground(right)
     invisible_right = createSprite(300,300,20,5000);
     invisible_right.visible = false;

     //invisible ground(left)
     invisible_left = createSprite(30,300,20,5000);
     invisible_left.visible = false;

}

function draw(){
    background("white");

    if(path.y<400){
        path.y = path.height/2
    }
     
    man.x = World.mouseX

    man.collide(invisible_right);
    man.collide(invisible_left);

    drawSprites();
}
