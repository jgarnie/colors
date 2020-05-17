'use strict'

const btn = document.querySelector('.button');

const changeColor = () => {

    const redElm = document.querySelector('#red');
    const greenElm  = document.querySelector('#green');
    const blueElm  = document.querySelector('#blue');
    
    let red = redElm.value;
    let green = greenElm.value;
    let blue = blueElm.value;
    let rgbColor = 'rgb('+red+','+green+','+blue+')';

    if( red > 255 || green > 255|| blue >255){
        alert('the number should be lower than 256')
    }else if( red < 0 || green < 0|| blue < 0){
        alert('number should be higher than 0')
    }
    document.querySelector('.wrapper').style.backgroundColor = rgbColor;
    console.log(rgbColor);
    document.querySelector('#color').textContent = rgbColor;
    
}

btn.addEventListener('click', changeColor)