function displaya(event)
{
    lastValue=1;

     a = event.keyCode;
    
 if(total===1)
    {
    if(a!==120){
    
        sorry1();

        noUseAll();
       }

        else{
            hidePlayer1();
            player2();
             total++;
             noUsea();
             document.getElementById("first").style.background="white";
           

        }
       
       
    }
   
    else if(total===2){
       
     hidePlayer2();
       
       if(a!==111){
        
         sorry2();
        noUseAll();
    }
    else{
        total++;
        noUsea();
        document.getElementById("first").style.background="black";

    }
    
    }
    else if(total===9)
    {
       
        if(a!==120)
        {
            
            sorry1();
           noUseAll();
         }

         else
         {
             noUsea();
             document.getElementById("first").style.background="white";
        if(((a===120)&&(b===120)&&(c===120))  || ((a===120)&&(d==120)&&(g===120)) || ((a===120)&&(e===120)&&(i)===120)){
           win1();
           game2();
           noUseAll();
        }
        else
        {
            draw();
            game2();
            noUseAll();
        }

    }
   
     }

    else if( total%2 !== 0 )

    {
        
        
      if(a!==120)
      {
       
            sorry1(); 
            noUseAll();
      }
         else
         {
           noUsea();
           document.getElementById("first").style.background="white";
           if(((a===120)&&(b===120)&&(c===120))  || ((a===120)&&(d==120)&&(g===120)) || ((a===120)&&(e===120)&&(i)===120))
           {
            win1();
            game2();
            noUseAll();
            
            }
         total++;
       
    }
   

    }

    else
    {
        
     if(a!==111)

    { 
       
        sorry2(); 
        noUseAll();
           
    }
        else
        {
            noUsea();
            document.getElementById("first").style.background="black";
        if(((a===111)&&(b===111)&&(c===111))  || ((a===111)&&(d===111)&&(g===111)) || ((a===111)&&(e===111)&&(i===111))){
        win2();
        game2();
        noUseAll();
            }
            total++;
        }
        
       
    }
   

}