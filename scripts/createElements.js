import {declOfNum, timeRemaining} from "./createTimer.js";
import {endDiscount, timeA} from "./elements.js";

export const startTimer = () => {

  const setTimer = timeRemaining(endDiscount);
  if (timeA <= 0 || !endDiscount) {
    return
  } else {
    const timerBlock = document.querySelector('.timerBlock');
    const days = timerBlock.querySelector('.day');
    days.textContent = setTimer.days;
    if (days.textContent <= 0) timerBlock.style.backgroundColor = 'green';
    if (days.textContent >= 0 && days.textContent < 10) days.textContent = `0${setTimer.days}`;

    const dayText = timerBlock.querySelector('.dayText');
    dayText.textContent = declOfNum(days.textContent, ['день', 'дня', 'дней']);


    const hours = timerBlock.querySelector('.hour');
    hours.textContent = setTimer.hours;
    if (hours.textContent >= 0 && hours.textContent < 10) hours.textContent = `0${setTimer.hours}`;

    const hourText = timerBlock.querySelector('.hourText');
    hourText.textContent = declOfNum(hours.textContent, ['час', 'часа', 'часов']);


    const minutes = timerBlock.querySelector('.minute');
    minutes.textContent = setTimer.minutes;
    if (minutes.textContent >= 0 && minutes.textContent < 10) minutes.textContent = `0${setTimer.minutes}`;

    const minuteText = timerBlock.querySelector('.minuteText');
    minuteText.textContent = declOfNum(minutes.textContent, ['минута', 'минуты', 'минут']);


    const seconds = timerBlock.querySelector('.second');
    seconds.textContent = setTimer.seconds;
    if (seconds.textContent >= 0 && seconds.textContent < 10) seconds.textContent = `0${setTimer.seconds}`;

    const secondText = timerBlock.querySelector('.secondText');
    secondText.textContent = declOfNum(seconds.textContent, ['секунда', 'секунды', 'секунд']);
  }
};
