
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let lapTimes = [];

document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('pause-btn').addEventListener('click', pauseStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);
document.getElementById('lap-btn').addEventListener('click', lapStopwatch);

function startStopwatch() {
	startTime = new Date().getTime();
	isRunning = true;
	document.getElementById('start-btn').disabled = true;
	document.getElementById('pause-btn').disabled = false;
	updateDisplay();
}

function pauseStopwatch() {
	elapsedTime += new Date().getTime() - startTime;
	isRunning = false;
	document.getElementById('start-btn').disabled = false;
	document.getElementById('pause-btn').disabled = true;
}

function resetStopwatch() {
	elapsedTime = 0;
        isRunning = false;
	lapTimes = [];
	document.getElementById('start-btn').disabled = false;
	document.getElementById('pause-btn').disabled = true;
	document.getElementById('lap-times').innerHTML = '';
	updateDisplay();
}

function lapStopwatch() {
	let lapTime = elapsedTime;
	lapTimes.push(lapTime);
	document.getElementById('lap-times').innerHTML += `<li>${formatTime(lapTime)}</li>`;
}

function updateDisplay() {
	if (isRunning) {
		elapsedTime = new Date().getTime() - startTime;
		let seconds = Math.floor(elapsedTime / 1000);
		let minutes = Math.floor(seconds / 60);
		let hours = Math.floor(minutes / 60);
		seconds %= 60;
		minutes %= 60;
		hours %= 24;
		document.getElementById('display').innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
		setTimeout(updateDisplay, 1000);
	}
}
function pad(number) {
	return (number < 10 ? '0' : '') + number;
}

function formatTime(time) {
	let seconds = Math.floor(time / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	seconds %= 60;
	minutes %= 60;
	hours %= 24;
	return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}



