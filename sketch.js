var mar, movimentoMar;
var parede,parede2,iceberg;
var barco, movimentoBarco,barcoMorto;
var ENCERRAR = 0
var JOGAR = 1
var ej = JOGAR

function preload(){
  
movimentoMar = loadImage("sea.png")
  
movimentoBarco = loadAnimation ("ship1.png","ship2.png")
  
}

function setup(){
  
createCanvas(windowWidth,windowHeight);
  
  grupo1 = new Group ();
  
mar = createSprite(10,100,400,20)
 mar.addImage("imagem solo",movimentoMar);
  mar.velocity.x = -5
  
parede = createSprite(width/2,height-500,width,20)
  parede.visible = false
  
parede2 = createSprite(width/2,height,width,20)
  parede2.visible = false
  
barco = createSprite(90,230,400,20)
 barco.addAnimation("imagem barco",movimentoBarco);
  barco.scale = 0.2
   barco.debug = false
  
}

function draw() {
  
  background("lightblue");
  createEdgeSprites();
  
  if(keyDown("r")&&ej===ENCERRAR){
    
    ej=JOGAR
    
    barco.y = 230
    
    mar.velocityX =-5
    
  }
 
  if(grupo1.isTouching(barco)){
   
   ej = ENCERRAR 
    
  }
  
  if(ej===ENCERRAR){
    
      mar.velocityX = 0
    
      grupo1.destroyEach();
    
      barco.velocityY = 3
      barco.lifetime = width/3
    
  }
    
  if(ej===JOGAR){
    
  obstaculos();
    
  barco.collide(parede)
  barco.collide(parede2) 

  if(keyDown("DOWN_ARROW")||keyDown("s")){
    
      barco.y = barco.y +10
    
  }
    
  if(keyDown("UP_ARROW")||keyDown("w")){
    
      barco.y = barco.y -10
    
  }
    
  }

  if(mar.x <0) {
    
   mar.x = mar.width/2 
    
  }
  
    drawSprites();
  
}

function obstaculos() {
  
 if(frameCount%60 === 0){
   
  iceberg= createSprite(width+10,random(height/2-100,height),20,20)
   iceberg.shapeColor= "darkblue"
    iceberg.velocityX = -6
     iceberg.lifetime = width/iceberg.velocityX
     grupo1.add(iceberg);
      
   
 }

}


