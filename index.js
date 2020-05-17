'use strict'

const btn = document.querySelector('.button');

const changeColor = () => {

    const redElm = document.querySelector('#red');
    const greenElm  = document.querySelector('#green');
    const blueElm  = document.querySelector('#blue');
    const opacityElm = document.querySelector('#opacity');
    let red = redElm.value;
    let green = greenElm.value;
    let blue = blueElm.value;
    let opacity = opacityElm.value;
    let rgbColor = 'rgba('+red+','+green+','+blue+','+opacity+')';

    if( red > 255 || green > 255|| blue >255){
        alert('number should be lower than 256')
    }else if( red < 0 || green < 0|| blue < 0){
        alert('number should be higher than 0')
    }
    document.querySelector('.wrapper').style.backgroundColor = rgbColor;
    console.log(rgbColor);
    document.querySelector('#color').textContent = rgbColor;
    
}

btn.addEventListener('click', changeColor)