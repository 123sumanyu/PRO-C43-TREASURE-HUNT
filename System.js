class System{

    constructor(){}

    authenticate(actualCode,enteredCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(actualCode === enteredCode.toUpperCase())
           return true
        else 
           return false


        
    }

    display(){
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.accessCode1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.accessCode2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });
        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.accessCode3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });
    }

    
    
        

}