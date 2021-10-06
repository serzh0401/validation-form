let exit = document.getElementById("exit");
console.log(exit);
exit.style.color = 'red';

exit.addEventListener("click" , regMenu );
function regMenu(){
    localStorage.removeItem("me");
};


//window.addEventListener('load', present);
//function present(){
    //for(let i=0; i<localStorage.length; i++) {
       // let key = localStorage.key(i);
        //if(key == "me"){
            //window.location.href = 'singin.html'

            //alert("hello");
           // break;
       // }
        //else{
         //   window.location.href = 'singin.html'
       // }
        
   // }
    
  
//};
