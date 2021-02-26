var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

var block1 = createSprite(100,380,20,50);
block1.shapeColor = 'purple';
var block2 = createSprite(200,380,20,50);
block2.shapeColor = 'red';
var block3 = createSprite(300,380,20,50);
block3.shapeColor = 'blue';
var block4 = createSprite(400,380,20,50);
block4.shapeColor = 'pink';

var striker = createSprite(random(20,750))
striker.velocityX = 4;
striker.velocityY = 5;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if(block1.isTouching(striker) && striker.bounceOff(block1)){
striker.shapeColor = "purple";
}
if(block2.isTouching(striker) && striker.bounceOff(block2)){
    striker.shapeColor = "red";
    music.stop();
    }
    if(block3.isTouching(striker) && striker.bounceOff(block3)){
        striker.shapeColor = "blue";
        striker.velocityX = 0;
        
        }
        if(block4.isTouching(striker) && striker.bounceOff(block4)){
            striker.shapeColor = "pink";
            music.play();
            }
            
drawSprites();
    //add condition to check if box touching surface and make it box
}
