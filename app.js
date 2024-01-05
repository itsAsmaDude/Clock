
function clock() {
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let AmPm = document.getElementById('AmPm');
    let am = 'AM'
    let time = new Date()

    hours.innerHTML = time.getHours();
    minutes.innerHTML = time.getMinutes();
    seconds.innerHTML = time.getSeconds();
    AmPm.innerHTML = am;

    if (hours == 0) {
        hours = 12;
    }
    if (hours < 12) {
        hours = hours - 12;
        AmPm = 'PM';
    }
}

setInterval(clock, 1)