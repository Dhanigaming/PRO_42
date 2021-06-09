var iss , issImage, SC , SCimage1 , SCimage2 , SCimage3 , SCimage4 ;
var backgroundImg;
var hasDocked;
var ISC

function preload(){
 backgroundImg = loadImage("spacebg.jpg");
 issImage = loadImage("iss.png");
 SCimage1 = loadImage("spacecraft1.png");
 SCimage2 = loadImage("spacecraft2.png");
 SCimage3 = loadImage("spacecraft3.png");
 SCimage4 = loadImage("spacecraft4.png");

}


function setup() {
  createCanvas(800 , 800);
  
  SC = createSprite(400 , 600 , 100, 50);
  SC.addImage("spacecraft",SCimage1);
  SC.scale = 0.3;

  iss = createSprite(400 ,400, 100, 50);
  iss.addImage("spacecraft",issImage);

  ISC = createSprite(330,464,20,20);
  ISC.visible = false;


  hasDocked = false ;
}

function draw() {
     background(backgroundImg);
     
     SC.setCollider("circle",0,0,80);
     ISC.setCollider("rectangle",0,0,20,20);
     ISC.debug = false;
     SC.debug = true;
    
     
      if(keyWentDown("RIGHT_ARROW")){
        SC.addImage(SCimage4);
        SC.velocityX = 1;
        
      }
      if(keyWentDown("LEFT_ARROW")){
        SC.addImage(SCimage3);
        SC.velocityX = -1;
       
      }
      if(keyWentDown("UP_ARROW")){
        SC.addImage(SCimage1);
        SC.velocityY = -1;
        
      }
      if(keyWentDown("DOWN_ARROW")){
        SC.addImage(SCimage2);
      } 
  
      if(hasDocked === true){
        SC.x = 328;
        SC.y = 500;
      }
    
       console.log(mouseX);
       console.log(mouseY);
     

    if(ISC.isTouching(SC)){
      hasDocked = true ;
     
      if(keyWentDown("RIGHT_ARROW")){
        SC.velocityX = 0;
        
      }
      if(keyWentDown("LEFT_ARROW")){
        SC.velocityX = 0;
       
      }
      if(keyWentDown("UP_ARROW")){
        SC.velocityY = 0;
        
      }

      fill("white");
      stroke("black");
      textSize(50);
      text("Docking Successful !",100,600);

      
    }  
  

  
  console.log(SC.x);
  console.log(SC.y);

  drawSprites();
} 