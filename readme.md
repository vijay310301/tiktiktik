# Tic Tac Toe Game #

## Process ##

* Step 1 : Start the process.

* Step 2 : Display the table to play ( When page is loaded )

* Step 3 : Allocate "x" symbol to player 1 with the text appearance "Hi player 1 , USE 'X' ".

* Step 4 : Get the symbol from player 1 through any of the  input field without existing 1 character which is "x"

     * Step 4.1 : Check the input field with x wheather the input field==="X" If true ,  Go to : Step 5 (allow player 2 to enter the value.)

     * Step 4.2 : If condition is false , Throw the message " Sorry ! Wrong value try again" and reset a single step.(Go to step 4)

* Step 5 :Allocate "o" symbol for player 2  through the text appearance "Hello player 2 , USE 'o' "

* Step 6 : Get the symbol from player 2 through any of the remaing  input fields  without existing 1 charecter which is "o"

     * Step 6.1 : Check the value entered by player 2 wheatther it is equals to "o" If true , Go to step 7.

     * Step 6.2 : If the condition is false , then Throw the message " Sorry ! Wrong value try again" and reset a single step. (Go to step 6)

* Step 7 : Get the Second time value from player 1 through any of the remaining input fields .

* Step 8 : Go to step 4 .

* Step 9 : GET the second time input value from player 2 through any of the remaining input fields.

* Step 10 : Go to step 6.

* Step 11 : Get the third time value from player 1 Through any of the remaing input fileds.

    * Step 11.1 : Go to step 4.1 That means Check input value === "x" ,

    * Step 11.2 : If true means execute the following function.
    
        * Step 11.2.1 : Start the function .

        * Step 11.2.2 : Initialize the 9 boxes with variables using the document.getElementById method in javascript
                        by assigning id to the html input elements like a,b,c,d,e,f,g,h,i.

        * Step 11.2.3 : check total <= 5 , if the condition true , execute the below:

                 * Check the input field position of the player 1:  

                 * If ( a.value === "x" ) 

                   * check (a,b,c === x or a,d,g === x or a,e,i === x) --> Display : You are win 

                                                                       --> else Go to step 12.

                * If ( b.value === "x" ) 

                     * check (a,b,c === x or b,e,h === x)   --> Display : You are win 

                                                      --> else Go to step 12.

                * If ( c.value === "x" ) 

                     * check (a,b,c === x or g,e,c === x or c,f,i === x ) --> Display : You are win 

                                                                          -->else Go to step 12.                                               

                * If ( d.value === "x" ) 

                     * check (a,d,g === x or d,e,f === x ) --> Display : You are win 

                                                           -->else Go to step 12.                                                                 

                  * If ( e.value === "x" ) 

                     * check (a,e,i === x or b,e,h === x  or c,e,g === x or d,e,f === x ) --> Display : You are win 

                                                           -->else Go to step 12.     


                  
                  * If ( f.value === "x" ) 

                     * check ( d,e,f === x or c,f,i === x  ) --> Display : You are win 

                                                           -->else Go to step 12.  


                  * If ( g.value === "x" ) 

                     * check ( a,d,g === x or g,h,i === x  or g,e,c === x ) --> Display : You are win 

                                                           -->else Go to step 12.                                                                                                                                        
                 * If ( h.value === "x" ) 

                     * check ( b,e,h === x or g,h,i === x  ) --> Display : You are win 

                                                           -->else Go to step 12.

                 * If ( i.value === "x" ) 

                     * check ( a,e,i === x or g,h,i === x or c,f,i === x  ) --> Display : You are win 

         * Step 12.3 : Else Go to                                                    -->else Go to step 12.


   *  Step 12 : Get the 3 rd value from player 2   

   * Step 13 : If value === o  then --> do the above function with the comparision of o else --> Go to step 6.

   * Step 14 : Continue the steps until the total value gets 0 

   * Step 15 : If total === 0 meams Print " MAtch DRAW " and restart the game again.

   * Step 16 : Stop the process.

## Sample Screens ##

<img src="images/sampleImage1.png">

<img src="images/sampleImage2.png">

<img src="images/sampleImage3.png">

<img src="images/sampleImage4.png">

<img src="images/sampleImage5.png">

<img src="images/sampleImage6.png">

<img src="images/sampleImage7.png">

<img src="images/sampleImage8.png">
   







   

   
    













