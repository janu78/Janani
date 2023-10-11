

// var nameError = document.getElementById("name-error");

// var messageError = document.getElementById("messaage-error");

var emailError = document.getElementById("email-error");

var submitError = document.getElementById("submit-error");




function validateName(){
    var name = document.getElementById('username').value;
    var nameptn = /^[A-Za-z]+$/
    var namerg = new RegExp(nameptn)
    var nameError = document.getElementById("name-error");
    if(namerg.test(name)){
        nameError.innerHTML='valid';
        nameError.innerHTML ='<i class="fa-sharp fa-solid fa-circle-check"></i>';
        return true;
    }
    else{
      nameError.innerHTML = 'invalid';
      return false;
    }
    


    
    
}

function validateEmail(){
     var email = document.getElementById('email').value;
    var emailError = document.getElementById("email-error");
    var emailptn = /^[a-z]+[a-z0-9]*[@][a-z]*[\.][a-z]{2,3}$/
    var emailrg = new RegExp(emailptn)
    if(emailrg.test(email)){
      emailError.innerHTML='valid';
      emailError.innerHTML ='<i class="fa-sharp fa-solid fa-circle-check"></i>';
      return true;
  }
  else{
    emailError.innerHTML='invalid';
    return false;
  }
}
function validateMessage(){
    var message = document.getElementById('textarea').value;
    var messageError = document.getElementById("message-error");
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML= left + '.';
        return false;
       
    }
    messageError.innerHTML= '<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName() ||  !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML= 'please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}