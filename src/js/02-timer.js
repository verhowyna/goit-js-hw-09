import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { addLeadingZero, convertMs } from "./helpers";

const counterDays = document.querySelector('[data-days]');
const counterHours = document.querySelector('[data-hours]');
const counterMinutes = document.querySelector('[data-minutes]');
const counterSeconds = document.querySelector('[data-seconds]');
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
      } btnStart.disabled = false;
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
    counterDays.textContent = addLeadingZero(timer.days);    
    counterHours.textContent = addLeadingZero(timer.hours);
    counterMinutes.textContent = addLeadingZero(timer.minutes);
    counterSeconds.textContent = addLeadingZero(timer.seconds);
   
  }, 1000)
}
flatpickr(inputForm, options);