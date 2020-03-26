class Game{
    constructor()
    {
       
    }

    getState()
    {
        var st=database.ref('gameState');
        st.on("value",function(data)
        {
            state=data.val();
        })
    }
    update(game)
    {
      database.ref('/').update(
      {
         gameState:game
      })
    }
    start()

   {
     if(state===0){
         player=new Player();
         player.getCount();
         form=new Form();
         form.display();
     }
     
     car1=createSprite(100,200);
     car1.addImage("car",c1);
     car2=createSprite(300,200);
     car2.addImage("carr",c2);
     car3=createSprite();
     car3.addImage("caar",c3);
     car4=createSprite();
     car4.addImage("ccar",c4);
     cars=[car1,car2,car3,car4];


   }
    
     play()
     {
       form.hide();
       textSize(30);
       text("Game Start",120,100);
       Player.getPlayerInfo();
       if(allPlayers!==undefined)
       {
         background(198,135,103);
         image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
         var index=0;
         var x=0;
         var y=0;
         var dpu=130;
         for(var plr in allPlayers)
         {
          /*if(plr === "Player"+player.index)
          { fill("red") 
         }else{ fill("black") } 
         dpu+=20 
         textSize(15) 
         text(allPlayers[plr].name + ":" + allPlayers[plr].distance,120,dpu)*/

           index=index+1;
           x=x+200;
           y=displayHeight-allPlayers[plr].distance;
           cars[index-1].x=x;
           cars[index-1].y=y;
           if(index==player.index)
           {
             cars[index-1].shapeColor="red";
             camera.position.x=displayWidth/2;
             camera.position.y=cars[index-1];
           } 
           
         }
        }
           if(keyIsDown(UP_ARROW) && player.index!==null)
           {
             console.log("hello");
             player.distance+=50;
             player.update();
           } 
           drawSprites();


     }

}