let button = document.querySelector('.inner-dice');
let span = document.querySelector('span');
let p = document.querySelector('p');

button.addEventListener('click',function(){
    let url = 'https://api.adviceslip.com/advice'

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        span.innerHTML = `ADVICE # ${data.slip.id}`;
        p.innerHTML = `"${data.slip.advice}"`
    })
    .catch((error)=>{
        console.log(error)
    })
})


