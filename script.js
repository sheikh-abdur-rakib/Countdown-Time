const daysEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minsEL = document.getElementById('mins');
const secondsEL = document.getElementById('seconds');


const projectSubmit= "12 Mar 2022"

function countdown (){
    const projectSubmitDate= new Date (projectSubmit);
    const currentDate= new Date ();

    const allSeconds = (projectSubmitDate-currentDate)/1000;

    const days = Math.floor (allSeconds / 3600/ 24);
    const hours = Math.floor (allSeconds / 3600) % 24;
    const mins = Math.floor (allSeconds / 60) % 60;
    const seconds = Math.floor (allSeconds) % 60;

    daysEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minsEL.innerHTML = formatTime(mins);
    secondsEL.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

//initial call
countdown();

setInterval (countdown, 1000)   