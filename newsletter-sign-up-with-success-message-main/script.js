/* The code is declaring and initializing variables using JavaScript's `var` keyword. */
var btn = document.getElementById('subscribe');
var emailSpan = document.getElementsByClassName("email-success");

var emailInput = document.getElementById('emailInput');
var input = document.querySelector('input');
var span = document.getElementById('error-msg')



/* The code snippet is adding an event listener to the `btn` element, which is triggered when the
button is clicked. */
btn.addEventListener('click',function(){
    var emailInput = input.value;
    console.log(emailSpan)
    console.log(span)
    
    if (emailInput) {    
      window.location.href = "success.html";// Replace with the URL of the target page   
      emailSpan.innerHTML = emailInput; 
    } else {
      input.style.border= '1px solid red';
      span.style.display = 'block';
    }
});

input.addEventListener('dblclick', function(){
    input.style.border= '1px solid var(--Grey)';
    span.style.display = 'none';
})

