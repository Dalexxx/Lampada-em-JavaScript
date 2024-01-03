const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp')

function isOn(){
    return lamp.src.indexOf('ligada') > -1;
}

function isOff(){
    return lamp.src.indexOf('desligada') > -1;
}

function ligadesliga(){
    if (isOff()){
        lamp.src = './img/ligada.jpg'
        turnOnOff.innerHTML = 'Desligar'
    }else if (isOn()){
        lamp.src = './img/desligada.jpg'
        turnOnOff.innerHTML = 'Ligar'
    }
}

function brokenLamp(){
    lamp.src = './img/quebrada.jpg'
    turnOnOff.innerHTML = 'Quebroukkkkk'
}

turnOnOff.addEventListener('click', ligadesliga)
lamp.addEventListener('dblclick', brokenLamp)
lamp.addEventListener('mouseover', ligadesliga)
lamp.addEventListener('mouseleave', ligadesliga)