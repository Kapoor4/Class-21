function bounceOff(obj4, obj5){

    if(obj4.x-obj5.x < obj5.width/2+obj4.width/2 && obj5.x-obj4.x < obj5.width/2+obj4.width/2){
     
      obj4.velocityX = obj4.velocityX*(-1);
      obj5.velocityX = obj5.velocityX*(-1);
    }
  
    if(obj4.y-obj5.y < obj5.height/2+obj4.height/2 && obj5.y-obj4.y < obj5.height/2+obj4.height/2){
  
      obj4.velocityY = obj4.velocityY*(-1);
      obj5.velocityY = obj5.velocityY*(-1);
    }
  
  
  }
  
  function isTouching(obj4,obj5){
  
    if(obj4.x-obj5.x < obj5.width/2+obj4.width/2 && obj5.x-obj4.x < obj5.width/2+obj4.width/2
      && obj4.y-obj5.y < obj5.height/2+obj4.height/2 && obj5.y-obj4.y < obj5.height/2+obj4.height/2
      ){
      return true;
    }
  
    else{
     
     return false; 
    }
  }