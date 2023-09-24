import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { convertMs } from "./helpers";

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
const inputForm = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      if (selectedDates[0] < Date.now()) {
        alert('Please choose a date in the future')
      } else {
          btnStart.disabled = false;
    }
  },
};

btnStart.addEventListener('click', onStart);

function onStart(evt) {
  btnStart.disabled = true;
  inputForm.disabled = true;
  const id = setInterval(() => {
    const currentDate = Date.now();
    const selectedDate = new Date(inputForm.value);
    const dif = selectedDate - currentDate;
    if (dif < 1000) {
      clearInterval(id);
    }
    const timer = convertMs(dif);
    timerDays.textContent = timer.days.toString().padStart(2, 0);
    timerHours.textContent = timer.hours.toString().padStart(2, 0);
    timerMinutes.textContent = timer.minutes.toString().padStart(2, 0);
    timerSeconds.textContent = timer.seconds.toString().padStart(2, 0);
  }, 1000)
}


flatpickr(inputForm, options);