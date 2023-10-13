const counter = document.getElementById('counter');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const likesList = document.querySelector('.likes');
const pause = document.getElementById('pause');
let isPaused = false;
let seconds = 0;
let timerInterval;
let likes = {};

function updateCounter() {
  counter.textContent = seconds;
  seconds++;
}

function incrementCounter() {
  seconds++;
  counter.textContent = seconds;
}

function decrementCounter() {
  seconds--;
  counter.textContent = seconds;
}

function likeCounter() {
  if (likes[seconds]) {
    likes[seconds]++;
  } else {
    likes[seconds] = 1;
  }

  displayLikes();
}

function displayLikes() {
  likesList.innerHTML = '';

  for (const key in likes) {
    const li = document.createElement('li');
    li.textContent = `${key} has been liked ${likes[key]} times`;
    likesList.appendChild(li);
  }
}

function togglePause() {
  isPaused = !isPaused;

  if (isPaused) {
    clearInterval(timerInterval);
    pause.textContent = 'resume';
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
  } else {
    timerInterval = setInterval(updateCounter, 1000);
    pause.textContent = 'pause';
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
  }
}

plus.addEventListener('click', incrementCounter);
minus.addEventListener('click', decrementCounter);
heart.addEventListener('click', likeCounter);
pause.addEventListener('click', togglePause);

timerInterval = setInterval(updateCounter, 1000);