var a ="";
var b ="";
var c="";
var d="";
var e="";
var f="";
var g="";
var h="";
var i="";
var x="";
var total=1;
var lastValue;
var final; 
// console.log(a);


// var vj=" ";

// function chumma(event){

//     vj=event.keyCode;

    
//         document.getElementById("sample2").disabled=true;
    

// }






function start(){
    
    document.getElementById("game").style.display="block";
  
}

function hideStartButton(){
    document.getElementById("game").style.display="none";
}


function blink ()
{
        document.getElementById("game").style.boxShadow="10px 10px"
}




function showTable(){

    hideStartButton();
    // document.getElementById("image").style.display="none";
    document.getElementById("page").style.display="block";
     
setTimeout(function player1(){
      document.getElementById("player1").style.display="block";
      
},500);


}

function player1(){
    document.getElementById("player1").style.display="block";
    
}


function hidePlayer1(){
    document.getElementById("player1").style.display="none";
}

function player2(){
    document.getElementById("player2").style.display="block";
    
       
}

function hidePlayer2(){
    
    document.getElementById("player2").style.display="none";
    // player1();
}







function sorry1(){
    document.getElementById("sorry1").style.display="block";
     document.getElementById("resetA").style.display="block";
     noUseAll();
   
    // alert(" ia m sorr1");
    
    // setTimeout( function refreshPage(){
    //     document.location.reload(true);
    //     },700)
}

function resetA(){
    // alert("I am resetA");
    document.getElementById("sorry1").style.display="none";
     document.getElementById("resetA").style.display="none";

    
     document.getElementById("first").disabled=false;
     document.getElementById("second").disabled=false;
     document.getElementById("third").disabled=false;
     document.getElementById("forth").disabled=false;
     document.getElementById("fifth").disabled=false;
     document.getElementById("sixth").disabled=false;
     document.getElementById("seventh").disabled=false;
     document.getElementById("eighth").disabled=false;
     document.getElementById("nineth").disabled=false;

     if(lastValue===1){
        //  alert("i am checking position");
        document.getElementById("first").disabled=false;
        document.getElementById("first").value="";
      
     }
  else if(lastValue===2){
    document.getElementById("second").disabled=false;
    document.getElementById("second").value="";
   

  }
   
  else if(lastValue===3){
    document.getElementById("third").disabled=false;
    document.getElementById("third").value="";
  }
   
  else if(lastValue===4){
    document.getElementById("forth").disabled=false;
    document.getElementById("forth").value="";
  }
   
  else if(lastValue===5){
    document.getElementById("fifth").disabled=false;
    document.getElementById("fifth").value="";
  }

  else if(lastValue===6){
    document.getElementById("sixth").disabled=false;
    document.getElementById("sixth").value="";
  }
  else if(lastValue===7){
    document.getElementById("seventh").disabled=false;
    document.getElementById("seventh").value="";
  }
  else if(lastValue===8){
    document.getElementById("eighth").disabled=false;
    document.getElementById("eighth").value="";
  }

  else if(lastValue===9){
    // alert(" i am i");
    document.getElementById("nineth").disabled=false;
    document.getElementById("nineth").value="";
  }
  else{
      alert("do nothing");
  }

}

function resetB(){
    // alert("i am reset B");
  
    document.getElementById("sorry2").style.display="none";
      document.getElementById("resetB").style.display="none";

      document.getElementById("first").disabled=false;
     document.getElementById("second").disabled=false;
     document.getElementById("third").disabled=false;
     document.getElementById("forth").disabled=false;
     document.getElementById("fifth").disabled=false;
     document.getElementById("sixth").disabled=false;
     document.getElementById("seventh").disabled=false;
     document.getElementById("eighth").disabled=false;
     document.getElementById("nineth").disabled=false;
      if(lastValue===1){
        //   alert("i am checking position ");
          document.getElementById("first").disabled=false;
        document.getElementById("first").value="";
     }
  else if(lastValue===2){
    document.getElementById("second").disabled=false;
    document.getElementById("second").value="";
  }
   
  else if(lastValue===3){
    document.getElementById("third").disabled=false;
    document.getElementById("third").value="";
  }
   
  else if(lastValue===4){
    document.getElementById("forth").disabled=false;
    document.getElementById("forth").value="";
  }
   
  else if(lastValue===5){
    document.getElementById("fifth").disabled=false;
    document.getElementById("fifth").value="";
  }

  else if(lastValue===6){
    document.getElementById("sixth").disabled=false;
    document.getElementById("sixth").value="";
  }
  else if(lastValue===7){
    document.getElementById("seventh").disabled=false;
    document.getElementById("seventh").value="";
  }
  else if(lastValue===8){
    document.getElementById("eighth").disabled=false;
    document.getElementById("eighth").value="";
  }
  else if(lastValue===9){
    document.getElementById("nineth").disabled=false;
    document.getElementById("nineth").value="";
  }

  else {
  alert("Something wrong");
    
    
  }

}



 
function sorry2(){
    document.getElementById("sorry2").style.display="block";
    document.getElementById("resetB").style.display="block";
    noUseAll();
    // setTimeout( function refreshPage(){
    //     document.location.reload(true);
    //     },700)
}

function win1(){
    document.getElementById("win1").style.display="block";
    document.getElementById("table").style.background="white"
    document.getElementById("first").style.background="white";
    document.getElementById("first").style.border="none";
    document.getElementById("second").style.background="white";
    document.getElementById("second").style.border="none";
    document.getElementById("third").style.background="white";
    document.getElementById("third").style.border="none";
    document.getElementById("forth").style.background="white";
    document.getElementById("forth").style.border="none";
    document.getElementById("fifth").style.background="white";
    document.getElementById("fifth").style.border="none";
    document.getElementById("sixth").style.background="white";
    document.getElementById("sixth").style.border="none";
    document.getElementById("seventh").style.background="white";
    document.getElementById("seventh").style.border="none";
    document.getElementById("eighth").style.background="white";
    document.getElementById("eighth").style.border="none";
    document.getElementById("nineth").style.background="white";
    document.getElementById("nineth").style.border="none";
}

function win2(){
    document.getElementById("win2").style.display="block";
    document.getElementById("table").style.background="black"
    document.getElementById("first").style.background="black";
    document.getElementById("first").style.border="none";
    document.getElementById("second").style.background="black";
    document.getElementById("second").style.border="none";
    document.getElementById("third").style.background="black";
    document.getElementById("third").style.border="none";
    document.getElementById("forth").style.background="black";
    document.getElementById("forth").style.border="none";
    document.getElementById("fifth").style.background="black";
    document.getElementById("fifth").style.border="none";
    document.getElementById("sixth").style.background="black";
    document.getElementById("sixth").style.border="none";
    document.getElementById("seventh").style.background="black";
    document.getElementById("seventh").style.border="none";
    document.getElementById("eighth").style.background="black";
    document.getElementById("eighth").style.border="none";
    document.getElementById("nineth").style.background="black";
    document.getElementById("nineth").style.border="none";
}
function draw(){
    // alert("i am working");
    document.getElementById("draw").style.display="block";
    document.getElementById("table").style.background="grey"
    document.getElementById("first").style.background="grey";
    document.getElementById("first").style.border="none";
    document.getElementById("second").style.background="grey";
    document.getElementById("second").style.border="none";
    document.getElementById("third").style.background="grey";
    document.getElementById("third").style.border="none";
    document.getElementById("forth").style.background="grey";
    document.getElementById("forth").style.border="none";
    document.getElementById("fifth").style.background="grey";
    document.getElementById("fifth").style.border="none";
    document.getElementById("sixth").style.background="grey";
    document.getElementById("sixth").style.border="none";
    document.getElementById("seventh").style.background="grey";
    document.getElementById("seventh").style.border="none";
    document.getElementById("eighth").style.background="grey";
    document.getElementById("eighth").style.border="none";
    document.getElementById("nineth").style.background="grey";
    document.getElementById("nineth").style.border="none";
    document.getElementById("body").style.background="black";
}

function game2(){
    document.getElementById("game2").style.display="block";
}

function refreshPage2(){
    document.location.reload(true);
}

const noUsea=function (){

    // alert("i am working");
    // document.getElementById("first").style.background="white";
    document.getElementById("first").disabled=true; 
    
    }

function noUseb(){
    // document.getElementById("second").style.background="white";
    document.getElementById("second").disabled=true; 
   
}

function noUsec(){
    // document.getElementById("third").style.background="white";
    document.getElementById("third").disabled=true;
}

function noUsed(){
    // document.getElementById("forth").style.background="white";
    document.getElementById("forth").disabled=true; 
}

function noUsee(){
    // document.getElementById("fifth").style.background="white";
    document.getElementById("fifth").disabled=true; 
}

function noUsef(){
    // document.getElementById("sixth").style.background="white";
    document.getElementById("sixth").disabled=true;
}

function noUseg(){
    // document.getElementById("seventh").style.background="white";
    document.getElementById("seventh").disabled=true; 
} 

function noUseh(){
    // document.getElementById("eighth").style.background="white";
    document.getElementById("eighth").disabled=true; 
}

function noUsei(){
    // document.getElementById("nineth").style.background="white";
    document.getElementById("nineth").disabled=true; 
}

function noUseAll(){
    // console.log("I am no use all");
    document.getElementById("first").disabled=true;
    document.getElementById("second").disabled=true;
    document.getElementById("third").disabled=true;
    document.getElementById("forth").disabled=true;
    document.getElementById("fifth").disabled=true;
    document.getElementById("sixth").disabled=true;
    document.getElementById("seventh").disabled=true;
    document.getElementById("eighth").disabled=true;
    document.getElementById("nineth").disabled=true;
    
}
// noUseAll();

function displaya(event)
{
    lastValue=1;
    // final=0;

     a = event.keyCode;
    
 if(total===1)
    {
    if(a!==120){
    
        sorry1();

        // noUseAll();
       }

        else{
            hidePlayer1();
            player2();
             total++;
             document.getElementById("first").style.background="white";
             noUsea();
            // const first=document.getElementById("first");
            // first.style.background="white";
            // first.style.background="green";
             final=1;
            // document.getElementById("first").disabled=true;
            
           

        }
       
       
    }
   
    else if(total===2){
       
     hidePlayer2();
    //  player1();
       
       if(a!==111){
        
         sorry2();
        // noUseAll();
    }
    else{
        total++;
        noUsea();
        final=1;
        document.getElementById("first").style.background="black";

        // document.getElementById("first").disabled=true;
        

    }
    
    }
    else if(total===9)
    {
        
       
        if(a!==120)
        {
            
            sorry1();
        //    noUseAll();
         }

         else
         {
             noUsea();
             document.getElementById("first").style.background="white";
             final=1;
            //   document.getElementById("first").disabled=true;
        
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
            // noUseAll();
      }
         else
         {
            noUsea();
            document.getElementById("first").style.background="white";
            final=1;
        // document.getElementById("first").disabled=true;
           
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
        // noUseAll();
           
    }
        else
        {
            noUsea();
            document.getElementById("first").style.background="black";
            final=1;
            // document.getElementById("first").disabled=true; 
          
        if(((a===111)&&(b===111)&&(c===111))  || ((a===111)&&(d===111)&&(g===111)) || ((a===111)&&(e===111)&&(i===111))){
        win2();
        game2();
        noUseAll();
            }
            total++;
        }
        
       
    }
   

}


function displayb(event){
    lastValue=2;
//   final=0;
b = event.keyCode;
   
    if(total===1){
       
       if(b!==120){
        sorry1();
        noUseAll();
     }
        else{
            hidePlayer1();
            player2();
            total++;
            noUseb();
            final=2;

             document.getElementById("second").style.background="white";

        }
    }
    else if(total===2)
    {
        hidePlayer2();
     
   
       if(b!==111)
       {
        // lastValue=b;
        sorry2();
      noUseAll();
       }
       else
       {
          total++;
          noUseb();
          final=2;
        document.getElementById("second").style.background="black";
       }
    }
    else if(total===9)
    {
       
        if(b!==120)
        
        {  
            // lastValue=b;
             sorry1();
            noUseAll();;
           
         }

        else
        {
            noUseb();
            document.getElementById("second").style.background="white";
            final=2;

        if( ((a===120)&&(b===120)&&(c===120))  || ((b===120)&&(e===120)&&(h===120)) )
        {
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

    else if(total%2!==0)
    {
        
        if(b!==120)
        {
            // lastValue=b;
              sorry1();
           noUseAll();
         }

        else
        {
            noUseb();
            document.getElementById("second").style.background="white";
            final=2;

        if( ((a===120)&&(b===120)&&(c===120))  || ((b===120)&&(e===120)&&(h===120)) )
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
       
        if(b!==111)
        {
    //    lastValue=b;
        sorry2();
       noUseAll();
         }

        else
        {
            noUseb();
            final=2;
            document.getElementById("second").style.background="black";

        if( ((a===111)&&(b===111)&&(c===111))  || ((b===111)&&(e===111)&&(h===111)) )
            {
            win2();
            game2();
            noUseAll();
            }
            total++;
    }
}




   
 }


   function displayc(event){
       lastValue=3;
       
     c = event.keyCode;
       


    if(total===1)
    {
       if(c!==120)
       {
        
             sorry1();
            noUseAll();
           
        }
        else
        {
            hidePlayer1();
            player2();
            total++;
            noUsec();
            final=3;
            document.getElementById("third").style.background="white";
        }
    }
    else if(total===2)
    {
     hidePlayer2();

       if(c!==111)
    {
        
        sorry2();
       noUseAll();
    }
    else{
        total++;
        noUsec();
        final=3;
        document.getElementById("third").style.background="black";

    }
    }
    else if(total===9)
    {
        
        if(c!==120)
        {
           
            sorry1(); 
            noUseAll();
        }
        else
        {
            noUsec();
            final=3;
             document.getElementById("third").style.background="white";
             if( ((a===120)&&(b===120)&&(c===120))  || ((g===120)&&(e===120)&&(c===120) ) || ((c===120)&&(f===120)&&(i===120) ) )
             {
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
    else if(total%2!==0)
    {
      if(c!==120)
        {
           
            sorry1();
            noUseAll();
        }
        else
        {
            noUsec();
            final=3;
            document.getElementById("third").style.background="white";
             if( ((a===120)&&(b===120)&&(c===120))  || ((g===120)&&(e===120)&&(c===120) ) || ((c===120)&&(f===120)&&(i===120) ) )
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
        if(c!=111)
        {
           
            sorry2();
           noUseAll();
         }
        else
        {
            noUsec();
            final=3;
            document.getElementById("third").style.background="black";
            if( ((a===111)&&(b===111)&&(c===111))  || ((g===111)&&(e===111)&&(c===111) ) || ((c===111)&&(f===111)&&(i===111) ) )
             {
            win2();
            game2();
            noUseAll();
             }
             total++;
        }

    }
}

 function displayd(event)
 {
    lastValue=4;
    d = event.keyCode;
    
    
    if(total===1)
    {
      if(d!==120)
      {
       
            sorry1();
           noUseAll();
           
        }
        else{
            hidePlayer1();
            player2();
            total++;
            final=4;
            noUsed();
            document.getElementById("forth").style.background="white";
        }
    }
    else if(total===2)
    {
     
        hidePlayer2();
       if(d!==111)
       {
      
        sorry2();
        noUseAll();
    }
    else
    {
        total++;
        noUsed();
        final=4;
        document.getElementById("forth").style.background="black";
    }
    }
    else if(total===9)
    {
        
        if(d!=120)
        { 
            // lastValue=d;
            sorry1();
            noUseAll();
         }
        else
        {
            noUsed();
            final=4;
            document.getElementById("forth").style.background="white";
        if( ((a===120)&&(d===120)&&(g===120))  || ((d===120)&&(e===120)&&(f===120)) ) 
        {
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
    else if(total%2!==0)
    {
        
    if(d!==120)
    { 
        
         sorry1();
       noUseAll();
     }
    else
    {
        noUsed();
        final=4;
           document.getElementById("forth").style.background="white";
        if( ((a===120)&&(d===120)&&(g===120))  || ((d===120)&&(e===120)&&(f===120)) ) 
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
        
    if(d!==111)
    {
        
        sorry2();
        noUseAll();
     }
    else
    {
        noUsed();
        final=4;
        document.getElementById("forth").style.background="black";
        if( ((a===111)&&(d===111)&&(g===111))  || ((d===111)&&(e===111)&&(f===111)) ) 
        {
            win2();
            game2();
            noUseAll();
        }
        total++;
    }

    }
}            

function displaye(event){
    lastValue=5;
    e = event.keyCode;
    
    if(total===1)
    {
    if(e!==120)
    {
        
            sorry1();
           noUseAll();
           
    }
    else
    {
            hidePlayer1();
            player2();
            total++;
            final=5;
            noUsee();
             document.getElementById("fifth").style.background="white";
           
    }

    }

    else if(total===2)
    {
     
        hidePlayer2();

       if(e!==111)
       {
        
        sorry2();
        noUseAll();
     }
     else{
         total++;
         final=5;
         noUsee();
         document.getElementById("fifth").style.background="black";
 
     }
    }
    else if(total===9)
    {
       
    if(e!==120)
    {
        
     sorry1();
    noUseAll();
     }
    else
    {
        noUsee();
        final=5;
        document.getElementById("fifth").style.background="white";
        if( ((a===120)&&(e===120)&&(i===120) )  || ( (g===120)&&(e===120)&&(c===120) )  || ( (d===120)&&(e===120)&&(f===120) )  || ((b===120)&&(e===120)&&(h===120)) )
        {
            win1();
            game2();
            noUseAll();
        }
        else{
            
           draw();
           game2();
           noUseAll();
        }
     }
    }
    else if(total%2!==0)
    {

    if(e!=120)
    {
      
          sorry1();
        noUseAll();
     }
        else
        {
            noUsee();
            final=5;
            document.getElementById("fifth").style.background="white";
            if( ((a===120)&&(e===120)&&(i===120) )  || ( (g===120)&&(e===120)&&(c===120) )  || ( (d===120)&&(e===120)&&(f===120) )  || ((b===120)&&(e===120)&&(h===120)) )
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
       
    if(e!==111)
    {
        
        sorry2();
        noUseAll();
     }
    else
    {
        noUsee();
        final=5;
            document.getElementById("fifth").style.background="black";
            if( ((a===111)&&(e===111)&&(i===111) )  || ( (g===111)&&(e===111)&&(c===111) )  || ( (d===111)&&(e===111)&&(f===111) )  || ((b===111)&&(e===111)&&(h===111)) )
            {
                win2();
                game2();
                noUseAll();
            }
    total++;
    }

    }
   

  


}



function displayf(event){

    lastValue=6;
    
     f = event.keyCode;
  

    if(total===1)
    {
      
        if(f!==120)
        {
            
             sorry1();
            noUseAll();
           
        }
        else{
            hidePlayer1();
            player2();
            total++;
            final=6;
            noUsef();
             document.getElementById("sixth").style.background="white";
           
        }
    }
    else if(total===2)
    {
     
        hidePlayer2();
       if(f!==111)
       {
       
       sorry2();
   noUseAll();
       }
       else
       {
           total++;
           final=6;
           noUsef();
           document.getElementById("sixth").style.background="black";
       }
    }
    else if(total===9)
    {
        if(f!==120)
        {
            
            sorry1();
           noUseAll();
        }
        else
        {
            noUsef();
            final=6;
            document.getElementById("sixth").style.background="white";
        if( ( (c===120)&&(f===120)&&(i===120) ) || ((d===120)&&(e===120)&&(f===120) ) )
        {
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
    else if(total%2!==0)
    {
        if(f!==120)
        {
            
             sorry1();
           noUseAll();
         }
        else
        {
            noUsef();
            final=6;
            document.getElementById("sixth").style.background="white";
        if( ( (c===120)&&(f===120)&&(i===120) ) || ((d===120)&&(e===120)&&(f===120) ) )
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
        
        if(f!==111)
        {
          
              sorry2();
            noUseAll();
         }
        else{
            noUsef();
            final=6;
            document.getElementById("sixth").style.background="black";
            if( ( (c===111)&&(f===111)&&(i===111) ) || ((d===111)&&(e===111)&&(f===111) ) )
            {
                win2();
                game2();
                noUseAll();
            }
            total++;
    }

    }
}


function displayg(event)
{
    lastValue=7;
    g = event.keyCode;

if(total===1)
{
    if(g!==120)
    {
      
       sorry1();
    noUseAll();
            
    }
    else
    {
            hidePlayer1();
            player2();
            total++;
            final=7;
            noUseg();
            document.getElementById("seventh").style.background="white";
          
    }
    }

else if(total===2)
{
    hidePlayer2();
    if(g!==111)
    {
        
       sorry2();
        noUseAll();
    }
    else
    {
   total++;
   final=7;
   noUseg();
        document.getElementById("seventh").style.background="black";

    }
    }
else if(total===9)
{
       
    if(g!==120)
    {
       
         sorry1(); 
       noUseAll();
    }
    else
    {
        noUseg();
        final=7;
             document.getElementById("seventh").style.background="white";
    if(((a===120)&&(d===120)&&(g===120) )  || ( (g===120)&&(e===120)&&(c===120) )
         || ( (g===120)&&(h===120)&&(i===120) ) ) 
        {
           win1();
           game2();
           noUseAll();
        }
        else{
          
            draw();
            game2();
            noUseAll();
        }
    }
}
else if(total%2!==0)
    {
       if(g!==120)
       {
        
            sorry1();
            noUseAll();
     }
    else
    {
        noUseg();
        final=7;
           document.getElementById("seventh").style.background="white";
            if(((a===120)&&(d===120)&&(g===120) )  || ( (g===120)&&(e===120)&&(c===120) )
         || ( (g===120)&&(h===120)&&(i===120) ) ) 
      
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
       
        if(g!==111)
        {
           
               sorry2();
          noUseAll();
         }
        else
        {
            noUseg();
            final=7;
            document.getElementById("seventh").style.background="black";
            if(((a===111)&&(d===111)&&(g===111) )  || ( (g===111)&&(e===111)&&(c===111) )
            || ( (g===111)&&(h===111)&&(i===111) ) ) 
         
            {
             win2();
             game2();
             noUseAll();
           }   
        total++;
    }

    }
}



function displayh(event){

    lastValue=8;
    
     h = event.keyCode;

    if(total===1)
    {
      if(h!==120)
      {
       
             sorry1();

            noUseAll();
           
        }
        else{
            hidePlayer1();
            player2();
            total++;
            final=8;
            noUseh();
            document.getElementById("eighth").style.background="white";
          
        }
    }
    else if(total===2)
    {
        hidePlayer2();
     
 
       if(h!==111)
       {
       
        sorry2();
        noUseAll();
    }
    else
    {
        total++;
        final=8;
        noUseh();
        document.getElementById("eighth").style.background="black";
    }
    }
    else if(total===9)
    {
       if(h!==120)
       {
        
              sorry1();
           noUseAll();
      }
        else
        {
            noUseh();
            final=8;
            document.getElementById("eighth").style.background="white";
        if( ( (g===120)&&(h===120)&&(i===120) )  || ( (b===120)&&(e===120)&&(h===120) ) )
        {
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
    else if(total%2!==0)
    {    
        if(h!==120)
        {
            
               sorry1();
            noUseAll();
         }
        else
        {
            noUseh();
            final=8;
            document.getElementById("eighth").style.background="white";
            if( ( (g===120)&&(h===120)&&(i===120) )  || ( (b===120)&&(e===120)&&(h===120) ) )
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
        if(h!==111)
        {
           
              sorry2();
            noUseAll();
        }
        else
        {
            noUseh();
            final=8;
            document.getElementById("eighth").style.background="black";
            if( ( (g===111)&&(h===111)&&(i===111) )  || ( (b===111)&&(e===111)&&(h===111) ) )
        
            {
                win2();
                game2();
                noUseAll();
            }
       total++;
    }

    }
   
     


}



function displayi(event){
    
    
    lastValue=9;
    

    i = event.keyCode;
   

if(total===1)
{       
        if(i!==120)

        {
         sorry1();
          
         noUseAll();
            
        }

        else{
            hidePlayer1();
            player2();
            total++;
            final=9;
            noUsei();
             document.getElementById("nineth").style.background="white";
          
        }
}
else if(total===2)
    {
        hidePlayer2();
       
       if(i!==111)
       {
       
        sorry2();

        noUseAll();
       }
       else
       {
         total++;
         final=9;
         noUsei();
         document.getElementById("nineth").style.background="black";
       
       }
    }
else if(total===9)
    {
        if(i!=120)
        {
            
            sorry1();

           noUseAll();
         }
        else
        {
            noUsei();
            final=9;
            document.getElementById("nineth").style.background="white";
        if( ( (g===120)&&(h===120)&&(i===120) )  || ( (c===120)&&(f===120)&&(i===120) ) || ( (a===120)&&(e===120)&&(i===120) ) )
        {
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

else if(total%2!==0)
{
     if(i!==120)
     {
        
         sorry1(); 

        noUseAll();
    }
        else
        {
            noUsei();
            final=9;
            document.getElementById("nineth").style.background="white";
        if( ( (g===120)&&(h===120)&&(i===120) )  || ( (c===120)&&(f===120)&&(i===120) ) || ( (a===120)&&(e===120)&&(i===120) ) )
        {
           win1();
           game2();
           noUseAll();
        }
        total++;
       
    }

    }
else{
       
    if(i!=111)
    {
       
         sorry2();

        noUseAll();
     }
    else{
        noUsei();
        final=9;
        document.getElementById("nineth").style.background="black";
         if( ( (g===111)&&(h===111)&&(i===111) )  || ( (c===111)&&(f===111)&&(i===111) ) || ( (a===111)&&(e===111)&&(i===111) ) )
            {
                win2();
                game2();
                noUseAll();
            }
        total++;
        // alert(total);
    }

    }
   
    



}






