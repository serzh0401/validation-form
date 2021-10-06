window.addEventListener('load', present);
function present(){
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        if(key == "me"){
            //window.location.href = 'singin.html'
            window.location.href = 'main.html'
            break;
        }
       
        
    }
    
  
};
let fields = document.querySelectorAll(".textb input");
let btn = document.querySelector(".btn");
function check(){
  if(fields[0].value != "" && fields[1].value != "")
    btn.disabled = false;
  else
    btn.disabled = true;  
}

fields[0].addEventListener("keyup",check);
fields[1].addEventListener("keyup",check);

let registration = document.getElementById("create");
console.log(registration);
let title = document.getElementById("reg");
console.log(title);
//import {userPassword} from 'js/regist.js';


registration.addEventListener("click" , regMenu );
function regMenu(){
    title.innerHTML = "log in"
};

console.log(localStorage.length);
//for(let i=0; i<localStorage.length; i++) {
  //let key = localStorage.key(i);
  //alert(`${key}: ${localStorage.getItem(key)}`);
//}

//for (var key in localStorage) {
  //console.log(localStorage[key]);
//}
const form = document.querySelector('.login-form');
const mail = form.querySelector('[name="mail"]');
const userPassword = form.querySelector('[name="passw"]');
function retrieveFormValue(event) {
  event.preventDefault();
  for(let i=0; i<localStorage.length; i++) {
    let key = localStorage.key(i);
    let val = localStorage.getItem(key);
    let checkbox = document.querySelector('#cheched');
    if(mail.value == key && userPassword.value == val && checkbox.checked === true){
              
      let me = "i was  ";
      localStorage.setItem("me" , me);
          
              //localStorage.removeItem("me" , me);
              window.location.href = 'main.html';
    }
             else if(mail.value == key && userPassword.value == val && checkbox.checked === false){
                  localStorage.removeItem("me");
                  window.location.href = 'main.html'
             }
       
    else{
      let checkPassword = document.getElementById("confirm");
      checkPassword.innerHTML = "CHECK YOUR MAIL OR PASSWORD";
 
      checkPassword.style.color = 'red';
    }  
    
  }
  

}


form.addEventListener('submit', retrieveFormValue);

