var bg;
var ground;
var elsa,elsaImage;
var topGround;
var obs1,obs2;
var top;
var cloudsGroup, cloudImage1,cloudImage2;
var snowflackes;
var obsGroup,snowGroup;



function preload(){
bg=loadImage("assets/bgck.jpg");
cloudImage1 = loadImage("assets/cloud.jpg");
cloudImage2 = loadImage("assets/cloud.jpg");
elsaImage=loadImage("assets/elsa2.png");
obs1=loadImage("assets/m.png");
obs2=loadImage("assets/m3.png");
snowflackes=loadImage("assets/snow.png");

}





function setup() {
  createCanvas(windowWidth,windowHeight);
  ground=createSprite(500,300,2000,600);
  ground.addImage("ground",bg);
  ground.scale=2.2;
 ground.velocityX=-3;
ground.x=width/2;
 elsa=createSprite(50,100)
 elsa.addImage("elsa",elsaImage);
 elsa.scale=0.2;

 topGround = createSprite(500,10,800,20);

 topGround.visible = false;


 obsGroup = new Group();
 snowGroup = new Group();


}

function draw() {
  background(255,255,255);
  if (ground.x<0) {
    ground.x=ground.width/2;
  } 
  topObs();
  elsa.y=World.mouseY;
  if (keyWentDown("space")) {
    shoot();
  }
  
  if (obsGroup.isTouching(snowGroup)) {
    for (var i =0; i< obsGroup.length; i++) {
     if (obsGroup[i].isTouching(snowGroup)) {
       obsGroup[i].destroy();
       snowGroup.destroyEach();
     }
      
    }
  }

  if (obsGroup.isTouching(elsa)) {
    for (var i =0; i< obsGroup.length; i++) {
     if (obsGroup[i].isTouching(elsa)) {
       obsGroup[i].destroy();
       elsa.destroy();
     }
      
    }
  }


 // clouds();
  
  drawSprites();



  
  



  

}

function topObs() {
  if (World.frameCount%250===0) {
  var top= createSprite(500,300,40,40);
  //top.addImage(obs1);
  top.scale=0.2
  
   top.velocityX=(-5);
   top.y=random(100,500); 
   var r=Math.round(random(1,2));
  if (r===1) {
     top.addImage("top1",obs1);
   } else {
    top.addImage("top2",obs2);
   }
   obsGroup.add(top);
  }

 




}

function clouds() {
  if (World.frameCount%250===0) {
  var cloud= createSprite(500,300,40,40);
  
  cloud.scale=0.2
  
   cloud.velocityX=(-5);
   cloud.y=random(50,200); 
   var r=Math.round(random(1,2));
  if (r===1) {
     cloud.addImage("cloud1",cloudImage1);
   } else {
    cloud.addImage("cloud2",cloudImage2);
   }



  }

}
function shoot() {
  var snow=createSprite(elsa.x,elsa.y);
  snow.addImage("snow",snowflackes);
  snow.velocityX=5;
  snow.scale=0.05;
  snowGroup.add(snow);
}














