
var progressingTime = 0;  
var intervalId = null;

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const numbers = document.getElementById("numbers");

function start() {
    var pre = new Date();
    intervalId = setInterval(function() {
        const now = new Date();
        progressingTime += now - pre;
        pre = now;
        measurementTime();
        console.log(progressingTime);
    }, 100);
    
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
} 

function reset() {
    clearInterval(intervalId);
    progressingTime = 0;
    numbers.textContent = "0:0:0:0";
    
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}


function stop() {
    clearInterval(intervalId);
    
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function measurementTime() {
    const demicalSeconds = progressingTime % 1000;
    const seconds = Math.floor(progressingTime / 1000) % 60;
    const minute = Math.floor(progressingTime / (1000 * 60) % 60);
    const hour = Math.floor(progressingTime / (1000 * 60 * 60));
    
    const demicalSecondsString = demicalSeconds.toString().slice(0 , 1);
    const secondsString = seconds.toString().slice(0 , 2);
    const minuteString = minute.toString().slice(0 , 2);
    const hourString = hour.toString().slice(0 , 2);
    
    
    
    numbers.innerHTML = `${hourString}:${minuteString}:${secondsString}:${demicalSecondsString}`;
}