const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let timer;
let seconds = 0;

function updateDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    display.innerText = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

