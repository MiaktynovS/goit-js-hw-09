const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    bodyEl: document.querySelector('body'),
}

console.log(refs);

let timerId = null;

refs.btnStart.addEventListener('click', onClickStart)
refs.btnStop.addEventListener('click', onClickStop)


function onClickStart(){
    timerId = setInterval(() => {
        refs.bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

}

function onClickStop() {
    clearInterval(timerId);
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }