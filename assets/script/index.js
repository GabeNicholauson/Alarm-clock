'use strict';

let currentTime = document.querySelector('.current-time');
let setTime = document.querySelector('.time');
let enterTime = document.querySelector('.enter-time');
let setAlarm = document.querySelector('.set-alarm');
const alarmSound = new Audio('./assets/audio/alarm.mp3');
alarmSound.type = 'audio/mp3';

setAlarm.addEventListener('click', () => {
    if (validTime()) {
        alarmTime();
    } else {
        alert('Please enter a valid time \nEx: 08:32 or 12:43:56');
    }
});

updateTime();
setInterval(updateTime, 100);
setInterval(playAlarm, 100)

/*****************************************
 * Functions                             
*****************************************/
function enterTimeValue() {
    return enterTime.value.trim();
}

function alarmTime() {
    setTime.innerHTML = `${enterTimeValue()}`;
    enterTime.value = '';
}

function validTime () {
    const timeRegex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?$/;
    if (enterTimeValue().length > 0 && timeRegex.test(enterTimeValue())) {
        return true;
    } else {
        return false;
    }
}

function updateTime() {
    let time = new Date();
    currentTime.innerHTML = `${time.toString().substring(16, 24)}`;
}

function playAlarm() {
    if (setTime.innerHTML === currentTime.innerHTML || 
        setTime.innerHTML === currentTime.innerHTML.substring(0, 5)) {
            alarmSound.volume = 0.1;
            alarmSound.play();
            setTime.innerHTML = '';
    }
}
