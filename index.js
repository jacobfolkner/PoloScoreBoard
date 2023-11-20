let teams = {
    home: 0,
    guest: 0
}

let chukker = 1;
let timer = null;

let seconds = 0;

function startTimer () {
    timer = setInterval(function () {
        seconds += 1;
        let minutes = Math.floor(seconds / 60);
        let secondsLeft = seconds % 60;
        document.getElementById('timer').innerHTML = `${minutes} : ${seconds}`;
        increaseChukker();
    }, 1000);
}

function stopTimer () {
    clearInterval(timer);
}

function resetTimer () {
    seconds = 0;
    document.getElementById('timer').innerHTML = `0 : 0`;
    stopTimer();
}

function addPoints (team , points) {
    teams[team] += points;
    document.getElementById(`${team}-points`).innerHTML = teams[team];
}

function increaseChukker () {
    if (seconds === 5) {
        chukker += 1;
    }
    document.getElementById('chukker').innerHTML = chukker;
}