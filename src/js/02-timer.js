import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { convertMs } from "./helpers";

import { refs } from "./refs";

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

