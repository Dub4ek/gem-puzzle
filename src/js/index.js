import '../css/style.css';
import '../css/style.scss';
import Time from './Time';
import Puzzle from './Puzzle';

const timeEl = document.querySelector('.time'),
	resetEl = document.querySelector('#reset'),
	pauseEl = document.querySelector('#pause'),
	overEl = document.querySelector('.over');

let game = new Puzzle(),
	time = new Time(timeEl);


window.onload = function () {
	game.newGame();
	time.showTime();

	resetEl.addEventListener('click', resetHandler);
	pauseEl.addEventListener('click', pauseHandler);
}

function resetHandler() {
	time.clearTimer();
	time.showTime();
	game.newGame();
}

function pauseHandler() {
	if (pauseEl.innerHTML == 'Pause') {
		time.pause();
		pauseEl.innerHTML = 'Continue';
		overEl.classList.add('show-over');
	} else {
		time.showTime();
		pauseEl.innerHTML = 'Pause';
		overEl.classList.remove('show-over');
	}
}