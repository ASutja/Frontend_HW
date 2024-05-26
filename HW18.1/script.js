document.getElementById('startButton').addEventListener('click', startNewTimer);

function startNewTimer() {
    const timeInput = document.getElementById('timeInput').value;
    const initialTime = parseInt(timeInput);

    if (isNaN(initialTime) || initialTime <= 0) {
        alert('Enter the correct time in seconds.');
        return;
    }

    const timerContainer = document.createElement('div');
    timerContainer.className = 'timer';

    const timeDisplay = document.createElement('span');
    timeDisplay.textContent = formatTime(initialTime);
    timerContainer.appendChild(timeDisplay);

    const stopButton = document.createElement('button');
    stopButton.textContent = 'Stop';
    timerContainer.appendChild(stopButton);

    document.getElementById('timers').appendChild(timerContainer);

    let timeLeft = initialTime;
    const timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeDisplay.textContent = '00:00';
        } else {
            timeLeft--;
            timeDisplay.textContent = formatTime(timeLeft);
        }
    }, 1000);

    stopButton.addEventListener('click', () => {
        clearInterval(timerInterval);
    });
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
