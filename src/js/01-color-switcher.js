const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const body = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

btnStart.addEventListener('click', onStart);

let changeColor = false;
btnStop.disabled = true;

function onStart(evt) {
    const id = setInterval(() => {
        const bodyColor = getRandomHexColor();
        body.style.backgroundColor = bodyColor;
        changeColor = true;

        if (changeColor) {
            btnStart.disabled = true;
            btnStop.disabled = false;
        }

        btnStop.addEventListener('click', onStop);

        function onStop(evt) {
            clearInterval(id);
            changeColor = false;
            btnStart.disabled = false;
            btnStop.disabled = true;
        }
    }, 1000
    );
    
}