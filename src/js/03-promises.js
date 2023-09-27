import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = {};

const form = document.querySelector('.form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

function onInput(evt) {
if (evt.target.name === 'delay') {
    inputDate.delay = +(evt.target.value);
}
if (evt.target.name === 'step') {
  inputDate.step = +(evt.target.value);
}
if (evt.target.name === 'amount') {
  inputDate.amount = +(evt.target.value);
}
}

function onSubmit(evt) {
evt.preventDefault();

for (let i = 0; i < inputDate.amount; i += 1){
const delayStep = inputDate.delay + inputDate.step * i;

createPromise(i + 1, delayStep)
  .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
}

function createPromise(positionDate, delayDate) {
  return new Promise((resolve, reject) => {
    setTimeout((delay) => {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
  resolve({position: positionDate, delay: delayDate})
  } 
    reject({position: positionDate, delay: delayDate})
  }, delayDate)
})
}
