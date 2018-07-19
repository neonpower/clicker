var counter  = document.querySelector('#counter');
var display = document.querySelector('#display');
var button = document.querySelector('#button');
var timer = 5;
var countNumber = 0;

display.textContent = timer;

var timerGame = function() {
	var timerGameInterval = setInterval(function() {
		if (timer > 1) {
			timer--;
			display.textContent = timer;			
		} else {
			button.disabled = true;
			display.textContent = 'Game Over';
			clearInterval(timerGameInterval);
		}
	}, 1000);
}

var startGame = function () {
	timerGame();
	button.removeEventListener('click', startGame);
}

button.addEventListener('click', startGame);

button.addEventListener('click', function() {
	countNumber++;
	counter.textContent = countNumber;
})
