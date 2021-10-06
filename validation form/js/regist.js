let fields = document.querySelectorAll(".textb input");
let btn = document.querySelector(".btn");
function check(){
  if(fields[0].value != "" && fields[1].value != "" && fields[2].value != "")
    btn.disabled = false;
  else
    btn.disabled = true;  
}

fields[0].addEventListener("keyup",check);
fields[1].addEventListener("keyup",check);
fields[2].addEventListener("keyup",check);


const form = document.querySelector('.login-form');
console.log(form);
const mail = form.querySelector('[name="mail"]');
const userPassword = form.querySelector('[name="passw"]');
const confirmUserPassword = form.querySelector('[name="confirm"]');
const arr = [];

function retrieveFormValue(event) {
    event.preventDefault(); 
    const regex = /^[A-Za-z]{1}[A-Za-z0-9\_\-]+@[A-Za-z0-9\-]{1,20}\.([a-z]{2,3})$/

    if (!regex.test(mail.value)) {
     //alert("wrong mail");
     let par = document.getElementById("mail");
     par.innerHTML = "WRONG MAIL"
 
par.style.color = 'black';
 
function sec() {
    if(par.style.color == 'red') par.style.color='white'
       else par.style.color='red';
}
setInterval(sec, 200);
  
    }else if(userPassword.value !== confirmUserPassword.value){
      //alert("check your password");

      let checkPassword = document.getElementById("confirm");
      checkPassword.innerHTML = "CHECK YOUR PASSWORD";
 
      checkPassword.style.color = 'black';
 
 
function sec() {
    if(checkPassword.style.color == 'red') checkPassword.style.color='white'
       else checkPassword.style.color='red';
}
setInterval(sec, 200);

    }    
    else{
      const values = {
        mail: mail.value,
        userPassword: userPassword.value      
      };
      localStorage.setItem(values.mail , values.userPassword);
      console.log(values); 
      //arr.push(values);
      //localStorage.setItem(1 , arr);
     // console.log(arr);

    }    
}
//let a = '1';
//export { a };

form.addEventListener('submit', retrieveFormValue);







    


