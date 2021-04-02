const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var thun, thun1, thun2, thun3, thun4,bgIMG;

var engine, world;
var maxDrops = 100;
var drops = [];
var rand;
var thunderCreatedFrame = 0;

function preload(){
    thun1 = loadImage("thunder1.png");
    thun2 = loadImage("thunder2.png");
    thun3 = loadImage("thunder3.png");
    thun4 = loadImage("thunder4.png");
    bgIMG= loadImage("bg.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    
    engine = Engine.create();
    world = engine.world;
    
    umbrella = new Umbrella(windowWidth/2,500);


    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400)));
        }

    }

}

function draw(){
    background(bgIMG);
    Engine.update(engine);


      rand = Math.round(random(1,4));
      if(frameCount%80===0){
          thunderCreatedFrame=frameCount;
          thun = createSprite(random(10,370), random(10,30), 10, 10);
          switch(rand){
              case 1: thun.addImage(thun1);
              break;
              case 2: thun.addImage(thun2);
              break; 
              case 3: thun.addImage(thun3);
              break;
              case 4: thun.addImage(thun4);
              break;
              default: break;
          }
          thun.scale = random(0.3,0.5)
      }
  
      if(thunderCreatedFrame + 10 ===frameCount && thun){
          thun.destroy();
      }

      umbrella.display();
      umbrella.display();

      //displaying rain drops
      for(var i = 0; i<maxDrops; i++){
          drops[i].showDrop();
          drops[i].updateY();
          
      }
  
      drawSprites();
}   




