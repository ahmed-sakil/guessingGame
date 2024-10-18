
const check = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');

let w = 0;
let l = 0;
let c = 0;

check.addEventListener('submit', (event)=>{
    event.preventDefault();
    let x = Math.floor((Math.random()*5)+1);
    let guess = document.querySelector('input').value;
    document.querySelector('input').value="";

    c++;
    if(c==5)
    {
        input.disabled = true;
        btn.disabled = true;

    }
    document.querySelector('.attempt').innerHTML = `Attemps remaining ${(5-c)}`;

    if(x==guess)
    {
        w++;
        document.querySelector('.message').innerHTML = `You have won`;
        document.querySelector('.numerIs').innerHTML = `The number is : ${x}`;
    }
    else{
        l++;
        document.querySelector('.message').innerHTML = `You have lost.`;
        document.querySelector('.numerIs').innerHTML = `The number is : ${x}`;
    }
    document.querySelector('.won').innerHTML = `Won : ${w}`;
    document.querySelector('.lose').innerHTML = `Lose : ${l}`;

    let anm = document.querySelectorAll('.anm');
    anm.forEach((anm) =>{
        anm.classList.add('anm2');
    });
    
    

});