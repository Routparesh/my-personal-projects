var btn = document.querySelector('button');
var input = document.querySelector('input');


btn.addEventListener('click',function(){
    var emailInput = document.querySelector('input').value;

    if (emailInput) {
      var emailSpan = document.getElementById("email");
      emailSpan.textContent = emailInput;
      window.location.href = "http://127.0.0.1:5500/success.html"; // Replace with the URL of the target page
     
    } else {
      input.style.border= '1px solid red';
    }
});