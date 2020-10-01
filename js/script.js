function validEmail()

{
var mail = document.getElementsByName('email')[0].value; // where `mail` is id of your input form
var email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

  if (mail.match(email))
  {
      
  }
  else
  {
      var style = document.getElementsByTagName('input')[0];
      style.style.border = "2px solid hsl(0, 93%, 68%)";
      var icon = document.getElementsByClassName('erroricon')[0];
      icon.style.visibility = "visible";
      var change = document.getElementsByClassName('errorMessageEmail')[0];
      change.innerHTML = "Please provide a valid email"
      window.stop();
  }
    
}