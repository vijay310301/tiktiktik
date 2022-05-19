var a ;
var b ;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var x;
var total=1;


function start(){
    
    document.getElementById("game").style.display="block";
  
}

function hideStartButton(){
    document.getElementById("game").style.display="none";
}



function showTable(){

    hideStartButton();
    document.getElementById("image").style.display="none";
    document.getElementById("page").style.display="block";
     
setTimeout(function player1(){
      document.getElementById("player1").style.display="block";
      
},500);


}


function hidePlayer1(){
    document.getElementById("player1").style.display="none";
}

function player2(){
    document.getElementById("player2").style.display="block";
       
}

function hidePlayer2(){
    
    document.getElementById("player2").style.display="none";
}







function sorry1(){
    document.getElementById("sorry1").style.display="block";
    setTimeout( function refreshPage(){
        document.location.reload(true);
        },700)
}
 
function sorry2(){
    document.getElementById("sorry2").style.display="block";
    setTimeout( function refreshPage(){
        document.location.reload(true);
        },700)
}

function win1(){
    document.getElementById("win1").style.display="block";
}

function win2(){
    document.getElementById("win2").style.display="block";
}
function draw(){
    document.getElementById("draw").style.display="block";
}

function game2(){
    document.getElementById("game2").style.display="block";
}

function refreshPage2(){
    document.location.reload(true);
}







function displaya(event){
    
     a = event.keyCode;

    if(total===1){
       
        if(a!==120){
           
            sorry1();
            }
        else{
            hidePlayer1();
            player2();
            // hidePlayer2();
        }
    }
    else if(total===2){
       
     hidePlayer2();
       
       if(a!==111){

        sorry2();
       
        
        //reset one step
    }
    }
    else if(total===9)
    {
        
        if(a!==120){  sorry1(); }
         else{
        if(((a===120)&&(b===120)&&(c===120))  || ((a===120)&&(d==120)&&(g===120)) || ((a===120)&&(e===120)&&(i)===120)){
           win1();
           game2();
        }
        else
        {
            draw();
            game2();
        }
    }
     }
    else if( total%2 !== 0 )

    {
        
      if(a!==120){  sorry1();   }
         else{
           
           if(((a===120)&&(b===120)&&(c===120))  || ((a===120)&&(d==120)&&(g===120)) || ((a===120)&&(e===120)&&(i)===120)){
            win1();
            game2();
         }
       
    }

    }
    else{
        if(a!==111)
        {   sorry2(); 
           
        }
        else{
        if(((a===111)&&(b===111)&&(c===111))  || ((a===111)&&(d===111)&&(g===111)) || ((a===111)&&(e===111)&&(i===111))){
        win2();
        game2();
            }
        }
    }

    
   
    
total++;

}


function displayb(event){

     b = event.keyCode;
   
    if(total===1){
       
       if(b!==120){
            sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
        hidePlayer2();
     
   
       if(b!==111){
        sorry2();
    }
    }
    else if(total===9)
    {
       
        if(b!==120){  sorry1(); }
        else{
        if( ((a===120)&&(b===120)&&(c===120))  || ((b===120)&&(e===120)&&(h===120)) )
        {
            win1();
            game2();
        }
        else
        {
            
           draw();
           game2();
        }
    }

    }
    else if(total%2!==0){
        
        if(b!==120){ sorry1(); }
        else{
        if( ((a===120)&&(b===120)&&(c===120))  || ((b===120)&&(e===120)&&(h===120)) )
        {
            win1();
            game2();
        }
    }

    }
    else{
       
        if(b!==111){  sorry2(); }
        else{
        if( ((a===111)&&(b===111)&&(c===111))  || ((b===111)&&(e===111)&&(h===111)) )
            {
            win2();
            game2();
            }
    }
}

total++;

    
   
 }


   function displayc(event){
       
     c = event.keyCode;
       


    if(total===1){
      
        
       
        if(c!==120){
            sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
     
        hidePlayer2();
       if(c!==111){
        sorry2();
    }
    }
    else if(total===9)
    {
        
        if(c!==120)
        {
              sorry1(); 
        }
        else{
             if( ((a===120)&&(b===120)&&(c===120))  || ((g===120)&&(e===120)&&(c===120) ) || ((c===120)&&(f===120)&&(i===120) ) )
             {
             win1();
             game2();
             }
              else
             {
               
              draw();
              game2();
             }
    }


        
    }
    else if(total%2!==0){
     
        
        if(c!==120)
        {
              sorry1(); 
        }
        else{
             if( ((a===120)&&(b===120)&&(c===120))  || ((g===120)&&(e===120)&&(c===120) ) || ((c===120)&&(f===120)&&(i===120) ) )
             {
            win1();
            game2();
             }
    }

    }
    else{
        
        if(c!=111){  sorry2(); }
        else{
            if( ((a===111)&&(b===111)&&(c===111))  || ((g===111)&&(e===111)&&(c===111) ) || ((c===111)&&(f===111)&&(i===111) ) )
             {
            win2();
            game2();
             }
        
    }

    }
   
  

   



  total++;
 
}

 function displayd(event)
 {
      d = event.keyCode;
    

    if(total===1){
      
        if(d!==120){
            sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
     
        hidePlayer2();
       if(d!==111){
        sorry2();
    }
    }
    else if(total===9)
    {
        
        if(d!=120){  sorry1(); }
        else{
        if( ((a===120)&&(d===120)&&(g===120))  || ((d===120)&&(e===120)&&(f===120)) ) 
        {
            win1();
            game2();
        }
        else
        {
          
            draw();
            game2();
        }
    }    
    }
    else if(total%2!==0){
        
        if(d!==120){  sorry1(); }
        else{
        if( ((a===120)&&(d===120)&&(g===120))  || ((d===120)&&(e===120)&&(f===120)) ) 
        {
            win1();
            game2();
        }
    }

    }
    else{
        
        if(d!==111){  sorry2(); }
        else{
            if( ((a===111)&&(d===111)&&(g===111))  || ((d===111)&&(e===111)&&(f===111)) ) 
        {
            win2();
            game2();
        }
    }

    }
   
total++;


 }            

function displaye(event){
    e = event.keyCode;
    
    

    if(total===1){
      
        
        if(e!==120){
            sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
     
        hidePlayer2();
       if(e!==111){
        sorry2();
    }
    }
    else if(total===9)
    {
       
        if(e!==120){  sorry1(); }
        else{
        if( ((a===120)&&(e===120)&&(i===120) )  || ( (g===120)&&(e===120)&&(c===120) )  || ( (d===120)&&(e===120)&&(f===120) )  || ((b===120)&&(e===120)&&(h===120)) )
        {
            win1();
            game2();
        }
        else{
            
           draw();
           game2();
        }
     }
    }
    else if(total%2!==0){
        
        if(e!=120){  sorry1(); }
        else{
            if( ((a===120)&&(e===120)&&(i===120) )  || ( (g===120)&&(e===120)&&(c===120) )  || ( (d===120)&&(e===120)&&(f===120) )  || ((b===120)&&(e===120)&&(h===120)) )
        {
            win1();
            game2();
        }
    }

    }
    else{
       
        if(e!==111){  sorry2(); }
        else{
            if( ((a===111)&&(e===111)&&(i===111) )  || ( (g===111)&&(e===111)&&(c===111) )  || ( (d===111)&&(e===111)&&(f===111) )  || ((b===111)&&(e===111)&&(h===111)) )
            {
                win2();
                game2();
            }
       
    }

    }
   
total++;
  


}



function displayf(event){
    
     f = event.keyCode;
  

    if(total===1){
      
        if(f!==120){
            sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
     
        hidePlayer2();
       if(f!==111){
       sorry2();
    }
    }
    else if(total===9)
    {
        
        if(f!==120){ sorry1();}
        else{
        if( ( (c===120)&&(f===120)&&(i===120) ) || ((d===120)&&(e===120)&&(f===120) ) )
        {
            win1();
            game2();
        }
        else
        {
            
            draw();
            game2();
        }
    }
     }
    else if(total%2!==0){
        if(f!==120){  sorry1(); }
        else{
        if( ( (c===120)&&(f===120)&&(i===120) ) || ((d===120)&&(e===120)&&(f===120) ) )
        {
            win1();
            game2();
        }
    }

    }
    else{
        
        if(f!==111){  sorry2(); }
        else{
            if( ( (c===111)&&(f===111)&&(i===111) ) || ((d===111)&&(e===111)&&(f===111) ) )
            {
                win2();
                game2();
            }
    }

    }
   
    
total++;

}


function displayg(event){
    
     g = event.keyCode;



    if(total===1){
        if(g!==120){
           sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
        hidePlayer2();
    if(g!==111){
        sorry2();
    }
    }
    else if(total===9)
    {
       
        if(g!==120){  sorry1(); }
        else{
        if(((a===120)&&(d===120)&&(g===120) )  || ( (g===120)&&(e===120)&&(c===120) )
         || ( (g===120)&&(h===120)&&(i===120) ) ) 
         {
           win1();
           game2();
        }
        else{
          
            draw();
            game2();
        }
    }
     }
    else if(total%2!==0){
       
        if(g!==120){ sorry1(); }
        else{
            if(((a===120)&&(d===120)&&(g===120) )  || ( (g===120)&&(e===120)&&(c===120) )
         || ( (g===120)&&(h===120)&&(i===120) ) ) 
      
         {
            win1();
            game2();
        }
    }

    }
    else{
       
        if(g!==111){  sorry2(); }
        else{
            if(((a===111)&&(d===111)&&(g===111) )  || ( (g===111)&&(e===111)&&(c===111) )
            || ( (g===111)&&(h===111)&&(i===111) ) ) 
         
            {
             win2();
             game2();
           }   
        
    }

    }
   
    
total++;

}



function displayh(event){
    
     h = event.keyCode;

    if(total===1){
      
        
        if(h!==120){
            sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
        hidePlayer2();
     
 
       if(h!==111){
        sorry2();
    }
    }
    else if(total===9)
    {
       
        if(h!==120){  sorry1(); }
        else{
        if( ( (g===120)&&(h===120)&&(i===120) )  || ( (b===120)&&(e===120)&&(h===120) ) )
        {
            win1();
            game2();
        }
        else
        {
          
            draw();
            game2();
        }
    }
        
     }
    else if(total%2!==0){
        
        if(h!==120){  sorry1(); }
        else{
            if( ( (g===120)&&(h===120)&&(i===120) )  || ( (b===120)&&(e===120)&&(h===120) ) )
        {
            win1();
            game2();
        }
    }

    }
    else{
        
        if(h!==111){ sorry2();}
        else{
            if( ( (g===111)&&(h===111)&&(i===111) )  || ( (b===111)&&(e===111)&&(h===111) ) )
        
            {
                win2();
                game2();
            }
       
    }

    }
   
     
total++;


}



function displayi(event){
    

     i = event.keyCode;
   

if(total===1){
      
       
        if(i!==120){
            sorry1();
            //backward one step
        }
        else{
            hidePlayer1();
            player2();
        }
    }
    else if(total===2){
        hidePlayer2();
       
       if(i!==111){
        sorry2();
    }
    }
    else if(total===9)
    {
        
        if(i!=120){  sorry1(); }
        else{
        if( ( (g===120)&&(h===120)&&(i===120) )  || ( (c===120)&&(f===120)&&(i===120) ) || ( (a===120)&&(e===120)&&(i===120) ) )
        {
            win1();
            game2();
        }
        else
        {
        draw();
        game2();
       
        }
    }
     }
    else if(total%2!==0){
     
        if(i!==120){  sorry1(); }
        else{
        if( ( (g===120)&&(h===120)&&(i===120) )  || ( (c===120)&&(f===120)&&(i===120) ) || ( (a===120)&&(e===120)&&(i===120) ) )
        {
           win1();
           game2();
        }
    }

    }
    else{
       
        if(i!=111){  sorry2(); }
        else{
         if( ( (g===111)&&(h===111)&&(i===111) )  || ( (c===111)&&(f===111)&&(i===111) ) || ( (a===111)&&(e===111)&&(i===111) ) )
            {
                win2();
                game2();
            }
        
    }

    }
   
    
total++;

}






