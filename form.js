class Form{
    constructor()
    {
        this.input=createInput("Name");
        this.button=createButton('Hello');
        this.greeting=createElement('h3');
    }
    display()
    {
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2-40,0);
       
       this.input.position(displayWidth/2-30,displayHeight/2-50);
       this.button.position(displayWidth/2+30,displayHeight/2)
       this.button.mousePressed(()=>
        {
           this.input.hide();
           this.button.hide();
           player.name=this.input.value();
           pcount=pcount+1;
           player.index=pcount;
           player.update();
           
           player.updateCount(pcount);
           this.greeting.html("Hello"+player.name);
           this.greeting.position(displayWidth/2-70,displayHeight/4); 
        }    
        )
    }
    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        
    }
    
}